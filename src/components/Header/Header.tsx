import {
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	NotificationOutlined,
} from '@ant-design/icons'
import {
	Badge,
	Button,
	Col,
	Drawer,
	Layout,
	List,
	Row,
	Space,
	Typography,
	theme,
} from 'antd'
import { useState } from 'react'
import { Comment, ProductCart } from '../../types'

type HeaderProps = {
	collapsed: boolean
	setCollapsed: (newCollapsed: boolean) => void
	comments: Comment[]
	orders: ProductCart[]
}

const { Header: AntHeader } = Layout

export const Header = ({
	collapsed,
	setCollapsed,
	comments,
	orders,
}: HeaderProps) => {
	const [openComments, setOpenComments] = useState<boolean>(false)
	const [openNotification, setOpenNotification] = useState<boolean>(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<AntHeader
			style={{
				paddingInline: 24,
				background: colorBgContainer,
				borderBottom: '1px solid #f1f1f1',
				position: 'sticky',
				top: 0,
				zIndex: 999,
			}}>
			<Row justify='space-between' align='middle'>
				<Col>
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							width: 48,
							height: 48,
							backgroundColor: '#001529',
							color: '#fff',
						}}
					/>
				</Col>
				<Col>
					<Space size='middle' align='center'>
						<Badge dot count={comments.length}>
							<MailOutlined
								style={{ fontSize: 22 }}
								onClick={() => setOpenComments(true)}
							/>
						</Badge>
						<Badge count={orders.length}>
							<NotificationOutlined
								style={{ fontSize: 22 }}
								onClick={() => setOpenNotification(true)}
							/>
						</Badge>
					</Space>
				</Col>
			</Row>
			<Drawer
				title='Comments'
				open={openComments}
				onClose={() => setOpenComments(false)}
				maskClosable>
				<List
					dataSource={comments}
					renderItem={(item) => <List.Item>{item.body}</List.Item>}
				/>
			</Drawer>
			<Drawer
				title='Notification'
				open={openNotification}
				onClose={() => setOpenNotification(false)}
				maskClosable>
				<List
					dataSource={orders}
					renderItem={(item) => (
						<List.Item>
							<Typography.Paragraph strong>{item.title}</Typography.Paragraph>
							has been ordered!
						</List.Item>
					)}
				/>
			</Drawer>
		</AntHeader>
	)
}
