import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { createTodo, getAllTodos } from "../../app/features/todo/todoThunk"

function Form() {
	const [task, setTask] = useState("")
	const dispatch = useAppDispatch()
	const { todos } = useAppSelector(state => state.todos)

	const user = useAppSelector(state => state.auth.userData)

	useEffect(() => {
		if (user) {
			dispatch(getAllTodos())
		}
	}, [dispatch, user])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!task.trim()) return
		dispatch(createTodo({ task }))
		setTask("")
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="mx-auto mt-8 flex w-full max-w-md items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
			>
				<input
					type="text"
					placeholder="Add a new task..."
					value={task}
					onChange={(e) => setTask(e.target.value)}
					className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-400
          focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
				/>

				<button
					type="submit"
					className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition
          hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-blue-400"
					disabled={!task.trim()}
				>
					Add
				</button>
			</form>

			<ul className="mx-auto mt-4 w-full max-w-md space-y-2">
				{todos.map(todo => (
					<li key={todo.id} className="rounded-lg bg-white p-3 shadow-sm">
						{todo.task}
					</li>
				))}
			</ul>		</>
	)
}

export default Form
