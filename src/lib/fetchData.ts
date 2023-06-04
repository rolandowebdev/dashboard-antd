import { Cart, Carts, Comments, Products, Users } from '../types'

export const fetchOrders = async (): Promise<Cart> => {
	const res = await fetch('https://dummyjson.com/carts/1')
	return await res.json()
}

export const fetchRevenue = async (): Promise<Carts> => {
	const res = await fetch('https://dummyjson.com/carts')
	return await res.json()
}

export const fetchInventory = async (): Promise<Products> => {
	const res = await fetch('https://dummyjson.com/products')
	return await res.json()
}

export const fetchCustomers = async (): Promise<Users> => {
	const res = await fetch('https://dummyjson.com/users')
	return await res.json()
}
export const fetchComments = async (): Promise<Comments> => {
	const res = await fetch('https://dummyjson.com/comments')
	return await res.json()
}
