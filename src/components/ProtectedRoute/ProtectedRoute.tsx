import type { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router";

export interface Props {
	children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
	const { user } = useAppSelector(state => state.auth)
	return user ? <>{children}</> : <Navigate to="/login" replace />
}
