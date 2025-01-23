/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all your React components
  ],
  theme: {
    extend: {
      screens:{
        mobile:{min:"300px",max:"600px"},
      },
      colors: {
        'gold': '#d4af37',
        'cream': 'rgba(255, 243, 227, 1)' ,
        'filter':'rgba(249, 241, 231, 1)'
      },
    }, // Customize your theme here if needed
  },
  plugins: [],
};
