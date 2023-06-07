import { Button, Divider, Layout, Menu, Modal, Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { menuItems } from '../../utils'
import { LogoutOutlined } from '@ant-design/icons'

type SidebarProps = {
	collapsed: boolean
	handleLogout: () => void
}

export const Sidebar = ({ collapsed, handleLogout }: SidebarProps) => {
	const navigate = useNavigate()
	const location = useLocation()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [selectedKeys, setSelectedKeys] = useState<string>(location.pathname)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		const pathName = location.pathname
		setSelectedKeys(pathName)
	}, [location.pathname])

	return (
		<Layout.Sider trigger={null} collapsible collapsed={collapsed} width={240}>
			<Space
				direction='vertical'
				style={{
					width: '100%',
					paddingInline: '10px',
					position: 'sticky',
					top: '14px',
				}}>
				<Menu
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
					onClick={showModal}
					icon={<LogoutOutlined />}
					style={{
						height: '40px',
						borderRadius: '8px',
					}}>
					{!collapsed ? 'Logout' : null}
				</Button>
				<Modal
					title='Logout'
					open={isModalOpen}
					onOk={handleLogout}
					onCancel={handleCancel}>
					<Typography.Paragraph>
						Do you really wish to leave and log out?
					</Typography.Paragraph>
				</Modal>
			</Space>
		</Layout.Sider>
	)
}
