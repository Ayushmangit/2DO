import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logoutUser } from "../../app/features/auth/authThunk"

function Header() {
	const dispatch = useAppDispatch()
	const { userData } = useAppSelector((state) => state.auth)

	const handleLogout = () => {
		dispatch(logoutUser())
	}

	return (
		<header className="flex h-16 w-full items-center justify-between bg-[#70587c] px-6 shadow-sm">
			<h1 className="text-xl font-bold tracking-wide text-[#f9f4f5] ">
				Klarity
			</h1>

			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 text-[#f9f4f5] ">
					<span className="hidden text-xl font-medium sm:block">
						Hi, {userData?.name}
					</span>
				</div>

				<button
					onClick={handleLogout}
					className="rounded-md bg-gray-800 px-4 py-1.5 text-sm font-semibold text-[#f9f4f5] transition hover:bg-gray-500 "
				>
					Logout
				</button>
			</div>
		</header>
	)
}

export default Header
