import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router";

function HomeLayout() {
	return (
		<>
			<Header />
			<div className="flex">
				<SideBar />
				<div className="flex-1 p-4">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default HomeLayout;
