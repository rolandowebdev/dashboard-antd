import { Layout } from 'antd'
import { useState, useEffect } from 'react'
import { Content, Footer, Header, Sidebar } from './components'
import { fetchComments, fetchOrders } from './lib/fetchData'
import { Comment, ProductCart } from './types'

export const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const [comments, setComments] = useState<Comment[]>([])
	const [orders, setOrders] = useState<ProductCart[]>([])

	useEffect(() => {
		fetchComments().then((res) => setComments(res.comments))
	}, [])

	useEffect(() => {
		fetchOrders().then((res) => setOrders(res.products))
	}, [])

	return (
		<Layout style={{ minHeight: '100vh' }} hasSider>
			<Sidebar collapsed={collapsed} />
			<Layout>
				<Header
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					comments={comments}
					orders={orders}
				/>
				<Content />
				<Footer />
			</Layout>
		</Layout>
	)
}
