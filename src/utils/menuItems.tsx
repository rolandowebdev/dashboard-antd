import {
	AppstoreOutlined,
	ShopOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'

export const menuItems = [
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
