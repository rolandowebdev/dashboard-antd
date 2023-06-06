import { Layout, theme } from 'antd'
import { AppRoutes } from '../../routes/routes'

export const Content = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout.Content
			style={{
				paddingTop: 12,
				paddingInline: 24,
				background: colorBgContainer,
			}}>
			<AppRoutes />
		</Layout.Content>
	)
}
