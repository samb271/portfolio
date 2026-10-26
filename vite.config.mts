import { fileURLToPath, URL } from 'node:url'
import { basename } from 'node:path'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { parse as parseYaml } from 'yaml'
import { marked } from 'marked'

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/

function toHtml(markdown: string) {
  return marked.parse(markdown, { async: false }) as string
}

// Any field called `body` (at any depth, e.g. roles[].body) is Markdown and gets rendered to HTML.
function renderBodies(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(renderBodies)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, inner]) =>
        key === 'body' && typeof inner === 'string' ? [key, toHtml(inner)] : [key, renderBodies(inner)]
      )
    )
  }
  return value
}

/**
 * Turns files in /content into plain JS modules at build time:
 * - `*.md`   -> { ...frontmatter, slug, body (html), words }, or null for drafts in production
 * - `*.yaml` -> the parsed object
 */
function contentPlugin(): Plugin {
  let isBuild = false
  return {
    name: 'portfolio-content',
    enforce: 'pre',
    configResolved(config) {
      isBuild = config.command === 'build'
    },
    transform(code, id) {
      const path = id.split('?')[0]

      if (/\.ya?ml$/.test(path)) {
        return { code: `export default ${JSON.stringify(parseYaml(code) ?? {})}`, map: null }
      }

      if (path.endsWith('.md')) {
        const match = code.match(FRONTMATTER)
        const data = match ? (parseYaml(match[1]) ?? {}) : {}
        // Drafts never reach the production bundle.
        if (isBuild && data.draft === true) return { code: 'export default null', map: null }
        const markdown = (match ? match[2] : code).trim()
        const entry = {
          ...(renderBodies(data) as Record<string, unknown>),
          slug: basename(path, '.md'),
          body: markdown ? toHtml(markdown) : '',
          words: markdown ? markdown.split(/\s+/).length : 0,
        }
        return { code: `export default ${JSON.stringify(entry)}`, map: null }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [contentPlugin(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
