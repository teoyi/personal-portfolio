/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/common/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                zallord: "Zallord",
                "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
            },
            fontSize: {
                "12xl": "12rem",
                "14xl": "14rem",
                "16xl": "16rem",
                "24xl": "24rem",
                "30xl": "30rem",
            },
            height: {
                nav: "80px",
                fscreen: "calc(100vh - 80px)",
            },
            colors: {
                "off-black": "#1E1C1C",
                "test-black": "#000",
                "test-white": "#fff",
            },
            backgroundImage: {
                landing: "url('../public/images/dark50-landing.png')",
            },
        },
    },
    plugins: [],
};
