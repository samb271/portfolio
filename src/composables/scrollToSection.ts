import { prefersReducedMotion } from './useShuffle'

/**
 * Scrolls to a home page section without writing `#id` into the address bar,
 * so a later refresh doesn't jump back to that section.
 */
export function scrollToSection(event: MouseEvent, id: string) {
  const target = document.getElementById(id)
  if (!target) return // not on the home page: let the link navigate normally
  event.preventDefault()
  target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
