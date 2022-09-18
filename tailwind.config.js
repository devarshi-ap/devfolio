/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',

    theme: {
        colors: {
            'white': '#fff',
            'a_ecru': '#E0D3BF',
            'a_brown': '#6E524B',
            'a_gray': '#212326',
            'a_black': '#313236',
    
            'b_white': '#F6FAFD',
            'b_skyblue': '#74B1CE',
            'b_navyblue': '#0C253F',
    
            'c_taupe': '#F2EDED',
            'c_tea': '#5C7470',
            'c_darkgreen': '#142824',
    
            'd_coolwhite': '#EBF1F6',
            'd_babyblue': '#ABC3DD',
            'd_blue': '#3F577B',
    
            'github': '#6e5494',
            'linkedin': '#0077b5',
            'twitter': '#1da1f2',
            'medium': '#00ab6c',
            'resume': '#ff0000',  
            
            'dark_gray': '#222222',
            'gray': '#444444',
            'orange': '#E73F2E'
        },
        screens: {
            'mobile': '300px',
            'sm': '600px',
            'md': '800px',
            'lg': '1200px',
            'xl': '1500px',
        },
        extend: {
            fontFamily: {
                Playfair: ["Playfair Display", 'serif'],
                Splash: ["Splash", 'cursive'],
                Roboto: ['Roboto', 'sans-serif'],
                SansPro: ['Source Sans Pro', 'sans-serif'],
                SerifPro: ['Source Serif Pro', 'serif'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'bounce-slow': 'bounce 1s linear infinite',
                'bounce-image': 'bounce 5s linear infinite',
            }
        },
    },
    plugins: [],
};
