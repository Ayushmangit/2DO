
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const createTodo = createAsyncThunk(
	'todos/createTodo',
	async (
		data: { task: string }, thunkAPI
	) => {
		try {
			const response = await api.post("todos/", data)
			console.log(response.data)
			return response.data.todo
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)

export const getAllTodos = createAsyncThunk(
	'todos/getAllTodos',
	async (
		_, thunkAPI
	) => {
		try {
			const response = await api.get("todos/")
			return response.data
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)
export const updateTodo = createAsyncThunk(
	'todos/update',
	async (
		{ id, task }: { id: string, task: string }, thunkAPI
	) => {
		try {
			const response = await api.patch(`todos/${id}`, { task })
			return response.data
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data.msg)
		}
	}
)
