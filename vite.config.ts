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
		define: {
			'process.env': {
				VITE_SITE_URL: JSON.stringify(env.VITE_SITE_URL),
				VITE_FIREBASE_API_KEY: JSON.stringify(env.VITE_FIREBASE_API_KEY),
				VITE_FIREBASE_AUTH_DOMAIN: JSON.stringify(
					env.VITE_FIREBASE_AUTH_DOMAIN
				),
				VITE_FIREBASE_PROJECT_ID: JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
				VITE_FIREBASE_STORAGE_BUCKET: JSON.stringify(
					env.VITE_FIREBASE_STORAGE_BUCKET
				),
				VITE_FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(
					env.VITE_FIREBASE_MESSAGING_SENDER_ID
				),
				VITE_FIREBASE_APP_ID: JSON.stringify(env.VITE_FIREBASE_APP_ID),
			},
		},
	})
}
