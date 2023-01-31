/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'ultra-xs': { 'min': '345px', 'max': '374px' },
            'xxs': { 'min': '375px', 'max': '474px' },
            'xs': { 'min': '475px', 'max': '639px' },
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
}