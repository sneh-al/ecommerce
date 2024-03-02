import { nextui } from "@nextui-org/react";



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero.jpg')",
        'ready': "url('/shop.jpg')",
      },
      colors:{
        accent: "#97C93E",
        accent2: "#fbf8f6"
      }
    },
  },  darkMode: "class",
  plugins: [nextui({
      themes: {
        light: {
          colors: {
          background: "#fff", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
        
              foreground: "#FFFFFF",
              DEFAULT: "#191818",
            },
      
          },
        },
        dark: {
          colors: {
            background: "#4b4a49", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#fbf8f6",
            },
          },
        },
    
      },
    }),]

}

