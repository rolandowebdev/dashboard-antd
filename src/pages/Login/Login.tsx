import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	Card,
	Form,
	Input,
	Layout,
	Space,
	Typography,
	message,
	theme,
} from 'antd'
import { useState } from 'react'
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context'
import { loginSchema } from '../../lib'

export const Login = () => {
	const navigate = useNavigate()
	const { signin } = useAuth()
	const [isLoading, setIsLoading] = useState(false)

	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			setIsLoading(true)
			await signin(data.email, data.password)
			navigate('/', { replace: true })
			setIsLoading(false)
		} catch {
			message.error('Login Failed. Please check your credentials')
			reset()
			setIsLoading(false)
		}
	}

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
				<Form noValidate component='form' onFinish={handleSubmit(onSubmit)}>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['email'] ? errors['email']?.message : null}
								validateStatus={errors['email'] ? 'error' : ''}>
								<Input
									prefix={<UserOutlined />}
									placeholder='Email'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Space direction='vertical' style={{ width: '100%' }}>
						<Link
							style={{ fontSize: '14px', float: 'right' }}
							to='/reset-password'>
							Forgot password?
						</Link>
						<Controller
							name='password'
							control={control}
							render={({ field }) => (
								<Form.Item
									help={errors['password'] ? errors['password']?.message : null}
									validateStatus={errors['password'] ? 'error' : ''}>
									<Input.Password
										prefix={<LockOutlined />}
										type='password'
										placeholder='Password'
										size='large'
										{...field}
									/>
								</Form.Item>
							)}
						/>
					</Space>

					<Form.Item style={{ textAlign: 'center', marginTop: '8px' }}>
						<Button
							loading={isLoading}
							style={{
								width: '100%',
								backgroundColor: '#001529',
								color: '#fff',
							}}
							size='large'
							htmlType='submit'>
							{!isLoading ? 'Log in' : null}
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
