import { useForm, type SubmitHandler } from "react-hook-form";
import type { RegisterUserT } from "../types/User";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router";
import { registerUser } from "../features/auth/authThunk";
import { useEffect } from "react";

export default function Register() {
	const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserT>();
	const { userData, loading, error } = useAppSelector(state => state.auth)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (userData) {
			navigate("/dashboard")
		}
	}, [userData, navigate])

	const onSubmit: SubmitHandler<RegisterUserT> = (data) => {
		dispatch(registerUser(data))
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Register</h2>

			<input
				{...register("name", { required: "Name is required" })}
				placeholder="name"
			/>
			{errors.name && <p>{errors.name.message}</p>}

			<input
				{...register("email", { required: "Email is required" })}
				placeholder="email"
			/>
			{errors.email && <p>{errors.email.message}</p>}

			<input
				{...register("password", { required: "Password is required" })}
				placeholder="password"
			/>
			{errors.password && <p>{errors.password.message}</p>}

			{error && <p>{error}</p>}

			<button type="submit" disabled={loading}>
				{loading ? "registering..." : "Register"}
			</button>
		</form>
	)



}
