import { Comment, Product, ShoppingCart, User } from '../types'

export const fetchOrders = (): Promise<ShoppingCart> => {
	return fetch('https://dummyjson.com/carts/1').then((res) => res.json())
}

export const fetchRevenue = (): Promise<ShoppingCart[]> => {
	return fetch('https://dummyjson.com/carts').then((res) => res.json())
}

export const fetchInventory = (): Promise<Product> => {
	return fetch('https://dummyjson.com/products').then((res) => res.json())
}

export const fetchCustomers = (): Promise<User> => {
	return fetch('https://dummyjson.com/users').then((res) => res.json())
}
export const fetchComments = (): Promise<Comment> => {
	return fetch('https://dummyjson.com/comments').then((res) => res.json())
}
