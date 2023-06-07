import { Layout, message, theme } from 'antd'
import { ReactNode, useState } from 'react'
import { UseQueryResult, useQuery } from 'react-query'
import { Footer, Header, Sidebar } from '../../components'
import { Cart, Comments } from '../../types'
import { fetchComments, fetchOrders } from '../../lib'
import { useAuth } from '../../context'

type ContentProps = {
	children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const { signout } = useAuth()

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

	const handleLogout = async () => {
		try {
			await signout()
			localStorage.removeItem('currentUser')
		} catch (error) {
			message.error('Logout Failed.')
		}
	}

	return (
		<>
			<Sidebar collapsed={collapsed} handleLogout={handleLogout} />
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
