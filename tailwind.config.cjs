/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"space-s": "var(--space-16-24px)",
        		"space-m": "var(--space-24-32px)",
				"space-l": "var--space-32-48px)",
        		"space-2xl": "var(--space-64-80px)",
       			"space-3xl": "var(--space-80-160px)",
				"space-4xl": "var(--space-160-200px)",
				"padding-header-y": "var(--space-24-32px)",
				"gap-footer":" var(--space-64-80px)",
			}
		},
	},
	plugins: [],
}
