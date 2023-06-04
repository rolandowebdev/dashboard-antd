export type ProductCart = {
	id: number
	title: string
	price: number
	quantity: number
	total: number
	discountPercentage: number
	discountedPrice: number
}

export type Cart = {
	id: number
	products: ProductCart[]
	total: number
	discountedTotal: number
	userId: number
	totalProducts: number
	totalQuantity: number
}

export type Carts = {
	carts: Cart[]
	total: number
	skip: number
	limit: number
}
