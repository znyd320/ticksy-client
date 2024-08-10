import { MdOutlineKeyboardArrowRight, MdStarOutline } from "react-icons/md";

import { NavLink, useLocation } from "react-router-dom";

import agentActive from "../../assets/side-navbar-icons/agent-active.svg";
import agentDefault from "../../assets/side-navbar-icons/agent-default.svg";
import analyticsActive from "../../assets/side-navbar-icons/analytics-active.svg";
import analyticsDefault from "../../assets/side-navbar-icons/analytics-default.svg";
import categoriesActive from "../../assets/side-navbar-icons/categories-active.svg";
import categoriesDefault from "../../assets/side-navbar-icons/categories-default.svg";
import customersActive from "../../assets/side-navbar-icons/customers-active.svg";
import customersDefault from "../../assets/side-navbar-icons/customers-default.svg";
import dashboardActive from "../../assets/side-navbar-icons/dashboard-active.svg";
import dashboardDefault from "../../assets/side-navbar-icons/dashboard-default.svg";
import knowledgeActive from "../../assets/side-navbar-icons/knowledge-active.svg";
import knowledgeDefault from "../../assets/side-navbar-icons/knowledge-default.svg";
import ticketActive from "../../assets/side-navbar-icons/ticket-active.svg";
import ticketDefault from "../../assets/side-navbar-icons/ticket-default.svg";

const Menu = () => {
	const { pathname } = useLocation();

	return (
		<ul>
			<li>
				<NavLink
					to="/dashboard"
					className={({ isActive }) =>
						`navbar-style group py-5 px-6 duration-200 border-l-8 border-transparent ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<img
						src={pathname === "/dashboard" ? dashboardActive : dashboardDefault}
						alt=""
						className="md:w-[18px] w-6"
					/>
					<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
						Dashboard
					</span>
				</NavLink>
			</li>
			{/* Dashboard  ----------- End*/}
			<li>
				<NavLink
					to="tickets"
					className={({ isActive }) =>
						`navbar-style group py-5  px-6 justify-between duration-200 border-l-8 border-transparent ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<div className="flex space-x-4 items-center">
						<img
							src={pathname === "/tickets" ? ticketActive : ticketDefault}
							alt=""
							className="md:w-[20px] w-6"
						/>
						<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
							Tickets
						</span>
					</div>

					<MdOutlineKeyboardArrowRight
						className={`text-[20px] transition-transform duration-300 ${
							pathname === "/tickets" ? "-rotate-90" : ""
						}`}
					/>
				</NavLink>
				{pathname === "/tickets" && (
					<div className="flex flex-col">
						{/* 1st Child */}
						<div className="group py-4 mx-6 px-3 navbar-style justify-between duration-200 font-Lato hover:bg-navbar-gradiant border-l-4 border-transparent hover:-border--Secondary-CTA">
							<span className="md:text-sm 2xl:text-lg3 text-[#545454] font-medium group-hover:-text--Secondary-CTA">
								Assigned to Me
							</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-successDisable group-hover:bg-successDefault flex items-center justify-center p-1 font-Lato ">
								<span className="group-hover:text-white md:text-xs-100 font-bold text-[#545454]">
									10
								</span>
							</div>
						</div>
						{/* 2nd Child */}
						<div className="group py-4 mx-6 px-3 navbar-style justify-between font-Lato duration-200 hover:bg-navbar-gradiant border-l-4 border-transparent hover:-border--Secondary-CTA">
							<span className="group-hover:-text--Secondary-CTA md:text-sm 2xl:text-lg3 text-[#545454] font-medium">
								Starred Tickets
							</span>
							<div className="flex items-center space-x-3">
								<MdStarOutline className="md:text-[20px] text-[22px]" />
								<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-secondaryDisable flex items-center justify-center p-1 font-Lato group-hover:-bg--Secondary-CTA">
									<span className="md:text-xs-100 font-bold text-secondaryDefault group-hover:text-white">
										14
									</span>
								</div>
							</div>
						</div>
						{/* 3rd Child */}
						<div className="group py-4 mx-6 px-3 navbar-style justify-between font-Lato duration-200 hover:bg-navbar-gradiant border-l-4 border-transparent hover:-border--Secondary-CTA">
							<span className="md:text-sm 2xl:text-lg3 text-[#545454] font-medium group-hover:-text--Secondary-CTA">
								Close Tickets
							</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-mirage25 flex items-center justify-center p-1 font-Lato group-hover:bg-primaryDefault">
								<span className="group-hover:text-white md:text-xs-100 font-bold text-mirage300">
									12
								</span>
							</div>
						</div>
					</div>
				)}
			</li>
			{/* Tickets ----------- End*/}
			<li>
				<NavLink
					to="/categories"
					className={({ isActive }) =>
						`navbar-style group py-5 px-6 duration-200 border-l-8 border-transparent  ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					{/* <MdCategory className="md:text-[20px]" /> */}
					<img
						src={
							pathname === "/categories" ? categoriesActive : categoriesDefault
						}
						alt=""
						className="md:w-[18px] w-6"
					/>
					<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
						Categories
					</span>
				</NavLink>
			</li>
			{/* Categories ----------- End*/}
			<li>
				<NavLink
					to="/knowledge"
					className={({ isActive }) =>
						`navbar-style group py-5 px-6 justify-between duration-200 border-l-8 border-transparent ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<div className="flex space-x-4 items-center">
						{/* <PiTextAlignLeftFill className="md:text-[20px]" /> */}
						<img
							src={
								pathname === "/knowledge" ? knowledgeActive : knowledgeDefault
							}
							alt=""
							className="md:w-[18px] w-6"
						/>
						<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
							Knowledge
						</span>
					</div>
					<MdOutlineKeyboardArrowRight
						className={`text-[20px] transition-transform duration-300 ${
							pathname === "/knowledge" ? "-rotate-90" : ""
						}`}
					/>
				</NavLink>
				{pathname === "/knowledge" && (
					<div className="flex flex-col">
						<div className="group py-4 mx-6 px-3 navbar-style justify-between duration-200 font-Lato hover:bg-navbar-gradiant border-l-4 border-transparent hover:-border--Secondary-CTA">
							<span className="group-hover:-text--Secondary-CTA md:text-sm 2xl:text-lg3 text-[#545454] font-medium">
								Article
							</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-successDisable flex items-center justify-center p-1 font-Lato group-hover:bg-successDefault">
								<span className="group-hover:text-white md:text-xs-100 font-bold text-[#545454]">
									10
								</span>
							</div>
						</div>
					</div>
				)}
			</li>
			{/* Knowledge  ----------- end*/}
			<li>
				<NavLink
					to="/customers"
					className={({ isActive }) =>
						`navbar-style group py-5 px-6 duration-200 border-l-8 border-transparent ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<img
						src={pathname === "/customers" ? customersActive : customersDefault}
						alt=""
						className="md:w-[22px] w-6"
					/>

					<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
						Customer&apos;s
					</span>
				</NavLink>
			</li>
			{/* Customers  ----------- end*/}
			<li>
				<NavLink
					to="/agents"
					className={({ isActive }) =>
						`navbar-style group py-5 px-6 duration-200  border-l-8 border-transparent ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					{/* <MdManageAccounts className="md:text-[22px]" /> */}
					<img
						src={pathname === "/agents" ? agentActive : agentDefault}
						alt=""
						className="md:w-[22px] w-6"
					/>

					<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
						Manage Agent
					</span>
				</NavLink>
			</li>
			{/* Agents  ----------- end*/}
			<li>
				<NavLink
					to="/analytics"
					className={({ isActive }) =>
						`navbar-style group py-5 px-6 duration-200 border-l-8 border-transparent ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					{/* <SiSimpleanalytics className="md:text-[15px]" /> */}
					<img
						src={pathname === "/analytics" ? analyticsActive : analyticsDefault}
						alt=""
						className="md:w-[18px] w-6"
					/>

					<span className="md:text-sm 2xl:text-lg3 font-Lato font-medium">
						Analytics/Report&apos;s
					</span>
				</NavLink>
			</li>
			{/* Analytics  ----------- end*/}
		</ul>
	);
};

export default Menu;
