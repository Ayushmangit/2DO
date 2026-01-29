import { useForm, type SubmitHandler } from "react-hook-form"
import type { RegisterUserT } from "../types/User"
import { useAppDispatch, useAppSelector } from "../hooks"
import { useNavigate } from "react-router"
import { registerUser } from "../features/auth/authThunk"
import { useEffect } from "react"

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterUserT>()

	const { userData, loading, error } = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (userData) {
			navigate("/home")
		}
	}, [userData, navigate])

	const onSubmit: SubmitHandler<RegisterUserT> = (data) => {
		dispatch(registerUser(data))
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
			>
				<h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
					Create Account 🚀
				</h2>

				<div className="mb-4">
					<input
						type="text"
						placeholder="Name"
						{...register("name", { required: "Name is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-500">
							{errors.name.message}
						</p>
					)}
				</div>

				<div className="mb-4">
					<input
						type="email"
						placeholder="Email"
						{...register("email", { required: "Email is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-500">
							{errors.email.message}
						</p>
					)}
				</div>

				<div className="mb-4">
					<input
						type="password"
						placeholder="Password"
						{...register("password", { required: "Password is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
					{errors.password && (
						<p className="mt-1 text-sm text-red-500">
							{errors.password.message}
						</p>
					)}
				</div>
				<div className="mb-4">
					<input
						type="password"
						placeholder="Confirm Password"
						{...register("password_confirmation", { required: "Password is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
					{errors.password && (
						<p className="mt-1 text-sm text-red-500">
							{errors.password.message}
						</p>
					)}
				</div>

				{error && (
					<p className="mb-4 rounded-md bg-red-100 px-3 py-2 text-sm text-red-600">
						{error}
					</p>
				)}

				<button
					type="submit"
					disabled={loading}
					className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
				>
					{loading ? "Registering..." : "Register"}
				</button>

				<div className="my-6 flex items-center">
					<div className="h-px flex-1 bg-gray-300" />
					<span className="mx-2 text-sm text-gray-500">OR</span>
					<div className="h-px flex-1 bg-gray-300" />
				</div>

				<p className="mb-2 text-center text-sm text-gray-600">
					Already have an account?
				</p>

				<button
					type="button"
					onClick={() => navigate("/login")}
					className="w-full rounded-md border border-gray-300 py-2 font-semibold text-gray-700 transition hover:bg-gray-100"
				>
					Login
				</button>
			</form>
		</div>
	)
}
