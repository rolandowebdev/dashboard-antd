import {
	User,
	UserCredential,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { auth } from '../../lib'

interface AuthContextProps {
	currentUser: User | null
	signup: (email: string, password: string) => Promise<UserCredential>
	signin: (email: string, password: string) => Promise<UserCredential>
	signout: () => Promise<void>
	resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextProps | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}

type AuthProviderProps = {
	children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const storedUser = localStorage.getItem('currentUser')
	const [currentUser, setCurrentUser] = useState<User | null>(
		storedUser ? JSON.parse(storedUser) : null
	)

	const signout = useCallback(async () => {
		await signOut(auth)
	}, [])

	const signup = useCallback(
		async (email: string, password: string): Promise<UserCredential> => {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			return userCredential
		},
		[]
	)

	const signin = useCallback(
		async (email: string, password: string): Promise<UserCredential> => {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)
			return userCredential
		},
		[]
	)

	const resetPassword = useCallback(async (email: string): Promise<void> => {
		await sendPasswordResetEmail(auth, email)
	}, [])

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
			if (user) {
				localStorage.setItem('currentUser', JSON.stringify(user))
			} else {
				localStorage.removeItem('currentUser')
			}
		})
		return unsubscribe
	}, [])

	const value = useMemo(
		() => ({
			currentUser,
			signup,
			signin,
			signout,
			resetPassword,
		}),
		[currentUser, signup, signin, signout, resetPassword]
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
