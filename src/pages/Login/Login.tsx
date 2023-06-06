import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Layout, Typography, theme } from 'antd'
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
			<Typography.Title level={1}>Dashboard Antd</Typography.Title>
			<Card bordered style={{ width: '400px' }}>
				<Form>
					<Form.Item name='email'>
						<Input prefix={<UserOutlined />} placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item name='password'>
						<Link
							style={{
								fontSize: '14px',
								float: 'right',
								marginBottom: '6px',
							}}
							to='/forgot-password'>
							Forgot password?
						</Link>
						<Input.Password
							prefix={<LockOutlined />}
							type='password'
							placeholder='Password'
							size='large'
						/>
					</Form.Item>

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
