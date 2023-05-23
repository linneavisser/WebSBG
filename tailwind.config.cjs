/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				"p-s": "var(--space-16-24px)",
        		"p-m": "var(--space-24-32px)",
				"p-l": "var(--space-32-48px)",
        		"p-2xl": "var(--space-64-80px)",
       			"p-3xl": "var(--space-80-160px)",
				"p-4xl": "var(--space-160-200px)",
				"space-16-24": "var(--space-16-24px)",
        		"space-24-32": "var(--space-24-32px)",
				"space-32-48": "var(--space-32-48px)",
        		"space-64-80": "var(--space-64-80px)",
       			"space-80-160": "var(--space-80-160px)",
				"space-160-200": "var(--space-160-200px)",
				"space-64-160px": "var(--space-64-160px)",
				"padding-header-y": "var(--space-24-32px)",
				"gap-footer":" var(--space-64-80px)",
				"body-x":"var(--padding-body-x)",
			},

			gridTemplateColumns: {
				"mobile": "repeat(4, 1fr)",
				"desktop": "repeat(12, 1fr)",	
			  },
		},
	},
	plugins: [],
}
