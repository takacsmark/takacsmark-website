/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        bg2: '#f5f5f7',
        ink: '#1e1e2e',
        ink2: '#4c4f69',
        ink3: '#9ca0b0',
        rule: '#d4d4e0',
        pink: '#ea76cb',
        mauve: '#8839ef',
        teal: '#179299',
        sapphire: '#209fb5',
        green: '#40a02b',
        peach: '#fe640b',
        lavender: '#7287fd',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        bungee: ['Bungee', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease forwards',
        fadeUp: 'fadeUp 0.55s ease forwards',
        pulse: 'pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
}