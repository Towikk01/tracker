/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '#E7EAFA',
                secondary: '#666666',
                deep: '#1E1E1E',
                blue: '#0B2CD1',
                backgroundCard: '#F8F8F8',
            },
            fontSize: {
                12: '12px',
                14: '14px',
                48: '48px',
                18: '18px',
                20: '20px',
                24: '24px',
                32: '32px',
                16: '16px',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                mono: ['Geist Mono', 'monospace'],
            },
        },
        plugins: [],
    },
};
