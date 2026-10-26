/// <reference types="vite/client" />

declare module '*.md' {
  const entry: Record<string, unknown>
  export default entry
}

declare module '*.yaml' {
  const data: Record<string, unknown>
  export default data
}
