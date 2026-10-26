// Typed access to everything in /content. Files are parsed at build time by the
// `portfolio-content` plugin in vite.config.ts, so nothing here runs a parser.
import siteData from '../../content/site.yaml'

export interface Link { label: string; url: string }

export interface SectionCopy { title: string; intro?: string }

export interface Site {
  name: string
  handle: string
  headline: string
  intro: string
  email: string
  scholar?: string
  links: Link[]
  sections: Record<'work' | 'research' | 'involvement' | 'play' | 'blog', SectionCopy>
}

interface Base {
  slug: string
  title: string
  order?: number
  tags?: string[]
  body: string
  words: number
}

export interface Role { title: string; year?: string; body: string }

export interface Entry extends Base {
  /** Short name for the side menu (e.g. an acronym). Defaults to the title. */
  short?: string
  url?: string
  period?: string
  roles?: Role[]
}

export interface Release { title: string; cover: string; link: string }

export interface Hobby extends Base {
  period?: string
  image?: string
  credit?: string
  releases?: Release[]
}

export interface Publication {
  slug: string
  title: string
  /** Full names in paper order. Suffix `*` marks equal contribution. */
  authors: string[]
  venue: string
  /** Short label shown as a tag, e.g. "NeurIPS 2025" or "preprint". */
  tag: string
  /** "YYYY-MM", used for sorting and the year. */
  date: string
  featured?: boolean
  tldr?: string
  arxiv?: string
  links?: Link[]
  /** Overrides the generated BibTeX entry. */
  bibtex?: string
  /** Abstract, rendered from the Markdown body. */
  body: string
}

export interface Post extends Base {
  date: string
  summary?: string
  draft?: boolean
}

type Modules<T> = Record<string, T>

const byOrder = <T extends Base>(items: T[]) =>
  [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title))

const list = <T>(modules: Modules<T | null>) => Object.values(modules).filter((m): m is T => m !== null)

export const site = siteData as unknown as Site

export const work = byOrder(list(import.meta.glob<Entry>('/content/work/*.md', { eager: true, import: 'default' })))
export const publications = list(import.meta.glob<Publication>('/content/publications/*.md', { eager: true, import: 'default' }))
  .sort((a, b) => String(b.date).localeCompare(String(a.date)))
export const involvement = byOrder(list(import.meta.glob<Entry>('/content/involvement/*.md', { eager: true, import: 'default' })))
export const play = byOrder(list(import.meta.glob<Hobby>('/content/play/*.md', { eager: true, import: 'default' })))

// Drafts are visible in `npm run dev` only (the loader strips them from production builds).
export const posts = list(import.meta.glob<Post>('/content/blog/*.md', { eager: true, import: 'default' }))
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => String(b.date).localeCompare(String(a.date)))

export const readingTime = (post: Post) => `${Math.max(1, Math.round(post.words / 220))} min`
