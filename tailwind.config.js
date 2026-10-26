/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: { mono: ['var(--font-mono)'], display: ['var(--font-display)'] },
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-raised': 'var(--panel-raised)',
        active: 'var(--active)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        fg: 'var(--text)',
        dim: 'var(--text-dim)',
        mute: 'var(--text-mute)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}
