import type { Config } from 'tailwindcss';

const config: Config = {
	important: true,
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			gridTemplateColumns: {
				'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
				'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
			}
		},
	},
	plugins: [],
};
export default config;
