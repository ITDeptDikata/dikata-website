const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Hind Madurai", ...defaultTheme.fontFamily.sans],
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50: "#FFCC00",
                    200: "#FFDE59",
                    DEFAULT: "#FFD600",
                },
                white: {
                    DEFAULT: "#FFF",
                    50: "#F8F8F8",
                },
            },
        },
    },
    plugins: [],
};
