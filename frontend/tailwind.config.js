/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import fluid, { extract } from 'fluid-tailwind'

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", {
      files: [/* ... */],
      extract
    }],
    theme: {
        extend: {},
        patterns: {
            opacities: {
                100: "1",
                80: ".80",
                60: ".60",
                40: ".40",
                20: ".20",
                10: ".10",
                5: ".05",
            },
            sizes: {
                1: "0.25rem",
                2: "0.5rem",
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
            },
        },
    },
    plugins: [daisyui, require("tailwindcss-bg-patterns"), fluid],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#3490dc",
                    secondary: "#ffed4a",
                    accent: "#f9c2ff",
                    neutral: "#f5f5f5",
                    "base-100": "#F7F7F7", // Set the default background color to white
                },
            },
        ],
    },
};
