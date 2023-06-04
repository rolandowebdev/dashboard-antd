import {
	MailOutlined,
	NotificationOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons'
import { Badge, Button, Col, Layout, Row, Space, theme } from 'antd'

const { Header: AntHeader } = Layout

type SidebarProps = {
	collapsed: boolean
	setCollapsed: (newCollapsed: boolean) => void
}

export const Header = ({ collapsed, setCollapsed }: SidebarProps) => {
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
						<Badge dot>
							<MailOutlined style={{ fontSize: 22 }} />
						</Badge>
						<Badge dot>
							<NotificationOutlined style={{ fontSize: 22 }} />
						</Badge>
					</Space>
				</Col>
			</Row>
		</AntHeader>
	)
}
