import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { fetchOrders } from '../../lib/fetchData'
import { ProductCart } from '../../types'

export const TableOrder = () => {
	const [orders, setOrders] = useState<ProductCart[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)
		fetchOrders().then((res) => {
			setOrders(res.products.splice(0, 4))
			setLoading(false)
		})
	}, [])

	return (
		<Table
			columns={[
				{
					title: 'Resent Orders',
					dataIndex: 'title',
				},
				{
					title: 'Quantity',
					dataIndex: 'quantity',
				},
				{
					title: 'Price',
					dataIndex: 'discountedPrice',
				},
			]}
			bordered
			loading={loading}
			dataSource={orders}
			pagination={false}
		/>
	)
}
