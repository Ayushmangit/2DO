import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { createTodo, getAllTodos } from "../../app/features/todo/todoThunk"
import TodoComponent from "../TodoComponent/TodoComponent"
import IonIcon from "@reacticons/ionicons"

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
		<div className="flex flex-col items-start gap-5 p-20 mx-auto max-w-md font-display">
			<div className="flex flex-col ">
				<h1 className="text-3xl">2DO's </h1>
				<p className="font-extralight">Organise your daily tasks</p>
			</div>

			<div className="flex justify-between min-w-md">
				<div>
					<div className="flex items-center gap-2">
						<div className=" flex gap-3">
							<div className=" flex items-center gap-1 bg-[#FFFFEB1A] px-6 py-2 rounded-4xl ">
								<IonIcon name="menu" className="text-2xl" />
								<span>
									To Do
								</span>
							</div>
						</div>
						<div>
							<div className=" flex items-center gap-1 py-2 rounded-4xl cursor-pointer">
								<IonIcon name="checkbox" />
								Done
							</div>
						</div>

					</div>

				</div>
				<form onSubmit={handleSubmit}>
					<button
						type="submit"
						className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-blue-400 flex items-center"
						disabled={!task.trim()}
					>
						New

					</button>
				</form>
			</div>

			<ul className=" mt-4 w-full max-w-md space-y-2 list-none">
				{todos.map(todo => (
					<TodoComponent id={todo.id} task={todo.task} />
				))}
			</ul>
			<form
				onSubmit={handleSubmit}
				className="mt-1 flex w-full min-w-md items-center gap-3 rounded-xl"
			>
				<input
					type="text"
					placeholder="Add a new task..."
					value={task}
					onChange={(e) => setTask(e.target.value)}
					className="flex-1 rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-400
          focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
				/>

				<button
					type="submit"
					className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-blue-400 flex items-center"
					disabled={!task.trim()}
				>
					<IonIcon name="add" className="text-2xl " />

				</button>
			</form>
		</div>
	)
}

export default Form
