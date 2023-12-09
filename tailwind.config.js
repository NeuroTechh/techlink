/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// https://flatuicolors.com/palette/se
				naitechh: {
					base: "#809bce",
					surface: "#f3f4ef",
					accent: "#c8befd",
					purple: "#d0adfc",
					violet: "#ceadfc",
					green: "#23a093",
					red: "#e2442f",
					orange: "#ed7f07",
					green: "#239f94",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
