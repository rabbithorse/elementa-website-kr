/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        '6xl': '2880px',
        '5xl': '2560px',
        '4xl': '1920px',
        '3xl': '1856px',
      },
    },
  },
  plugins: [],
}

