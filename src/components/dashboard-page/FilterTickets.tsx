import downArrow from "../../assets/table-images/filtertickets-icon/down-arrow.svg";
import resetIcon from "../../assets/table-images/filtertickets-icon/reset.svg";
import searchIcon from "../../assets/table-images/filtertickets-icon/search.svg";

const FilterTickets = () => {
	return (
		<div className="flex flex-col gap-6">
			{/* filters */}
			<div className="flex justify-between items-center bg-menuDropdown p-4">
				<div className="flex items-center gap-2">
					<span className="uppercase font-Lato text-sm leading-normal font-semibold text-txtHeading md:text-xs-100 md:leading-normal">
						filters
					</span>
					<span className="-bg--Secondary-CTA h-5 w-5 flex items-center justify-center rounded-full text-secondaryDisable text-xs-100 leading-normal font-Inter font-semibold">
						7
					</span>
				</div>
				<img src={resetIcon} alt="" />
			</div>
			{/* by category */}
			<div className="flex justify-between items-center p-4 rounded-[4px] border border-paleSky25 bottom-shadow">
				<span className="text-[#4F4F4F] font-Lato text-base2 capitalize md:text-sm md:leading-6">
					Filter by category
				</span>
				<img src={searchIcon} alt="" />
			</div>
			{/* by product */}
			<div className="flex justify-between items-center p-4 rounded-[4px] border border-paleSky25 bottom-shadow cursor-pointer">
				<span className="text-[#4F4F4F] font-Lato text-base2 capitalize md:text-sm md:leading-6">
					Filter by product
				</span>
				<img src={downArrow} alt="" />
			</div>
			{/* by agent */}
			<div className="flex justify-between items-center p-4 rounded-[4px] border border-paleSky25 bottom-shadow cursor-pointer">
				<span className="text-[#4F4F4F] font-Lato text-base2 capitalize md:text-sm md:leading-6">
					Filter by agent
				</span>
				<img src={downArrow} alt="" />
			</div>
			{/* ticket type */}
			<div className="flex justify-between items-center p-4 rounded-[4px] border border-paleSky25 bottom-shadow cursor-pointer">
				<span className="text-[#4F4F4F] font-Lato text-base2 capitalize md:text-sm md:leading-6">
					Ticket Type
				</span>
				<img src={downArrow} alt="" />
			</div>
		</div>
	);
};

export default FilterTickets;
