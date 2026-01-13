import { Navigate } from "react-router";
import { useAppSelector } from "../../../app/hooks";
import type { Props } from "../../ProtectedRoute/ProtectedRoute";

export default function GuestRoute({ children }: Props) {
	const { userData, isAuthenticated } = useAppSelector(state => state.auth)
	if (!isAuthenticated) return null

	return userData ? <Navigate to="/home" /> : children
}
