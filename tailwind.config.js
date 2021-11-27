module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#474E9E",
        secondary: "#FE5B3E",
        primaryText: "#303062",
        divider: "#F4CA5F",
      },
      fontFamily: {
        poppins: ["'Poppins'"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
