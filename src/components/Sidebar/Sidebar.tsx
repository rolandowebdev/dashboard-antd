import {
	AppstoreOutlined,
	ShopOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const menuItems = [
	{
		label: 'Dashboard',
		icon: <AppstoreOutlined />,
		key: '/',
	},
	{
		label: 'Inventory',
		icon: <ShopOutlined />,
		key: '/inventory',
	},
	{
		label: 'Orders',
		icon: <ShoppingOutlined />,
		key: '/orders',
	},
	{
		label: 'Customers',
		icon: <UserOutlined />,
		key: '/customers',
	},
]

const { Sider } = Layout

type SidebarProps = {
	collapsed: boolean
}

export const Sidebar = ({ collapsed }: SidebarProps) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [selectedKeys, setSelectedKeys] = useState<string>('/')

	useEffect(() => {
		const pathName = location.pathname
		setSelectedKeys(pathName)
	}, [location.pathname])

	return (
		<Sider trigger={null} collapsible collapsed={collapsed} width={230}>
			<Menu
				style={{ position: 'sticky', top: 0 }}
				selectedKeys={[selectedKeys]}
				theme='dark'
				mode='vertical'
				defaultSelectedKeys={['1']}
				onClick={(e) => navigate(e.key)}
				items={menuItems}
			/>
		</Sider>
	)
}
