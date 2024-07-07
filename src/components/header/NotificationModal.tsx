import { FaRegBell } from "react-icons/fa";
import colorNotification from "../../assets/headerImages/colorNotification.svg";
import messageBox from "../../assets/headerImages/messageBox.svg";
import productImg from "../../assets/headerImages/Image.png";
import activeIcon from "../../assets/headerImages/activeIcon.svg"

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
				<FaRegBell className="text-txtColor" />
				<span className="text-base3 md:text-xs-100 text-txtColor font-Lato font-bold capitalize">
					Notification (6)
				</span>
			</div>
			{/* notification body */}
			<div>
				{/* individual notification */}
				<div className="flex items-start justify-between pl-[14px] pr-7 bg-secondaryDisable pt-3 pb-1 border-b border-[#a4a4a4]/50">
					<div className="flex gap-2 items-start">
						<img src={colorNotification} alt="" />
						<div>
							<p className="line-clamp-3 text-txtColor text-ellipsis font-Roboto text-sm md:text-xs-100 capitalize ">
								You're now eligible to join seller Plus. Sound like a plus?
								learn more about the benefits
							</p>
							<span className="text-txtColor font-Roboto text-xs-200 font-semibold capitalize">
								3d
							</span>
						</div>
					</div>
					<img className="py-4" src={messageBox} alt="" />
				</div>
				{/* review by person */}
				<div className="flex items-start justify-between pl-[14px] pr-7 bg-white pt-3 pb-1 border-b border-[#a4a4a4]/50">
					<div className="flex gap-2 items-start">
						{/* <img src={colorNotification} alt="" /> */}
						<div className="flex items-center justify-center w-[60px] h-[60px] bg-paleSky25 rounded-full relative">
							<span className="text-[#A4A4A4] font-Inter text-[36px] leading-none capitalize">S</span>
							<img className="absolute bottom-0 right-[2px]" src={activeIcon} alt="" />
						</div>
						<div>
							<p className="line-clamp-3 text-txtColor text-ellipsis font-Roboto text-sm md:text-xs-100 capitalize ">
								sakib vai left a 5 star review.
							</p>
							<span className="text-txtColor font-Roboto text-xs-200 font-semibold capitalize">
								3d
							</span>
						</div>
					</div>
					<img className="py-4" src={productImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default NotificationModal;
