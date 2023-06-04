import {
	AppstoreOutlined,
	ShopOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

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
	const handleNavigate: MenuProps['onClick'] = (e) => {
		navigate(e.key)
	}

	return (
		<Sider trigger={null} collapsible collapsed={collapsed} width={230}>
			<Menu
				theme='dark'
				mode='vertical'
				defaultSelectedKeys={['1']}
				onClick={(e) => handleNavigate(e)}
				items={menuItems}
			/>
		</Sider>
	)
}
