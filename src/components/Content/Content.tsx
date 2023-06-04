import { Layout, theme } from 'antd'
import { AppRoutes } from '../../routes/routes'

const { Content: AntContent } = Layout

export const Content = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<AntContent
			style={{
				paddingBlock: 16,
				paddingInline: 24,
				background: colorBgContainer,
			}}>
			<AppRoutes />
		</AntContent>
	)
}
