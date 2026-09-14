import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1280px',
        },
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
      },
    extend: {
      colors: {
        ink: {
          50: '#f6f4ef',
          100: '#e8e2d4',
          200: '#c9bfa8',
          300: '#a99e84',
          400: '#7d7460',
          500: '#5a5240',
          600: '#3d3729',
          700: '#2a2519',
          800: '#1c1812',
          900: '#0f0c08',
          950: '#070503',
        },
        bone: {
          50: '#fbf8f1',
          100: '#f3ecdf',
          200: '#e7dcc4',
          300: '#d4c5a1',
          400: '#b9a577',
          500: '#9a8657',
          600: '#7a6941',
          700: '#5e4f30',
          800: '#3e3320',
          900: '#241d12',
        },
        gold: {
          50: '#fbf6e7',
          100: '#f6e9c2',
          200: '#ecd489',
          300: '#e0bb53',
          400: '#d4a830',
          500: '#b88a1f',
          600: '#946a18',
          700: '#704d12',
          800: '#4a340e',
          900: '#2a1d08',
        },
        amber: {
          50: '#fef5e7',
          100: '#fde4b8',
          200: '#fbcc7e',
          300: '#f7b04a',
          400: '#ed8c20',
          500: '#c46d15',
          600: '#94510f',
          700: '#68380a',
          800: '#3e2006',
          900: '#1f1003',
        },
        film: '#0a0907',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
      },
      boxShadow: {
        warm: '0 1px 0 rgba(212,175,55,0.06), 0 1px 2px rgba(0,0,0,0.4), 0 24px 60px -20px rgba(0,0,0,0.65)',
        'glow-gold': '0 0 0 1px rgba(212,175,55,0.18), 0 18px 40px -12px rgba(184,138,31,0.18)',
        ring: '0 0 0 1px rgba(255,255,255,0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.9' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 800ms ease-out both',
        'slow-zoom': 'slow-zoom 24s ease-in-out infinite alternate',
        'marquee': 'marquee 60s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        shimmer: 'shimmer 3.6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;