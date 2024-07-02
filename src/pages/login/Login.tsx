/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginState } from "../../features/auth/auth";
import { useLoginMutation } from "../../features/auth/auth-slice";

function Login() {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [login, { isLoading, isSuccess, data, error, status }] =
		useLoginMutation();

	// replace any with this (React.FormEvent<HTMLFormElement>)
	const handleLogin = (e: any) => {
		e.preventDefault();

		const payload = {
			email: email,
			password: password,
		};

		login(payload);
	};

	useEffect(() => {
		const userRoles = data?.payload?.data?.roles;
		const checkAdmin = userRoles?.filter(
			(role: string) => role === "System Administrator" || "Pro User"
		);

		console.log("data =>", checkAdmin);
		if (error) {
			console.log("login error =>", error);
		}
		if (!isLoading && isSuccess && data.response === "Faield") {
			console.log("Status => ", status);
			toast.error(data.message);
		}
		if (checkAdmin?.length === 0) {
			toast.error("Only System Admin can login here");
			dispatch(loginState(false));
		}
		if (
			!isLoading &&
			isSuccess &&
			data?.response === "Success" &&
			checkAdmin?.length > 0
		) {
			localStorage.setItem("rekoul_token", data?.payload?.access_token);
			localStorage.setItem("rekoul_user", JSON.stringify(data?.payload?.data));
			toast.success(data?.message);

			dispatch(
				loginState({
					token: data?.payload?.access_token,
					user: data?.payload?.data,
				})
			);
		}
	}, [isLoading, isSuccess]);

	return (
		<div className="flex h-screen w-full justify-center items-center">
			<form
				className="flex max-w-md flex-col gap-4 border rounded-md p-5 shadow w-[350px]"
				onSubmit={handleLogin}
			>
				<h1 className="text-xl font-bold border-b pb-2">Login</h1>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Your email" />
					</div>
					<TextInput
						id="email1"
						type="email"
						placeholder="example@gmail.com"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="password1" value="Your password" />
					</div>
					<TextInput
						id="password1"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">Remember me</Label>
				</div>
				<Button
					type="submit"
					disabled={isLoading}
					className="bg-primaryDefault"
				>
					{isLoading ? "Loading..." : "Login"}
				</Button>
			</form>
		</div>
	);
}

export default Login;
