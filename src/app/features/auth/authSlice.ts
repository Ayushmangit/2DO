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

const initialState: AuthState = {
	isAuthenticated: false,
	userData: null,
	loading: false,
	token: localStorage.getItem('token'),
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
			.addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
				state.userData = action.payload.user
				state.isAuthenticated = true
			})
	}
})

export default authSlice.reducer
