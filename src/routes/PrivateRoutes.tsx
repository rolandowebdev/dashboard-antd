import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context'

export const PrivateRoutes: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { currentUser } = useAuth()
	return currentUser ? <>{children}</> : <Navigate to='/login' replace />
}
