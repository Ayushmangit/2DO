import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.ts"
import todoReducer from "./features/todo/todoSlice.ts"

export const store = configureStore({
	reducer: {
		auth: authReducer,
		todos: todoReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
