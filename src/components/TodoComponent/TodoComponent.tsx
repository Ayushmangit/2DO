import { useState } from "react"
import IonIcon from "@reacticons/ionicons"
import { updateTodo } from "../../app/features/todo/todoThunk"
import { useAppDispatch } from "../../app/hooks"

interface TodoProps {
	id: string
	task: string
}

export default function TodoComponent({ id, task }: TodoProps) {
	const [isEditing, setIsEditing] = useState(false)
	const [value, setValue] = useState(task)
	const dispatch = useAppDispatch()

	const saveEdit = () => {
		setIsEditing(false)
		dispatch(updateTodo({ id, task: value }))
	}

	const cancelEdit = () => {
		setValue(task)
		setIsEditing(false)
	}

	return (
		<div className="flex border-[#f9f4f5] items-center justify-between min-w-md
                    hover:bg-[#502f4c] py-2 hover:scale-105 px-4
                    transition-all duration-100 ease-in-out
                    hover:translate-x-2 rounded-2xl group">

			<div className="flex gap-2 items-center">

				<input
					type="checkbox"
					className="h-4 w-4 appearance-none accent-transparent
                     border border-gray-400 peer checked:bg-[#f9f4f5]"
				/>

				{!isEditing ? (
					<li key={id}>{value}</li>
				) : (
					<input
						autoFocus
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onBlur={saveEdit}
						onKeyDown={(e) => {
							if (e.key === "Enter") saveEdit()
							if (e.key === "Escape") cancelEdit()
						}}
						className="bg-transparent border-b border-white outline-none"
					/>
				)}

				{!isEditing && (
					<IonIcon
						name="pencil"
						onClick={() => setIsEditing(true)}
						className="opacity-0 group-hover:opacity-100
                       transition-opacity duration-200 cursor-pointer"
					/>
				)}
			</div>

			<span>Today</span>
		</div>
	)
}
