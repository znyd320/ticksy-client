import { useEffect, useState, useRef } from "react";
import messageNotify from "../../assets/headerImages/messageNotify.svg";
import Searchbar from "./Searchbar";
import NotificationModal from "./NotificationModal";

function Header() {
	const [openNotification, setOpenNotification] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);


	// close notification modal by clicking outside
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (!menuRef.current.contains(e.target as Node)) {
				setOpenNotification(false);
			}
		};

		document.addEventListener("mousedown", handler);

		// clear event listener
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<>
			<div className="py-10 flex items-center justify-between px-6">
				<Searchbar/>
				<div className="flex items-start gap-6 relative">
					{/* notification Modal */}
					<NotificationModal open={openNotification} menuRef={menuRef}/>
					{/* right side of the header */}
					<div className="flex items-center gap-6">
						<img
							onClick={() => setOpenNotification(!openNotification)}
							src={messageNotify}
							alt="notify"
							className={`cursor-pointer ${
								openNotification ? "hidden" : "block"
							}`}
						/>
						<span className="text-[#595959] font-Lato md:text-prev text-lg1 leading-none cursor-pointer font-medium">
							Hi, Sakib
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
