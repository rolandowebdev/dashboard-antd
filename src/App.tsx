import { Layout } from 'antd'
import { useState } from 'react'
import { UseQueryResult, useQuery } from 'react-query'
import { Content, Footer, Header, Sidebar } from './components'
import { fetchComments, fetchOrders } from './lib/fetchData'
import { Cart, Comments } from './types'

export const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const { data: comments }: UseQueryResult<Comments> = useQuery<Comments>(
		'comments',
		fetchComments
	)

	const { data: orders }: UseQueryResult<Cart> = useQuery<Cart>(
		'orders',
		fetchOrders
	)

	return (
		<Layout style={{ minHeight: '100vh' }} hasSider>
			<Sidebar collapsed={collapsed} />
			<Layout>
				<Header
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					comments={comments?.comments || []}
					orders={orders?.products || []}
				/>
				<Content />
				<Footer />
			</Layout>
		</Layout>
	)
}
