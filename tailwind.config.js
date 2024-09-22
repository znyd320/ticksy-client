/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        '8': '2rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
      }
    },
  },
  plugins: [
    // flowbite,
    require('daisyui'),
  ],
};
