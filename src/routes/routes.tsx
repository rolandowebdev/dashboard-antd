import { Routes, Route } from 'react-router-dom'
import { Customers, Dashboard, Inventory, Orders } from '../pages'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/inventory' element={<Inventory />} />
			<Route path='/orders' element={<Orders />} />
			<Route path='/customers' element={<Customers />} />
		</Routes>
	)
}
