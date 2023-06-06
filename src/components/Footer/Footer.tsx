import { Typography, Layout, theme, Row, Col } from 'antd'

export const Footer = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout.Footer
			style={{
				background: colorBgContainer,
				textAlign: 'center',
				borderTop: '1px solid #f1f1f1',
			}}>
			<Row>
				<Col span={8}>
					<Typography.Link href='/chat'>+6285758047504</Typography.Link>
				</Col>
				<Col span={8}>
					<Typography.Link href='/website' target='_blank'>
						Privacy Policy
					</Typography.Link>
				</Col>
				<Col span={8}>
					<Typography.Link href='/github' target='_blank'>
						Terms Of Use
					</Typography.Link>
				</Col>
			</Row>
		</Layout.Footer>
	)
}
