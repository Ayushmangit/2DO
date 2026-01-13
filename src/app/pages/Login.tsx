import { useForm, type SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../hooks"
import { useNavigate } from "react-router"
import { loginUser } from "../features/auth/authThunk"
import type { LoginUserT } from "../types/User"
import { useEffect } from "react"

export default function Login() {

	const { register, handleSubmit, formState: { errors } } = useForm<LoginUserT>()
	const dispatch = useAppDispatch()
	const { userData, error, loading } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (userData) {
			navigate("/dashboard")
		}
	}, [userData, navigate])

	const onSubmit: SubmitHandler<LoginUserT> = (data) => {
		dispatch(loginUser(data))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Login</h2>
			<input
				{...register("email", { required: "Email required" })}
				placeholder="email"
			/>
			{errors.email && <p>{errors.email.message}</p>}

			<input
				{...register("password", { required: "Password is required" })}
				placeholder="password"
			/>
			{errors.password && <p>{errors.password.message}</p>}

			{error && <p>{error}</p>}

			<button
				type="submit" disabled={loading}>
				{loading ? "logging in..." : "Login"}
			</button>
		</form>
	);
};

