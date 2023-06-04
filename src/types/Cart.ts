export type ProductCart = {
	id: number
	title: string
	price: number
	quantity: number
	total: number
	discountPercentage: number
	discountedPrice: number
}

export type ShoppingCart = {
	id: number
	products: ProductCart[]
	total: number
	discountedTotal: number
	userId: number
	totalProducts: number
	totalQuantity: number
}
