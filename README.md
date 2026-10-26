# samuelbarbeau.com

Portfolio + blog. Vue 3 + Vite, minimal terminal look. **All content lives in [`content/`](content/)**, not in the Vue code.

```sh
npm install
npm run dev      # http://localhost:5173 (drafts visible)
npm run build    # type-check + production build into dist/ (drafts stripped)
```

## Editing content

Two ways, same result (files in `content/` change, a commit triggers the deploy):

1. **Admin panel**: open `/admin/` on the live site (or `localhost:5173/admin/index.html` in dev).
   Powered by [Sveltia CMS](https://github.com/sveltia/sveltia-cms), configured in [`public/admin/config.yml`](public/admin/config.yml).
   Sign in with a GitHub fine-grained personal access token
   (repo `samb271/portfolio`, permission *Contents: read & write*). Saves are commits to `master`.
2. **By hand**: edit the Markdown/YAML files directly.

| What | Where |
| --- | --- |
| Name, headline, email, links, section titles/intros | `content/site.yaml` |
| Jobs (tabs in *Work*) | `content/work/*.md` |
| Publications (*Research*; intro text is in `site.yaml`) | `content/publications/*.md` |
| Involvement (labs, clubs, schools) | `content/involvement/*.md` |
| Hobbies (*Play*) | `content/play/*.md` |
| Blog posts | `content/blog/*.md` |
| Images | `public/uploads/`, referenced as `/uploads/name.png` |

- The filename is the slug (`content/blog/my-post.md` → `/blog/my-post`).
- `order` controls position (lowest first). Posts and publications sort by `date`, newest first.
- Publications: add `*` after an author name for equal contribution; your name is highlighted automatically. `arxiv: <id>` adds arxiv/pdf links and fills the generated BibTeX. `featured: true` + `tldr` puts a paper in the box at the top.
- Posts with `draft: true` only appear in `npm run dev`.
- Any field named `body` is Markdown, including `roles[].body`.

## How it works

- `vite.config.mts` has a small plugin that parses `content/**/*.md` (YAML frontmatter + Markdown) and `*.yaml` at build time.
- `src/content/index.ts` loads them with `import.meta.glob` and exports typed, sorted lists.
- Theme tokens (colors, font) are CSS variables at the top of `src/assets/main.css`.
- The glyph-shuffle effect is `src/composables/useShuffle.ts`, used through `<ShuffleText>`.

Adding a new field: add it to the Markdown frontmatter, to the type in `src/content/index.ts`, to the component that shows it, and to `public/admin/config.yml` so the admin panel can edit it.
