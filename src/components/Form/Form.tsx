
import { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	createTodo,
	getAllTodos,
	updateTodo,
} from "../../app/features/todo/todoThunk";


interface TodoProps {
	id: string;
	task: string;
}

function TodoComponent({ id, task }: TodoProps) {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(task);
	const dispatch = useAppDispatch();

	const saveEdit = () => {
		setIsEditing(false);
		if (value.trim() && value !== task) {
			dispatch(updateTodo({ id, task: value }));
		}
	};

	const cancelEdit = () => {
		setValue(task);
		setIsEditing(false);
	};

	return (
		<div
			className="flex border-[#f9f4f5] items-center justify-between min-w-md
                 hover:bg-[#502f4c] py-2 hover:scale-105 px-4
                 transition-all duration-100 ease-in-out
                 hover:translate-x-2 rounded-2xl group"
		>
			<div className="flex gap-2 items-center">
				<input
					type="checkbox"
					className="h-4 w-4 appearance-none accent-transparent
                     border border-gray-400 peer checked:bg-[#f9f4f5]"
				/>

				{!isEditing ? (
					<li>{value}</li>
				) : (
					<input
						autoFocus
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onBlur={saveEdit}
						onKeyDown={(e) => {
							if (e.key === "Enter") saveEdit();
							if (e.key === "Escape") cancelEdit();
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
	);
}

function Form() {
	const [task, setTask] = useState("");
	const dispatch = useAppDispatch();

	const { todos } = useAppSelector((state) => state.todos);
	const user = useAppSelector((state) => state.auth.userData);

	useEffect(() => {
		if (user) {
			dispatch(getAllTodos());
		}
	}, [dispatch, user]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!task.trim()) return;
		dispatch(createTodo({ task }));
		setTask("");
	}

	return (
		<div className="flex flex-col items-start gap-5 p-20 mx-auto max-w-md font-display">
			<div className="flex flex-col">
				<h1 className="text-3xl">2DO's</h1>
				<p className="font-extralight">Organise your daily tasks</p>
			</div>

			<div className="flex justify-between min-w-md">
				<div className="flex items-center gap-2">
					<div className="flex items-center gap-1 bg-[#FFFFEB1A] px-6 py-2 rounded-4xl">
						<IonIcon name="menu" className="text-2xl" />
						<span>To Do</span>
					</div>

					<div className="flex items-center gap-1 py-2 rounded-4xl cursor-pointer">
						<IonIcon name="checkbox" />
						Done
					</div>
				</div>

				<form onSubmit={handleSubmit}>
					<button
						type="submit"
						disabled={!task.trim()}
						className="rounded-lg bg-blue-600 px-5 py-2 font-semibold
                       transition hover:bg-blue-700 active:scale-95
                       disabled:cursor-not-allowed disabled:bg-blue-400"
					>
						New
					</button>
				</form>
			</div>

			<ul className="mt-4 w-full max-w-md space-y-2 list-none">
				{todos.map((todo) => (
					<TodoComponent key={todo.id} id={todo.id} task={todo.task} />
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
					className="flex-1 rounded-lg border border-gray-300 px-4 py-2
                     placeholder-gray-400 focus:border-blue-500
                     focus:outline-none focus:ring-1 focus:ring-blue-500"
				/>

				<button
					type="submit"
					disabled={!task.trim()}
					className="rounded-lg bg-blue-600 px-5 py-2 font-semibold
                     transition hover:bg-blue-700 active:scale-95
                     disabled:cursor-not-allowed disabled:bg-blue-400"
				>
					<IonIcon name="add" className="text-2xl" />
				</button>
			</form>
		</div>
	);
}

export default Form;
