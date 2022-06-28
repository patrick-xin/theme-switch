module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BackgroundColor: "var(--bg-color)",
        TextColor: "var(--text-color)",
      },
    },
  },
  plugins: [],
};
