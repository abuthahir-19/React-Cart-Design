/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'ultra-xs': { 'min': '320px', 'max': '374px' },
            'xxs': { 'min': '375px', 'max': '474px' },
            'xs': { 'min': '475px', 'max': '639px' },
            'sm': {'min' : '640px', 'max' : '767px'},
            'md': {'min' : '768px', 'max' : '1023px'},
            'lg': {'min' : '1024px', 'max': '1279px'},
            'xl': {'min' : '1280px', 'max' :'1535px'},
            '2xl': '1536px',
        },
    },
    plugins: [],
}