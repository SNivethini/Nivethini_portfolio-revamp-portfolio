/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(19) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
      },
      // fontSize: {
      //   xs: ['14px', { lineHeight: '21px' }],
      //   sm: ['18px', { lineHeight: '24px' }],
      //   md: ['22px', { lineHeight: '33px' }],
      //   lg: ['32px', { lineHeight: '48px' }],
      // },
    }
  },
  plugins: [],
}
