import colorNotification from "../../assets/headerImages/colorNotification.svg";
import messageBox from "../../assets/headerImages/messageBox.svg";
import notificationImg from "../../assets/headerImages/notification.svg";
import searchImg from "../../assets/headerImages/search.svg";

function Header() {
	return (
		<>
			<div className="py-10 flex items-start justify-between">
				<div className="">
					<form className="flex items-center">
						<input type="search" name="search" id="search" />
						<img src={searchImg} alt="" />
					</form>
				</div>
				<div className="flex items-start gap-6">
					{/* notification card */}
					<div className="md:max-h-[420px] pb-1 h-fit md:w-[420px] overflow-y-scroll border rounded-[4px]">
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
					<div>
						<span className="text-[#595959] font-Lato text-lg1 leading-none font-medium">Hi, Sakib</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
