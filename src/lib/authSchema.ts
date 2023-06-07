import * as yup from 'yup'
import { validation } from '.'

export const loginSchema = yup.object({
	email: yup
		.string()
		.required('Email is required!')
		.email()
		.matches(
			validation.email,
			'Invalid email address. Please enter a valid email.'
		),
	password: yup
		.string()
		.required('Password is required!')
		.matches(
			validation.password,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
		),
})

export const registerSchema = yup.object({
	fullName: yup.string().required('Full Name is required!'),
	email: yup
		.string()
		.required('Email is required!')
		.email()
		.matches(
			validation.email,
			'Invalid email address. Please enter a valid email.'
		),
	password: yup
		.string()
		.required('Password is required!')
		.matches(
			validation.password,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.'
		),
	confirmPassword: yup
		.string()
		.required('Confirm Password is required!')
		.oneOf([yup.ref('password'), ''], 'Password must match!'),
})

export const resetPasswordSchema = yup.object({
	email: yup
		.string()
		.required('Email is required!')
		.email()
		.matches(
			validation.email,
			'Invalid email address. Please enter a valid email.'
		),
})
