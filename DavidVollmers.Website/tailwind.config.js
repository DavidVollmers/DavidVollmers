const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '**/*.{razor,html,cshtml,js}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Golos Text', ...defaultTheme.fontFamily.sans],
                display: ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                ignis: '#ef454c',
                gunmetal: '#31393e',
                'lavender-blush': '#eee5e9'
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
    safelist: [
        'text-red-500',
        'text-ignis'
    ]
}
