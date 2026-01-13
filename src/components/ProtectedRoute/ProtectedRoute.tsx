import type { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router";

export interface Props {
	children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
	const { userData } = useAppSelector(state => state.auth)
	return userData ? <>{children}</> : <Navigate to="/login" replace />
}
