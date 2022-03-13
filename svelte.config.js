import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

const config = {
	preprocess: preprocess(),
	extensions: ['.svelte', '.md'],
	kit: {
		methodOverride: { allowed: ['DELETE'] },
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$root: path.resolve('./src')
				}
			}
		}
	}
}

export default config
