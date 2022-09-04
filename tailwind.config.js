/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/common/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                zallord: "Zallord",
            },
            fontSize: {
                "14xl": "14rem",
                "16xl": "16rem",
            },
            height: {
                nav: "80px",
                fscreen: "calc(100vh - 80px)",
            },
        },
    },
    plugins: [],
};
