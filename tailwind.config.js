/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUpTop:{
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease-out',
        fadeUpTop: 'fadeUpTop 1s ease-out',
      },

      colors:{
        primary:"#E02424",
        secondary:"#C81E1E"
      },
      fontFamily:{
        sans:["Poppins","sans-serif"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },
      }
    },
  },
  plugins: [],
}

