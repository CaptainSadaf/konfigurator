// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Include your HTML file if necessary

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

