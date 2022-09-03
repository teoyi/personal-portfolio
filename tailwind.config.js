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
            height: {
                nav: "80px",
                "nav-screen": "calc(100% - 80px)",
            },
        },
    },
    plugins: [],
};
