/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				laspinas: {
					primary: '#1E3A5F', // Professional Dark Blue
					'primary-focus': '#162B47',
					'primary-content': '#FFFFFF',
					secondary: '#1E3A5F', // Dark Blue/Navy
					'secondary-focus': '#162B47',
					'secondary-content': '#FFFFFF',
					accent: '#1E3A5F', // Dark Blue/Navy
					'accent-focus': '#162B47',
					'accent-content': '#FFFFFF',
					neutral: '#4A5568',
					'neutral-focus': '#2D3748',
					'neutral-content': '#FFFFFF',
					'base-100': '#FAF9F6', // Off-White
					'base-200': '#F5F5F0', // Lighter off-white for contrast
					'base-300': '#EBEBE5',
					'base-content': '#1E3A5F', // Dark blue text
					info: '#1E3A5F',
					success: '#10B981',
					warning: '#F59E0B',
					error: '#EF4444',
				}
			},
			'light',
			'dark',
			'corporate'
		],
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root',
	},
};

