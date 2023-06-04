import { useState, useEffect } from 'react'
import { Space, Typography } from 'antd'
import { Table } from '../../components'
import { fetchOrders } from '../../lib/fetchData'
import { ProductCart } from '../../types'
import { ordersTable } from '../../utils'

export const Orders = () => {
	const [orders, setOrders] = useState<ProductCart[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)
		fetchOrders().then((res) => setOrders(res.products))
		setLoading(false)
	}, [])

	return (
		<Space size={0} direction='vertical' style={{ width: '100%' }}>
			<Typography.Title level={3}>Orders</Typography.Title>
			<Table
				data={orders}
				loading={loading}
				columnsData={ordersTable}
				pagination={{ pageSize: 5 }}
			/>
		</Space>
	)
}
