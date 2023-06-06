import { LockOutlined, UserOutlined } from '@ant-design/icons'
import {
	Button,
	Card,
	Form,
	Input,
	Layout,
	Space,
	Typography,
	theme,
} from 'antd'
import { Link } from 'react-router-dom'

export const Login = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	return (
		<Layout
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: colorBgContainer,
			}}>
			<Typography.Title level={1}>Login</Typography.Title>
			<Card bordered style={{ width: '400px' }}>
				<Form>
					<Form.Item name='email'>
						<Input prefix={<UserOutlined />} placeholder='Email' size='large' />
					</Form.Item>

					<Space direction='vertical' style={{ width: '100%' }}>
						<Link
							style={{ fontSize: '14px', float: 'right' }}
							to='/forgot-password'>
							Forgot password?
						</Link>
						<Form.Item name='password'>
							<Input.Password
								prefix={<LockOutlined />}
								type='password'
								placeholder='Password'
								size='large'
							/>
						</Form.Item>
					</Space>

					<Form.Item style={{ textAlign: 'center' }}>
						<Button
							style={{
								width: '100%',
								backgroundColor: '#001529',
								color: '#fff',
							}}
							size='large'
							htmlType='submit'>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</Card>

			<Card
				bordered
				style={{ marginTop: '16px', width: '400px', textAlign: 'center' }}>
				<Typography.Text style={{ fontSize: '15px' }}>
					New to Dashboard Antd? <Link to='/register'>Create an account!</Link>
				</Typography.Text>
			</Card>
		</Layout>
	)
}
