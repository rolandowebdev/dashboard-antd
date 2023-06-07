import { Button, Divider, Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../../utils'
import { LogoutOutlined } from '@ant-design/icons'

const { Sider } = Layout

type SidebarProps = {
	collapsed: boolean
	handleLogout: () => void
}

export const Sidebar = ({ collapsed, handleLogout }: SidebarProps) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [selectedKeys, setSelectedKeys] = useState<string>(location.pathname)

	useEffect(() => {
		const pathName = location.pathname
		setSelectedKeys(pathName)
	}, [location.pathname])

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			width={230}
			style={{ paddingInline: '8px' }}>
			<Menu
				style={{ position: 'sticky', top: 0 }}
				selectedKeys={[selectedKeys]}
				theme='dark'
				mode='vertical'
				defaultSelectedKeys={['1']}
				onClick={(e) => navigate(e.key)}
				items={menuItems}
			/>
			<Divider
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.65)',
				}}
			/>
			<Button
				block
				onClick={handleLogout}
				icon={<LogoutOutlined />}
				style={{
					height: '40px',
					borderRadius: '8px',
				}}>
				Logout
			</Button>
		</Sider>
	)
}
