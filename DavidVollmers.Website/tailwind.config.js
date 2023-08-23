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
                gunmetal: '#31393e',
                'lavender-blush': '#eee5e9'
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
    safelist: [
        'color-red-500',
    ]
}
