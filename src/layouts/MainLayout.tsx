import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import CustomSidebar from "../components/sidebar/CustomSidebar";

function MainLayout() {
	const [open, setOpen] = useState<boolean>(true);
	return (
		<>
			<div className="flex md:flex sm:w-full">
				{open && <CustomSidebar />}
				<div className="w-full">
					<Header setOpen={setOpen} open={open} />
					<div className=" h-[80vh] overflow-x-auto sm:h-full">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}

export default MainLayout;
