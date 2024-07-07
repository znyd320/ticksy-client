import { HiMiniArrowsUpDown } from "react-icons/hi2";
import allTickets from "../../assets/headerImages/tickets-section/total.svg";

const AllTickets = () => {
	return (
		<div className="group p-6 rounded-2xl shadow-tickets-box flex items-center justify-between hover:bg-total-tickets-gradiant cursor-pointer hover:shadow-none">
			<div className="flex flex-col -gap--rounded-md">
				<div className="flex items-center gap-[10px]">
					<h4 className="font-Lato text-successDefault font-bold group-hover:text-white text-2xl md:text-prev leading-none">
						0,000
					</h4>
					<HiMiniArrowsUpDown className="text-[18px] group-hover:text-white text-[#12B76A]" />
				</div>
				<h4 className="text-txtColor font-Lato text-lg1 md:text-sm leading-none font-medium capitalize group-hover:text-white">
					All Tickets
				</h4>
			</div>
			<div className="md:h-[60px] md:w-[60px] bg-white flex justify-center items-center rounded-full">
				<img src={allTickets} alt="" className="md:w-8 md:h-8" />
			</div>
		</div>
	);
};

export default AllTickets;
