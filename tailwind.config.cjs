/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                'serif': ['EB Garamond', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            }
        }
    },
    plugins: []
};