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
			"xs-100": ["12px", "16px"],
			"xs-200": ["12px", "20px"],
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
			backgroundImage: {
				"assigned-tickets-gradiant":
					"linear-gradient(262deg, #36D1DC -22.09%, #1C4DB5 116.67%)",
				"starred-tickets-gradiant":
					"linear-gradient(263deg, #F0F2F0 -22.73%, #000C40 116.94%)",
				"close-tickets-gradiant":
					"linear-gradient(263deg, #FFF9EE -32.05%, #E73827 117.22%)",
				"total-tickets-gradiant":
					"linear-gradient(263deg, #A8E063 -22.87%, #418325 100%)",
			},
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
				sky: "#36D1DC",
				blue: "#1C4DB5",
			},
			fontFamily: {
				Roboto: ["Roboto", "sans-serif"],
				Lato: ["Lato", "sans-serif"],
				Inter: ["Inter", "sans-serif"],
			},
			spacing: {
				"--spacing-8xl": "48px",
				"--spacing-4xl": "32px",
				"--rounded-md": "12px",
			},
			keyframes: {
				"show-hidden-element": {
					"0%": {
						opacity: 0,
					},
					"25%": {
						opacity: 0.25,
					},
					"50%": {
						opacity: 0.5,
					},
					"75%": {
						opacity: 0.75,
					},
					"100%": {
						opacity: 1,
					},
				},
			},
			animation: {
				"show-hidden-element": "show-hidden-element 1s ease-in-out",
			},
			boxShadow: {
				"tickets-box":
					"-1px -1px 0px 0px rgba(0, 0, 0, 0.10), 1px 1px 0px 0px rgba(0, 0, 0, 0.10), -30px -30px 80px 0px rgba(255, 255, 255, 0.25), 1px 1px 0px 0px #FFF inset;",
			},
			width: {
				"md-w": "calc(100% - 250px)",
				"2xl-w": "calc(100% - 316px)",
			},
		},
	},
	plugins: [flowbite],
};
