interface TodoProps {
	id: string
	task: string
}

export default function TodoComponent({ id, task }: TodoProps) {
	return (
		<div className="flex border-[#f9f4f5] items-center justify-between min-w-md hover:bg-[#502f4c] py-2 hover:scale-105 px-4 transition-all duration-100 ease-in-out hover:translate-x-2 rounded-2xl">

			<div className="flex gap-2 items-center">

				<input type="checkbox" className="h-4 w-4 appearance-none accent-transparent border border-gray-400 peer checked:bg-[#f9f4f5] " />
				<li key={id} >
					{task}
				</li>

			</div>
			<span>Today</span>
		</div>
	)
}
