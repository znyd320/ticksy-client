import { IoMdPricetag } from "react-icons/io";
import {
	MdCategory,
	MdDashboard,
	MdGroups,
	MdManageAccounts,
	MdOutlineKeyboardArrowRight,
	MdStarOutline,
} from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";

import { PiTextAlignLeftFill } from "react-icons/pi";

import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
	const { pathname } = useLocation();
	return (
		<ul className="visible">
			<li>
				<NavLink
					to="/dashboard"
					className={({ isActive }) =>
						`navbar-style md:py-3 group py-5 px-6 duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<MdDashboard className="md:text-[18px] text-[24px]" />
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
						`navbar-style md:py-3 group py-5  px-6 justify-between duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<div className="flex space-x-4 items-center">
						<IoMdPricetag className="md:text-[20px] text-[24px]" />
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
						<div className="py-4 md:py-3 px-6 navbar-style justify-between duration-200 hover:bg-navbar-gradiant font-Lato">
							<span className="md:text-sm 2xl:text-lg3 text-[#545454] font-medium">
								Assigned to Me
							</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-successDisable flex items-center justify-center p-1 font-Lato">
								<span className="md:text-xs-100 font-bold text-[#545454]">
									10
								</span>
							</div>
						</div>
						{/* 2nd Child */}
						<div className="py-4 md:py-3 px-6 navbar-style justify-between hover:bg-navbar-gradiant font-Lato duration-200">
							<span className="md:text-sm 2xl:text-lg3 text-[#545454] font-medium">
								Starred Tickets
							</span>
							<div className="flex items-center space-x-3">
								<MdStarOutline className="md:text-[20px] text-[22px]" />
								<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-secondaryDisable flex items-center justify-center p-1 font-Lato">
									<span className="md:text-xs-100 font-bold text-secondaryDefault">
										14
									</span>
								</div>
							</div>
						</div>
						{/* 3rd Child */}
						<div className="py-4 md:py-3 px-6 navbar-style justify-between hover:bg-navbar-gradiant font-Lato duration-200">
							<span className="md:text-sm 2xl:text-lg3 text-[#545454] font-medium">
								Close Tickets
							</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-mirage25 flex items-center justify-center p-1 font-Lato">
								<span className="md:text-xs-100 font-bold text-mirage300">
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
						`navbar-style md:py-3 group py-5 px-6 duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<MdCategory className="md:text-[20px]" />
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
						`navbar-style md:py-3 group py-5 px-6 justify-between duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<div className="flex space-x-4 items-center">
						<PiTextAlignLeftFill className="md:text-[20px]" />
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
						<div className="py-4 md:py-3 px-6 navbar-style justify-between hover:bg-navbar-gradiant font-Lato duration-200">
							<span className="md:text-sm 2xl:text-lg3 text-[#545454] font-medium">
								Article
							</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-successDisable flex items-center justify-center p-1 font-Lato">
								<span className="md:text-xs-100 font-bold text-[#545454]">
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
						`navbar-style md:py-3 group py-5 px-6 duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<MdGroups className="md:text-[22px]" />

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
						`navbar-style md:py-3 group py-5 px-6 duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<MdManageAccounts className="md:text-[22px]" />

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
						`navbar-style md:py-3 group py-5 px-6 duration-200 ${
							isActive ? "active-navbar" : "text-mirage300"
						}`
					}
				>
					<SiSimpleanalytics className="md:text-[15px]" />

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


