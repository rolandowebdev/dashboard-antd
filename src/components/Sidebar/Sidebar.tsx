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
					paddingInline: '8px',
					position: 'sticky',
					top: '14px',
				}}>
				<Menu
					theme='dark'
					selectedKeys={[selectedKeys]}
					defaultSelectedKeys={['1']}
					onClick={(e) => navigate(e.key)}
					items={menuItems}
					style={{
						borderRadius: '8px',
						padding: '6px',
						backgroundColor: '#052442',
					}}
				/>
				<Divider
					style={{
						marginBlock: '12px',
						backgroundColor: '#4c6781',
					}}
				/>
				<Button
					block
					type='primary'
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
