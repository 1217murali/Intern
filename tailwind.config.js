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
          fadeUpTop: {
            from: {
              opacity: '0',
              transform: 'translateY(20px)', // Start from below
            },
            to: {
              opacity: '1',
              transform: 'translateY(0)', // End at the original position
            },
          },
          fadeLeft: {
            from: { opacity: '0', transform: 'translateX(-50px)' },
            to: { opacity: '1', transform: 'translateX(0)' },
          },
        },
        animation: {
          fadeInDown: 'fadeInDown 1s ease-out',
          fadeUpTop: 'fadeUpTop 1s ease-out',
          fadeLeft: 'fadeLeft 1s ease-out',
        },

        colors:{
          primary:"#E02424",
          secondary:"#C81E1E",
          purple_text:"#551A8b",
          blue_text:"#0000EE"
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