/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'main': '#ede7de',
			'main-dark': '#233831',
			'primary': '#f61067',
			'primary-dark': '#f61067',
			'secondary': '#f4f0ea',
			'secondary-dark': '#203b31',
		},
		fontFamily: {
			'heading': ['GT', 'Menlo', 'Monaco'],
			'sans': ['GT', 'Menlo', 'Monaco'],
		}
	},
	plugins: [],
	darkMode: 'selector',
}
