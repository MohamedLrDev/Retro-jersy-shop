/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3490dc",
          "secondary": "#ffed4a",
          "accent": "#f9c2ff",
          "neutral": "#f5f5f5",
          "base-100": "#F7F7F7",  // Set the default background color to white
        },
      },
    ],
  },
}

