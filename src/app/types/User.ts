export interface User {
	id: string
	email: string
	name: string
}

export interface ApiResponse {
	user: User,
	token: string
}
