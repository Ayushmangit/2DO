import { Link } from "react-router";

export default function PublicPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 flex-col">
			<div className="max-w-xl w-full text-center bg-white p-10 rounded-3xl shadow-lg">
				{/* Title */}
				<h1 className="text-6xl font-extrabold text-gray-900 mb-4">
					Clarity Engine
				</h1>

				{/* Description */}
				<p className="text-gray-700 mb-8 text-lg">
					Not a to-do app, a <strong>clarity engine</strong>.
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<Link
						to="/login"
						className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-xl
                       bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
					>
						Login
					</Link>

					<Link
						to="/register"
						className="flex-1 inline-flex justify-center items-center px-6 py-3 rounded-xl
                       border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
					>
						Register
					</Link>
				</div>
			</div>
			<div className="mt-12 bg-blue-50 py-16 px-6 text-center rounded-3xl mx-auto max-w-3xl shadow-sm">
				<p className="text-gray-800 text-lg md:text-xl leading-relaxed">
					Your tasks don't need more features, they need{" "}
					<strong>structure, priority, and context</strong>. One list, zero noise, real progress. Try it for free.
				</p>
			</div>
		</div>
	);
};
