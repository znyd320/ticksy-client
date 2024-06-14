import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import useAuthCheck from "./hooks/checkAuth";
import { routerList } from "./router/Router";

const router = createBrowserRouter(routerList);

function App() {
	// const isLoggedIn = useAuth();
	const isAuthChecked = useAuthCheck();

	// console.log("isLoggedIn =>", isLoggedIn);
	// console.log("isAuthChecked =>", isAuthChecked);

	if (isAuthChecked) {
		return (
			<>
				<Toaster />
				<RouterProvider router={router} />
			</>
		);
	} else {
		return (
			<div className="flex h-screen justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
			</div>
		);
	}
}

export default App;
