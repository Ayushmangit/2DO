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
		<div className="flex min-h-screen items-center justify-center bg-[#000000] px-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-md rounded-xl bg-[#c8b8db] p-8 shadow-lg"
			>
				<h2 className="mb-6 text-center text-2xl font-bold text-[#502f4c]">
					Create Account
				</h2>

				{/* Name */}
				<div className="mb-4">
					<input
						type="text"
						placeholder="Name"
						{...register("name", { required: "Name is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#502f4c] focus:outline-none focus:ring-1 focus:ring-[#502f4c]"
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-500">
							{errors.name.message}
						</p>
					)}
				</div>

				{/* Email */}
				<div className="mb-4">
					<input
						type="email"
						placeholder="Email"
						{...register("email", { required: "Email is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#502f4c] focus:outline-none focus:ring-1 focus:ring-[#502f4c]"
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-500">
							{errors.email.message}
						</p>
					)}
				</div>

				{/* Password */}
				<div className="mb-4">
					<input
						type="password"
						placeholder="Password"
						{...register("password", { required: "Password is required" })}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#502f4c] focus:outline-none focus:ring-1 focus:ring-[#502f4c]"
					/>
					{errors.password && (
						<p className="mt-1 text-sm text-red-500">
							{errors.password.message}
						</p>
					)}
				</div>

				{/* Confirm Password */}
				<div className="mb-4">
					<input
						type="password"
						placeholder="Confirm Password"
						{...register("password_confirmation", {
							required: "Password confirmation is required",
						})}
						className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#502f4c] focus:outline-none focus:ring-1 focus:ring-[#502f4c]"
					/>
					{errors.password_confirmation && (
						<p className="mt-1 text-sm text-red-500">
							{errors.password_confirmation.message}
						</p>
					)}
				</div>

				{/* Server Error */}
				{error && (
					<p className="mb-4 rounded-md bg-red-100 px-3 py-2 text-sm text-red-600">
						{error}
					</p>
				)}

				{/* Register Button */}
				<button
					type="submit"
					disabled={loading}
					className="w-full rounded-md bg-[#502f4c] py-2 font-semibold text-[#f9f4f5] transition hover:bg-[#673c62] disabled:cursor-not-allowed disabled:bg-[#000000]"
				>
					{loading ? "Registering..." : "Register"}
				</button>

				{/* Divider */}
				<div className="my-6 flex items-center">
					<div className="h-px flex-1 bg-gray-300" />
					<span className="mx-2 text-sm text-gray-500">OR</span>
					<div className="h-px flex-1 bg-gray-300" />
				</div>

				{/* Login Redirect */}
				<p className="mb-2 text-center text-sm text-gray-600">
					Already have an account?
				</p>

				<button
					type="button"
					onClick={() => navigate("/login")}
					className="w-full rounded-md border border-gray-300 py-2 font-semibold bg-[#271725] text-[#f9f4f5] transition hover:bg-[#502f4c]"
				>
					Login
				</button>
			</form>
		</div>
	)
}
