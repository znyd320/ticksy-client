/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		fontSize: {
			xs: ["12px", "16px"],
			sm: ["14px", "20px"],
			base1: ["16px", "16px"],
			base2: ["16px", "24px"],
			base3: ["16px", "28px"],
			prev: ["18px", "16px"],
			lg1: ["20px", "24px"],
			lg2: ["20px", "28px"],
			lg3: ["20px", "30px"],
			xl: ["24px", "36px"],
			"2xl": ["28px", "32px"],
			"3xl": ["28px", "50px"],
			"4xl": ["48px", "58px"],
			"5xl": ["40px", "40px"],
		},
		extend: {
			colors: {
				// text colors
				btnTxt: "#FFFFFF",
				descTxt: "#6B7280",
				txtColor: "#545454",
				// heading colors
				txtHeading: "#333",
				headingDefault: "#111827",
				// menu colors
				menuTxt: "#575757",
				menuDropdown: "#DEE5F7",
				// bg colors
				bgcDefault: "#6B7280",
				// primary colors
				primaryHover: "#FFFFFF",
				primaryDefault: "#9063F6",
				primaryDisable: "#E9E0FD",
				// danger colors
				dangerDefault: "#FF3D00",
				dangerFocus: "#D40000",
				dangerDisable: "#FFCCCC",
				// secondary colors
				secondaryDefault: "#6380F6",
				secondaryDisable: "#E0E6FD",
				secondaryFocus: "#536BCD",
				// success colors
				successDefault: "#12B76A",
				successDisable: "#CFF1E6",
				successFocus: "#0D9A6C",
				// warning colors
				warningDefault: "#F59E0B",
				warningDisable: "#FDECCE",
				warningHover: "#FCDFAE",
				// mirage colors
				mirage25: "#CFD1D4",
				mirage50: "#B0B2B7",
				mirage100: "#888B93",
				mirage200: "#60656F",
				mirage300: "#393F4B",
				// pale sky colors
				paleSky25: "#E1E3E6",
				paleSky50: "#CED0D5",
				paleSky100: "#B5B8BF",
				paleSky200: "#9CA1AA",
				paleSky300: "#848995",
				paleSky400: "#6B7280",
				paleSky500: "#595F6B",
				paleSky600: "#474C55",
				// schoolbus yellow colors
				schoolBusYellow25: "#FDECCE",
			},
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				Lato: ["Lato", "sans-serif"],
				Inter: ["Inter", "sans-serif"],
			},
			spacing: {
				"--spacing-8xl": "48px",
			},
		},
	},
	plugins: [flowbite],
};
