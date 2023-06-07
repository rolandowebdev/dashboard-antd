import {
	AppstoreOutlined,
	ShopOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem => {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem
}

export const menuItems: MenuItem[] = [
	getItem('Dashboard', '/', <AppstoreOutlined />),
	getItem('Orders', '/orders', <ShopOutlined />),
	getItem('Inventory', '/inventory', <ShoppingOutlined />),
	getItem('Customers', '/customers', <UserOutlined />),
]
