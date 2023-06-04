import {
	DollarOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Col, Row, Space, Typography } from 'antd'
import { Chart, MenuCard, TableOrder } from '../../components'

export const Dashboard = () => {
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
						value={133}
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
						value={12}
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
						value={45}
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
						value={89}
					/>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<TableOrder />
				</Col>
				<Col span={12}>
					<Chart />
				</Col>
			</Row>
		</Space>
	)
}
