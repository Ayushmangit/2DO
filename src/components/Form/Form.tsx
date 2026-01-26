import { useState } from "react"

function Form() {
	const [task, setTask] = useState("")

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!task.trim()) return

		console.log(task)
		setTask("")
	}

	return (
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
	)
}

export default Form
