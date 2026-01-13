import { useState } from "react"

function Form() {

	const [task, setTask] = useState("")

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log(task)
		setTask("")
	}
	return (
		<form onSubmit={handleSubmit}
			className="flex w-full max-w-md gap-2 p-4 mt-8">
			<input
				type="text"
				placeholder="Add a new task..."
				className="flex-1 rounded-lg border border-gray-300 bg-[#b3b3b3] px-4 py-2
           text-gray-800 placeholder-[#242325]
           focus:outline-none focus:ring-2 focus:ring-blue-500"
				onChange={(e) => { setTask(e.target.value) }}
				value={task}
			/>
			<button
				type="submit"
				className="rounded-lg bg-[#DC955A] px-4 py-2 text-white font-medium
           hover:bg-blue-600 active:scale-95 transition"
			>
				Add
			</button>
		</form>
	)
}

export default Form
