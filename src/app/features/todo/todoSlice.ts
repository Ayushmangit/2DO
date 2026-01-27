import { createSlice } from "@reduxjs/toolkit"
import { createTodo, getAllTodos } from "./todoThunk"

interface Todo {
	id: string
	task: string
	completed: boolean
}

interface TodoState {
	todos: Todo[]
	loading: boolean
	error: string | null
}

const initialState: TodoState = {
	todos: [],
	loading: false,
	error: null
}

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createTodo.fulfilled, (state, action) => {
				state.loading = false
				state.todos.push(action.payload)
			})
			.addCase(getAllTodos.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(getAllTodos.fulfilled, (state, action) => {
				state.loading = false
				state.todos = action.payload
			})
			.addCase(getAllTodos.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	}
})

export default todoSlice.reducer
