import closeTickets from "../../assets/headerImages/tickets-section/close.svg";
import {HiMiniArrowsUpDown} from "react-icons/hi2"

const CloseTickets = () => {
	return (
		<div className="group p-6 rounded-2xl shadow-tickets-box flex items-center justify-between hover:bg-[#F4F4F4] cursor-pointer">
			<div className="flex flex-col -gap--rounded-md">
				<div className="flex items-center gap-[10px]">
					<h4 className="font-Lato text-[#B30000] font-bold text-2xl md:text-prev leading-none">
						0,000
					</h4>
					<HiMiniArrowsUpDown className="text-[18px] text-[#B30000]"/>
				</div>
				<h4 className="text-txtColor font-Lato text-lg1 md:text-sm leading-none font-medium capitalize">
					Closed Tickets
				</h4>
			</div>
			<div className="md:h-[60px] md:w-[60px] bg-white flex justify-center items-center rounded-full">
				<img src={closeTickets} alt="" className="md:w-8 md:h-8" />
			</div>
		</div>
	);
};

export default CloseTickets;
