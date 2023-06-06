import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Layout, Typography, theme } from 'antd'
import { Link } from 'react-router-dom'

export const Register = () => {
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
			<Typography.Title level={1}>Register</Typography.Title>
			<Card bordered style={{ width: '400px' }}>
				<Form>
					<Form.Item name='email'>
						<Input prefix={<UserOutlined />} placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item name='password'>
						<Input.Password
							prefix={<LockOutlined />}
							type='password'
							placeholder='Password'
							size='large'
						/>
					</Form.Item>

					<Form.Item name='confirmPassword'>
						<Input.Password
							prefix={<LockOutlined />}
							type='password'
							placeholder='Confirm Password'
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
					Already have an account? <Link to='/login'>Login</Link>
				</Typography.Text>
			</Card>
		</Layout>
	)
}
