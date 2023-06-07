import { UserOutlined } from '@ant-design/icons'
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
import {
	useForm,
	SubmitHandler,
	FieldValues,
	Controller,
} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { resetPasswordSchema } from '../../lib'
import { useAuth } from '../../context'
import { useState } from 'react'

export const ResetPassword = () => {
	const { resetPassword } = useAuth()
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
		resolver: yupResolver(resetPasswordSchema),
		defaultValues: {
			email: '',
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			setIsLoading(true)
			await resetPassword(data.email)
			message.success(
				'You have successfully reset password, check you email now.'
			)
			reset()
			setIsLoading(false)
		} catch {
			message.error('Failed to reset password. Your email was not found.')
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
			<Typography.Title level={1}>Reset Password</Typography.Title>

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
							{!isLoading ? 'Reset Password' : null}
						</Button>
					</Form.Item>
				</Form>
			</Card>

			<Card
				bordered
				style={{ marginTop: '16px', width: '400px', textAlign: 'center' }}>
				<Typography.Text style={{ fontSize: '15px' }}>
					Have you reset your password? <Link to='/login'>Login now!</Link>
				</Typography.Text>
			</Card>
		</Layout>
	)
}
