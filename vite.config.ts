import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd())
	return defineConfig({
		plugins: [
			react(),
			createHtmlPlugin({
				minify: true,
				inject: {
					data: {
						siteUrl: env.VITE_SITE_URL,
						title: 'Dashboard Antd',
						description: 'Dashboard UI Built with React & Ant Design',
					},
				},
			}),
		],
	})
}
