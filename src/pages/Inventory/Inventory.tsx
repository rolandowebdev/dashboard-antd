import { Space, Typography } from 'antd'
import { UseQueryResult, useQuery } from 'react-query'
import { Table } from '../../components'
import { Content } from '../../layout'
import { fetchInventory } from '../../lib'
import { Products } from '../../types'
import { inventoryTable } from '../../utils'

export const Inventory = () => {
	const { data: products, isLoading }: UseQueryResult<Products> =
		useQuery<Products>('products', fetchInventory)

	return (
		<Content>
			<Space size={2} direction='vertical' style={{ width: '100%' }}>
				<Typography.Title level={3}>Inventory</Typography.Title>
				<Table
					data={products?.products || []}
					loading={isLoading}
					columnsData={inventoryTable}
					pagination={{ pageSize: 5 }}
				/>
			</Space>
		</Content>
	)
}
