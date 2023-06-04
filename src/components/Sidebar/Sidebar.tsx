import { Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../../utils'

const { Sider } = Layout

type SidebarProps = {
	collapsed: boolean
}

export const Sidebar = ({ collapsed }: SidebarProps) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [selectedKeys, setSelectedKeys] = useState<string>(location.pathname)

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
