import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../lib/firebaseConfig'

type PrivateRouteProps = {
	children: ReactNode
}

export const PrivateRoutes = ({ children }: PrivateRouteProps): JSX.Element => {
	const user = auth.currentUser
	return user ? (
		(children as JSX.Element)
	) : (
		<Navigate to='/login' replace={true} />
	)
}
