import { Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { fetchInventory } from '../../lib/fetchData'
import { Product } from '../../types'
import { Table } from '../../components'
import { inventoryTable } from '../../utils'

export const Inventory = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		setLoading(true)
		fetchInventory().then((res) => setProducts(res.products))
		setLoading(false)
	}, [])

	return (
		<Space size={0} direction='vertical' style={{ width: '100%' }}>
			<Typography.Title level={3}>Inventory</Typography.Title>
			<Table
				data={products}
				loading={loading}
				columnsData={inventoryTable}
				pagination={{ pageSize: 5 }}
			/>
		</Space>
	)
}
