export type User = {
	id: number
	username: string
}

export type Comment = {
	id: number
	body: string
	postId: number
	user: User
}

export type Comments = {
	comments: Comment[]
	total: number
	skip: number
	limit: number
}
