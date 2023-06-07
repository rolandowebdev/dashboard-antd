import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import {
	Customers,
	Dashboard,
	Inventory,
	Login,
	Orders,
	Register,
} from './pages'
import { PrivateRoutes } from './routes'

export const App: React.FC = () => {
	return (
		<Layout style={{ minHeight: '100vh' }} hasSider>
			<Routes>
				<Route
					path='/'
					element={
						<PrivateRoutes>
							<Dashboard />
						</PrivateRoutes>
					}
				/>
				<Route
					path='/inventory'
					element={
						<PrivateRoutes>
							<Inventory />
						</PrivateRoutes>
					}
				/>
				<Route
					path='/orders'
					element={
						<PrivateRoutes>
							<Orders />
						</PrivateRoutes>
					}
				/>
				<Route
					path='/customers'
					element={
						<PrivateRoutes>
							<Customers />
						</PrivateRoutes>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Layout>
	)
}
