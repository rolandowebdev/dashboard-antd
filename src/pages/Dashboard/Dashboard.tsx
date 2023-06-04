import {
	DollarOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import { Chart, MenuCard, Table } from '../../components'
import { ProductCart } from '../../types'
import { fetchOrders, fetchRevenue } from '../../lib/fetchData'
import { ordersTable } from '../../utils'
import { fetchInventory } from '../../lib/fetchData'
import { fetchCustomers } from '../../lib/fetchData'

export const Dashboard = () => {
	const [orders, setOrders] = useState<ProductCart[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [ordersCount, setOrdersCount] = useState<number>(0)
	const [reveneuCount, setReveneuCount] = useState<number>(0)
	const [inventoryCount, setInventoryCount] = useState<number>(0)
	const [customersCount, setCustomersCount] = useState<number>(0)

	useEffect(() => {
		setLoading(true)
		fetchOrders().then((res) => {
			setOrders(res.products.splice(0, 4))
			setOrdersCount(res.discountedTotal)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		fetchRevenue().then((res) => setReveneuCount(res.total))
	}, [])

	useEffect(() => {
		fetchInventory().then((res) => setInventoryCount(res.total))
	}, [])

	useEffect(() => {
		fetchCustomers().then((res) => setCustomersCount(res.total))
	}, [])

	return (
		<Space size={18} direction='vertical' style={{ width: '100%' }}>
			<Row gutter={24}>
				<Col span={24}>
					<Typography.Title level={3}>Dashboard</Typography.Title>
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
						value={reveneuCount}
					/>
				</Col>
			</Row>
			<Row gutter={16} align='stretch' wrap>
				<Col span={12}>
					<Table data={orders} loading={loading} columnsData={ordersTable} />
				</Col>
				<Col span={12}>
					<Chart />
				</Col>
			</Row>
		</Space>
	)
}
