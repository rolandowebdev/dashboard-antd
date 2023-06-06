import { Layout, theme } from 'antd'
import { ReactNode, useState } from 'react'
import { UseQueryResult, useQuery } from 'react-query'
import { Footer, Header, Sidebar } from '../../components'
import { fetchComments, fetchOrders } from '../../lib/fetchData'
import { Cart, Comments } from '../../types'

type ContentProps = {
	children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const { data: comments }: UseQueryResult<Comments> = useQuery<Comments>(
		'comments',
		fetchComments
	)

	const { data: orders }: UseQueryResult<Cart> = useQuery<Cart>(
		'orders',
		fetchOrders
	)

	return (
		<>
			<Sidebar collapsed={collapsed} />
			<Layout>
				<Header
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					comments={comments?.comments || []}
					orders={orders?.products || []}
				/>
				<Layout.Content
					style={{
						paddingTop: 12,
						paddingInline: 24,
						background: colorBgContainer,
					}}>
					{children}
				</Layout.Content>
				<Footer />
			</Layout>
		</>
	)
}
