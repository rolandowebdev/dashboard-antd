import { Avatar, Rate } from 'antd'

export const ordersTable = [
	{
		title: 'Resent Orders',
		dataIndex: 'title',
	},
	{
		title: 'Quantity',
		dataIndex: 'quantity',
		render: (value: number) => <span>${value}</span>,
	},
	{
		title: 'Discount',
		dataIndex: 'discountedPrice',
		render: (value: number) => <span>${value}</span>,
	},
	{
		title: 'Total',
		dataIndex: 'total',
	},
]

export const inventoryTable = [
	{
		title: 'Thumbnail',
		dataIndex: 'thumbnail',
		render: (link: string) => {
			return <Avatar src={link} size={94} shape='square' alt='thumbnail' />
		},
	},
	{
		title: 'Title',
		dataIndex: 'title',
	},
	{
		title: 'Price',
		dataIndex: 'price',
		render: (value: number) => <span>${value}</span>,
	},
	{
		title: 'Rating',
		dataIndex: 'rating',
		render: (rating: number) => <Rate value={rating} allowHalf disabled />,
	},
	{
		title: 'Stock',
		dataIndex: 'stock',
	},
	{
		title: 'Brand',
		dataIndex: 'brand',
	},
	{
		title: 'Category',
		dataIndex: 'category',
	},
]

export const usersTable = [
	{
		title: 'Photo',
		dataIndex: 'image',
		render: (link: string) => {
			return <Avatar src={link} size={94} alt='photo' />
		},
	},
	{
		title: 'First Name',
		dataIndex: 'firstName',
	},
	{
		title: 'Last Name',
		dataIndex: 'lastName',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
	{
		title: 'Phone',
		dataIndex: 'phone',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		render: (address: any) => {
			return (
				<span>
					{address.address}, {address.city}
				</span>
			)
		},
	},
]
