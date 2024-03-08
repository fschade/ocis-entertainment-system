import { defineConfig } from '@ownclouders/extension-sdk'
import { id } from './public/manifest.json'

export default defineConfig({
	base: `/vendor/apps/${id}/`,
	build: {
		rollupOptions: {
			output: {
				dir: `dist/${id}`,
				entryFileNames: `extension.js`,
			},
		},
	},
})
