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
			setOrders(res.products)
			setLoading(false)
		})
	}, [])

	console.log(orders)

	return (
		<Table
			size='middle'
			columns={[
				{
					title: 'Title',
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
