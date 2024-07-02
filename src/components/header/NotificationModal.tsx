import colorNotification from "../../assets/headerImages/colorNotification.svg";
import messageBox from "../../assets/headerImages/messageBox.svg";
import notificationImg from "../../assets/headerImages/notify.svg";

interface NotificationModalProps {
	open: boolean;
	menuRef: React.MutableRefObject<HTMLDivElement>;
}

const NotificationModal = ({ open, menuRef }: NotificationModalProps) => {
	return (
		<div
			ref={menuRef}
			className={`${
				open ? "block" : "hidden"
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
							You're now eligible to join seller Plus. Sound like a plus? learn
							more about the benefits
						</p>
						<span className="text-txtColor font-Roboto text-xs-200 font-semibold capitalize">
							3d
						</span>
					</div>
					<img className="py-4" src={messageBox} alt="" />
				</div>
			</div>
		</div>
	);
};

export default NotificationModal;
