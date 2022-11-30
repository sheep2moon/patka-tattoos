/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                blink1: "blink1 6s ease-in-out infinite",
                blink2: "blink2 6s ease-in-out infinite"
            },
            colors: {
                gold: "#FFB000"
            },
            backgroundImage: {
                "grainy-bg": "url('/src/assets/gggrain.svg')"
            }
        }
    },
    plugins: []
};
