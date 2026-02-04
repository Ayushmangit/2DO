import { NavLink } from "react-router";

function SideBar() {
	return (
		<div style={{ width: "200px", padding: "16px" }}>
			<NavLink to="/home/todos"> Todos</NavLink>
			<br />
			<NavLink to="/home/notes"> Notes</NavLink>
		</div>
	);
}

export default SideBar;
