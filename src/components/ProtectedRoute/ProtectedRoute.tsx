import type { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router";

export interface Props {
	children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
	const { loading, isAuthenticated } = useAppSelector(state => state.auth)
	if (loading) return null
	return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}
