import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import type { ApiResponse } from "../../types/User";

export const registerUser = createAsyncThunk(
	'auth/register',
	async (
		data: { name: string, email: string, password: string }, thunkAPI
	) => {
		try {
			const response = await api.post("auth/register", data)
			return response.data
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.message)
		}
	}
)

export const loginUser = createAsyncThunk(
	"auth/login",
	async (data: { email: string, password: string }, thunkAPI) => {
		try {
			const response = await api.post("auth/login", data)
			return response.data
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.message)
		}
	}
)

export const logoutUser = createAsyncThunk(
	"auth/logout",
	async () => {
		return true
	}
)

export const getCurrentUser = createAsyncThunk(
	"auth/me",
	async (_, thunkAPI) => {
		try {
			const response = await api.get("auth/me")
			return response.data
		} catch (error: any) {
			localStorage.removeItem("token")
			return thunkAPI.rejectWithValue(error.response.data.message)
		}
	}
)
