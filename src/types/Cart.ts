export interface ProductCart {
	id: number
	title: string
	price: number
	quantity: number
	total: number
	discountPercentage: number
	discountedPrice: number
}

export interface Cart {
	id: number
	products: ProductCart[]
	total: number
	discountedTotal: number
	userId: number
	totalProducts: number
	totalQuantity: number
}

export interface Carts {
	carts: Cart[]
	total: number
	skip: number
	limit: number
}
