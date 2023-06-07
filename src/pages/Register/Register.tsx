import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	Card,
	Form,
	Input,
	Layout,
	Typography,
	message,
	theme,
} from 'antd'
import { updateProfile } from 'firebase/auth'
import { useState } from 'react'
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useForm,
} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context'
import { registerSchema } from '../../lib'

export const Register = () => {
	const { signup } = useAuth()
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
		resolver: yupResolver(registerSchema),
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			setIsLoading(true)
			const res = await signup(data.email, data.password)
			await updateProfile(res.user, {
				displayName: data.fullName,
			})
			message.success('You have successfully created an account!')
			reset()
			setIsLoading(false)
		} catch {
			message.error('Failed to register user. Please try again.')
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
			<Typography.Title level={1}>Register</Typography.Title>
			<Card bordered style={{ width: '400px' }}>
				<Form noValidate component='form' onFinish={handleSubmit(onSubmit)}>
					<Controller
						name='fullName'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['fullName'] ? errors['fullName']?.message : null}
								validateStatus={errors['fullName'] ? 'error' : ''}>
								<Input
									prefix={<UserOutlined />}
									placeholder='Full Name'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['email'] ? errors['email']?.message : null}
								validateStatus={errors['email'] ? 'error' : ''}>
								<Input
									prefix={<MailOutlined />}
									placeholder='Email'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

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

					<Controller
						name='confirmPassword'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={
									errors['confirmPassword']
										? errors['confirmPassword']?.message
										: null
								}
								validateStatus={errors['confirmPassword'] ? 'error' : ''}>
								<Input.Password
									prefix={<LockOutlined />}
									type='password'
									placeholder='Confirm Password'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Form.Item style={{ textAlign: 'center' }}>
						<Button
							loading={isLoading}
							style={{
								width: '100%',
								backgroundColor: '#001529',
								color: '#fff',
							}}
							size='large'
							htmlType='submit'>
							{!isLoading ? 'Register' : null}
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
