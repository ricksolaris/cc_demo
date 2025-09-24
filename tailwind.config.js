/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#007AFF',
        'tech-purple': '#AF52DE',
        'tech-green': '#30D158',
        'tech-orange': '#FF9500',
        'tech-pink': '#FF2D92',
        'tech-teal': '#64D2FF',
        'dark-bg': '#0A0A0A',
        'card-bg': '#1C1C1E',
        'card-border': '#2C2C2E',
      },
      fontFamily: {
        chinese: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans CJK SC', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'data-flow': 'data-flow 3s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 122, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 122, 255, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%) opacity: 0' },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(100%) opacity: 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}