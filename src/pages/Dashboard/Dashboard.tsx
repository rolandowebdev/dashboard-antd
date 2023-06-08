import {
	DollarOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Col, Row, Space, Typography } from 'antd'
import { UseQueryResult, useQuery } from 'react-query'
import { Chart, MenuCard, Table } from '../../components'
import { Content } from '../../layout'
import {
	fetchCustomers,
	fetchInventory,
	fetchOrders,
	fetchRevenue,
} from '../../lib'
import { Cart, Carts, ChartDataSource, Products, Users } from '../../types'
import { ordersTable } from '../../utils'

export const Dashboard = () => {
	const {
		data: revenue,
		isLoading: isRevenueLoading,
		isError: isRevenueError,
		error: revenueError,
	}: UseQueryResult<Carts, Error> = useQuery<Carts, Error>(
		'revenue',
		fetchRevenue
	)

	const { data: orders, isLoading: isOrdersLoading }: UseQueryResult<Cart> =
		useQuery<Cart>('orders', fetchOrders)

	const { data: inventory }: UseQueryResult<Products> = useQuery<Products>(
		'inventoryCount',
		fetchInventory
	)

	const { data: customers }: UseQueryResult<Users> = useQuery<Users>(
		'customersCount',
		fetchCustomers
	)

	const revenueLabels = revenue?.carts.map((cart) => `User-${cart.userId}`)
	const revenueData = revenue?.carts.map((cart) => cart.discountedTotal)

	const revenueCount = revenue?.total || 0
	const inventoryCount = inventory?.total || 0
	const customersCount = customers?.total || 0
	const ordersCount = orders?.total || 0

	const revenueDataSource: ChartDataSource = {
		labels: revenueLabels || [],
		datasets: [
			{ label: 'Revenue', data: revenueData || [], backgroundColor: '#001529' },
		],
	}

	return (
		<Content>
			<Space size={12} direction='vertical' style={{ width: '100%' }}>
				<Row gutter={24}>
					<Col span={24}>
						<Space size={2} direction='vertical'>
							<Typography.Title level={3}>Dashboard</Typography.Title>
						</Space>
					</Col>
					<Col span={6}>
						<MenuCard
							icon={
								<ShoppingCartOutlined
									style={{
										color: 'green',
										backgroundColor: 'rgba(0,255,0,0.25)',
										borderRadius: '100%',
										fontSize: 24,
										padding: 8,
									}}
								/>
							}
							title='Orders'
							value={ordersCount}
						/>
					</Col>{' '}
					<Col span={6}>
						<MenuCard
							icon={
								<ShoppingOutlined
									style={{
										color: 'blueviolet',
										backgroundColor: 'rgba(0,0,255,0.25)',
										borderRadius: '100%',
										fontSize: 24,
										padding: 8,
									}}
								/>
							}
							title='Inventory'
							value={inventoryCount}
						/>
					</Col>{' '}
					<Col span={6}>
						<MenuCard
							icon={
								<UserOutlined
									style={{
										color: 'red ',
										backgroundColor: 'rgba(255,0,0,0.25)',
										borderRadius: '100%',
										fontSize: 24,
										padding: 8,
									}}
								/>
							}
							title='Customers'
							value={customersCount}
						/>
					</Col>{' '}
					<Col span={6}>
						<MenuCard
							icon={
								<DollarOutlined
									style={{
										color: 'orange',
										backgroundColor: 'rgba(255,100,0,0.25)',
										borderRadius: '100%',
										fontSize: 24,
										padding: 8,
									}}
								/>
							}
							title='Revenue'
							value={revenueCount}
						/>
					</Col>
				</Row>
				<Row gutter={16} align='stretch' wrap>
					<Col span={12}>
						<Table
							data={orders?.products.slice(0, 4) || []}
							loading={isOrdersLoading}
							columnsData={ordersTable}
						/>
					</Col>
					<Col span={12}>
						<Chart
							error={revenueError}
							isError={isRevenueError}
							isLoading={isRevenueLoading}
							dataSource={revenueDataSource}
						/>
					</Col>
				</Row>
			</Space>
		</Content>
	)
}
