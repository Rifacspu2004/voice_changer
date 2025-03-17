// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc', // Add a custom primary color
        'secondary': '#ffed4a', // Add a custom secondary color
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class', 
};
