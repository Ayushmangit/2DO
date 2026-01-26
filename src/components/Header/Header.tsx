import IonIcon from "@reacticons/ionicons"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logoutUser } from "../../app/features/auth/authThunk"

function Header() {
	const dispatch = useAppDispatch()
	const { userData } = useAppSelector((state) => state.auth)

	const handleLogout = () => {
		dispatch(logoutUser())
	}

	return (
		<header className="flex h-16 w-full items-center justify-between bg-white px-6 shadow-sm">
			{/* Left: Menu */}
			<button className="text-gray-700 transition hover:text-blue-600">
				<IonIcon name="menu-outline" className="text-3xl" />
			</button>

			{/* Center: App Title */}
			<h1 className="text-xl font-bold tracking-wide text-gray-800">
				2 DO&apos;S
			</h1>

			{/* Right: User Info */}
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 text-gray-700">
					<IonIcon name="person-circle-outline" className="text-3xl" />
					<span className="hidden text-sm font-medium sm:block">
						{userData?.email}
					</span>
				</div>

				<button
					onClick={handleLogout}
					className="rounded-md bg-red-500 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-red-600"
				>
					Logout
				</button>
			</div>
		</header>
	)
}

export default Header
