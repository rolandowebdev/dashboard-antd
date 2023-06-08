import { Space, Typography } from 'antd'
import { UseQueryResult, useQuery } from 'react-query'
import { Table } from '../../components'
import { Content } from '../../layout'
import { fetchOrders } from '../../lib'
import { Cart } from '../../types'
import { ordersTable } from '../../utils'

export const Orders = () => {
	const { data: orders, isLoading }: UseQueryResult<Cart> = useQuery<Cart>(
		'orders',
		fetchOrders
	)

	return (
		<Content>
			<Space size={2} direction='vertical' style={{ width: '100%' }}>
				<Typography.Title level={3}>Orders</Typography.Title>
				<Table
					data={orders?.products || []}
					loading={isLoading}
					columnsData={ordersTable}
					pagination={{ pageSize: 5 }}
				/>
			</Space>
		</Content>
	)
}
