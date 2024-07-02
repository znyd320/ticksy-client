import { useEffect, useRef, useState } from "react";
import colorNotification from "../../assets/headerImages/colorNotification.svg";
import messageBox from "../../assets/headerImages/messageBox.svg";
import messageNotify from "../../assets/headerImages/messageNotify.svg";
import notificationImg from "../../assets/headerImages/notify.svg";
import searchImg from "../../assets/headerImages/search.svg";

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

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<>
			<div className="py-10 flex items-center justify-between px-6">
				<div className="md:w-[500px] border rounded-md p-3 ml-[56px]">
					<form className="flex items-center">
						<input
							type="text"
							name="search"
							id="search"
							className="placeholder:text-[#c9c9c9] p-0 font-Lato text-sm leading-none focus:outline-none focus:ring-0 w-full border-none line-clamp-1 text-ellipsis"
							placeholder="Search for Tickets...."
						/>
						<img src={searchImg} alt="" className="cursor-pointer" />
					</form>
				</div>
				<div className="flex items-start gap-6 relative">
					{/* notification card */}
					<div
						ref={menuRef}
						className={`${
							openNotification ? "block" : "hidden"
						} md:max-h-[300px] pb-1 h-fit md:w-[350px] overflow-y-scroll border rounded-[4px] absolute top-[-18px] left-[-380px] z-10`}
					>
						{/* notification header */}
						<div className="flex items-center border-b gap-3 px-4 py-3">
							<img src={notificationImg} alt="icon" />
							<span className="text-base3 md:text-sm text-txtColor font-Lato font-bold capitalize">
								Notification (6)
							</span>
						</div>
						{/* notification body */}
						<div>
							{/* individual notification */}
							<div className="flex items-start gap-2 pl-[14px] pr-7 bg-secondaryDisable pt-3 pb-1 border-b border-[#a4a4a4]/50">
								<img src={colorNotification} alt="" />
								<div>
									<p className="line-clamp-3 text-txtColor text-ellipsis font-Roboto text-sm capitalize ">
										You're now eligible to join seller Plus. Sound like a plus?
										learn more about the benefits
									</p>
									<span className="text-txtColor font-Roboto text-xs-200 font-semibold capitalize">
										3d
									</span>
								</div>
								<img className="py-4" src={messageBox} alt="" />
							</div>
						</div>
					</div>
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
