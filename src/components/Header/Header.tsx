import IonIcon from "@reacticons/ionicons"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logoutUser } from "../../app/features/auth/authThunk"
import { useEffect } from "react"

function Header() {
	const dispatch = useAppDispatch()
	const handleLogout = () => {
		dispatch(logoutUser())
	}

	const { userData } = useAppSelector(state => state.auth)

	useEffect(() => {
		console.log(userData)
	})

	return (
		<header className="w-screen h-20 flex justify-between items-center ">
			<IonIcon
				className=" text-5xl text-gray-800"
				name="menu-outline" />
			<h1 className=" font-bold text-3xl text-gray-800">2 DO'S</h1>
			<IonIcon className=" text-3xl pr-2  text-gray-800" name="person-outline" />
			<h2>{userData?.name}</h2>
			<button onClick={handleLogout}>Logout</button>
		</header>
	)
}
export default Header
