/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      'serif': ['Merriweather', 'Georgia', 'serif'],
      'display': ['Poppins', 'sans-serif'],
      'body': ['Open Sans', 'Segoe UI', 'sans-serif'],
    },
    extend: {
      colors: {
        'anchor': '#00a2e7',
        'anchor-dark': '#00a2e7',
      }
    },
  },
  plugins: [],
}

