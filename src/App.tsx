import { Layout } from 'antd'
import { useState } from 'react'
import { Content, Footer, Header, Sidebar } from './components'

export const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sidebar collapsed={collapsed} />
			<Layout>
				<Header collapsed={collapsed} setCollapsed={setCollapsed} />
				<Content />
				<Footer />
			</Layout>
		</Layout>
	)
}
