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
      colors:{
        accent: "#97C93E"
      }
    },
  },  darkMode: "class",
  plugins: [nextui({
      themes: {
        light: {
          colors: {
          background: "#fbf8f6", // or DEFAULT
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

