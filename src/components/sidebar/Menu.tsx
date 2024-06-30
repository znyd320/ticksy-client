import { NavLink, useLocation } from "react-router-dom";
import agentColor from "../../assets/sidebarIcons/agentColor.svg";
import agentDefault from "../../assets/sidebarIcons/agentDefault.svg";
import analyticsColor from "../../assets/sidebarIcons/analyticsColor.svg";
import analyticsDefault from "../../assets/sidebarIcons/analyticsDefault.svg";
import categoriesDefault from "../../assets/sidebarIcons/categoriesDefault.svg";
import catrgoriesColor from "../../assets/sidebarIcons/categoryColor.svg";
import customersColor from "../../assets/sidebarIcons/customersColor.svg";
import customersDefault from "../../assets/sidebarIcons/customersDefault.svg";
import groupColor from "../../assets/sidebarIcons/groupColor.svg";
import groupDefault from "../../assets/sidebarIcons/groupDefault.svg";
import knowledgeColor from "../../assets/sidebarIcons/knowledgeColor.svg";
import knowledgeDefault from "../../assets/sidebarIcons/knowledgeDefault.svg";
import rightArrow from "../../assets/sidebarIcons/rightArrow.svg";
import star from "../../assets/sidebarIcons/star.svg";
import ticketsColor from "../../assets/sidebarIcons/ticketColor.svg";
import ticketsDefault from "../../assets/sidebarIcons/ticketDefault.svg";
import upArrowColor from "../../assets/sidebarIcons/upArrowColor.svg";

const Menu = () => {
	const { pathname } = useLocation();
	return (
		<ul className="px-1">
			<li>
				<NavLink
					to="/dashboard"
					className={`flex items-center py-5 px-6 space-x-4 md:text-base3 text-sm font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/dashboard" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<img
						src={pathname === "/dashboard" ? groupColor : groupDefault}
						alt="groupIcon"
					/>
					<span>Dashboard</span>
				</NavLink>
			</li>
			{/* Dashboard  ----------- End*/}
			<li>
				<NavLink
					to="tickets"
					className={`flex justify-between items-center py-5 px-6 md:text-base3 text-sm font-Lato font-medium hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/tickets" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<div className="flex space-x-4">
						<img
							src={pathname === "/tickets" ? ticketsColor : ticketsDefault}
							alt="ticketsdIcon"
						/>
						<span>Tickets</span>
					</div>
					<img
						src={pathname === "/tickets" ? upArrowColor : rightArrow}
						alt="rightArrow"
					/>
				</NavLink>
				{pathname === "/tickets" && (
					<ul className="flex flex-col">
						<li className="py-4 px-6 md:text-base3 text-sm text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer">
							<span>Assigned to Me</span>
							<div className="w-7 h-7 rounded-full bg-successDisable flex items-center justify-center text-sm font-bold p-1 text-[#545454]">
								10
							</div>
						</li>
						<li className="py-4 px-6 md:text-base3 text-sm text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer">
							<span>Starred Tickets</span>
							<div className="flex items-center space-x-3">
								<img src={star} alt="starred Tickets" />
								<div className="w-7 h-7 rounded-full bg-secondaryDisable flex items-center justify-center text-sm font-bold p-1 text-secondaryDefault">
									14
								</div>
							</div>
						</li>
						<li className="py-4 px-6 md:text-base3 text-lg3 text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer">
							<span>Close Tickets</span>
							<div className="w-7 h-7 rounded-full bg-mirage25 flex items-center justify-center text-sm font-bold p-1 text-mirage300">
								12
							</div>
						</li>
					</ul>
				)}
			</li>
			{/* Tickets ----------- End*/}
			<li>
				<NavLink
					to="/categories"
					className={`flex items-center py-5 px-6 space-x-4 md:text-base3 text-sm font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/categories" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<img
						src={
							pathname === "/categories" ? catrgoriesColor : categoriesDefault
						}
						alt="categoriesIcon"
					/>
					<span>Categories</span>
				</NavLink>
			</li>
			{/* Categories ----------- End*/}
			<li>
				<NavLink
					to="knowledge"
					className={`flex justify-between items-center py-5 px-6 md:text-base3 text-sm font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/knowledge" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<div className="flex space-x-4">
						<img
							src={
								pathname === "/knowledge" ? knowledgeColor : knowledgeDefault
							}
							alt="knowledgeIcon"
						/>
						<span>Knowledge</span>
					</div>
					<img
						src={pathname === "/knowledge" ? upArrowColor : rightArrow}
						alt="rightarrow"
					/>
				</NavLink>
				{pathname === "/knowledge" && (
					<ul className="flex flex-col">
						<li className="py-4 px-6 md:text-base3 text-sm text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer">
							<span>Article</span>
							<div className="w-7 h-7 rounded-full bg-successDisable flex items-center justify-center text-sm font-bold p-1 text-[#545454]">
								10
							</div>
						</li>
					</ul>
				)}
			</li>
			{/* Knowledge  ----------- end*/}
			<li>
				<NavLink
					to="/customers"
					className={`flex items-center space-x-4 py-5 px-6 md:text-base3 text-sm font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/customers" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<img
						src={pathname === "/customers" ? customersColor : customersDefault}
						alt="customersIcon"
					/>
					<span>Customer&apos;s</span>
				</NavLink>
			</li>
			{/* Customers  ----------- end*/}
			<li>
				<NavLink
					to="/agents"
					className={`flex items-center space-x-4 py-5 px-6 md:text-base3 text-sm font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/agents" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<img
						src={pathname === "/agents" ? agentColor : agentDefault}
						alt="agentsIcon"
					/>
					<span>Manage Agent</span>
				</NavLink>
			</li>
			{/* Agents  ----------- end*/}
			<li>
				<NavLink
					to="/analytics"
					className={`flex items-center space-x-4 py-5 px-6 md:text-base3 text-sm font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] :hovertext-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/analytics" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<img
						src={pathname === "/analytics" ? analyticsColor : analyticsDefault}
						alt="analyticsIcon"
					/>
					<span>Analytics/Report&apos;s</span>
				</NavLink>
			</li>
			{/* Analytics  ----------- end*/}
		</ul>
	);
};

export default Menu;
