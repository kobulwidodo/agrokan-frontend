/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["poppins"],
      roboto: ["roboto"],
    },
    extend: {
      backgroundImage: {
        home: "url(/src/assets/images/background-home.png)",
        feature: "url(/src/assets/images/bg-feature.png)",
        testimonial: "url(/src/assets/images/bg-testi.png)",
        interest: "url(/src/assets/images/interest.png)",
      },
    },
  },
  plugins: [],
};