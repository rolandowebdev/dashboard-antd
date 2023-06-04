import { Typography, Layout, theme, Row, Col } from 'antd'

const { Footer: AntFooter } = Layout

export const Footer = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<AntFooter
			style={{
				background: colorBgContainer,
				textAlign: 'center',
				borderTop: '1px solid #f1f1f1',
			}}>
			<Row>
				<Col span={8}>
					<Typography.Link href='tel:+6285758047504'>
						+6285758047504
					</Typography.Link>
				</Col>
				<Col span={8}>
					<Typography.Link href='https://rolandowebdev.space' target='_blank'>
						Privacy Policy
					</Typography.Link>
				</Col>
				<Col span={8}>
					<Typography.Link href='https://rolandowebdev.space' target='_blank'>
						Terms Of Use
					</Typography.Link>
				</Col>
			</Row>
		</AntFooter>
	)
}
