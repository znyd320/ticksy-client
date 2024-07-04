import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import CustomSidebar from "../components/sidebar/CustomSidebar";

function MainLayout() {
	return (
		<>
			<div className="">
				<CustomSidebar />
				<div className="relative md:left-[250px] 2xl:left-[316px] md:w-md-w 2xl:w-2xl-w -px--spacing-4xl">
					<Header />
					<div className="">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

export default MainLayout;
