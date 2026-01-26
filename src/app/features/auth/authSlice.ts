import { createSlice } from "@reduxjs/toolkit"
import type { ApiResponse, User } from "../../types/User"
import { getCurrentUser, loginUser, logoutUser, registerUser } from "./authThunk"
import type { PayloadAction } from "@reduxjs/toolkit"


interface AuthState {
	isAuthenticated: boolean
	userData: User | null
	loading: boolean
	token: string | null
	error: string | null
}
const token = localStorage.getItem("token")

const Ayushman = {
	id: "222",
	email: "chauhanayushman@gmail.com",
	name: "Ayushman",
}
const initialState: AuthState = {
	isAuthenticated: !!token,
	userData: null,
	loading: false,
	token,
	error: null
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
				state.isAuthenticated = true
				state.userData = action.payload.user
				state.token = action.payload.token

				localStorage.setItem("token", action.payload.token)
			})
			.addCase(loginUser.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(loginUser.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
				state.loading = false
				state.isAuthenticated = true
				state.userData = action.payload.user
				state.token = action.payload.token
				localStorage.setItem("token", action.payload.token)
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.error = String(action.payload)
				state.loading = false
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.isAuthenticated = false
				state.token = null
				state.userData = null
				localStorage.removeItem("token")
			})
			.addCase(getCurrentUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(getCurrentUser.fulfilled, (state) => {
				state.userData = Ayushman
				state.isAuthenticated = true
				state.loading = false
			})
			.addCase(getCurrentUser.rejected, (state) => {
				state.userData = null
				state.loading = false
				state.isAuthenticated = false
			})
	}
})

export default authSlice.reducer
