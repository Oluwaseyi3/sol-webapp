/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['Space Mono', 'monospace'],
      },
      theme: {
        extend: {
          screens: {
            'short': { 'max': { 'raw': '(max-height: 700px)' } }, // Define a new 'short' breakpoint for heights <= 379px
            // You can keep your other breakpoints (sm, md, lg, xl, 2xl) here
          },
        },
      },
    },
  },
  plugins: [],
}