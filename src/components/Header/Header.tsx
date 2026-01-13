import IonIcon from "@reacticons/ionicons"

function Header() {
	return (
		<header className="w-screen h-20 flex justify-between items-center ">
			<IonIcon
				className=" text-5xl text-gray-800"
				name="menu-outline" />
			<h1 className=" font-bold text-3xl text-gray-800">2 DO'S</h1>
			<IonIcon className=" text-3xl pr-2  text-gray-800" name="person-outline" />
		</header>
	)
}
export default Header
