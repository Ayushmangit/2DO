export interface User {
	id: string
	email: string
	name: string
}

export interface ApiResponse {
	user: User,
	token: string
}

export interface LoginUserT {
	email: string
	password: string
}

export interface RegisterUserT extends LoginUserT {
	name: string
	password_confirmation: string
}

