export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      spacing: {
        'underline-offset-2': '2px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Add any custom Tailwind core plugins here if needed
  },
};
