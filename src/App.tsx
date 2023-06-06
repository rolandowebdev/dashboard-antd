import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { Content } from './layout'
import { Customers, Dashboard, Inventory, Orders } from './pages'

export const App: React.FC = () => {
	return (
		<Layout style={{ minHeight: '100vh' }} hasSider>
			<Routes>
				<Route
					path='/'
					element={
						<Content>
							<Dashboard />
						</Content>
					}
				/>
				<Route
					path='/inventory'
					element={
						<Content>
							<Inventory />
						</Content>
					}
				/>
				<Route
					path='/orders'
					element={
						<Content>
							<Orders />
						</Content>
					}
				/>
				<Route
					path='/customers'
					element={
						<Content>
							<Customers />
						</Content>
					}
				/>
				<Route path='/login' />
			</Routes>
		</Layout>
	)
}
