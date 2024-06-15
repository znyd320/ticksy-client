import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logOutState } from "../../features/auth/auth";

import agentDefault from "../../assets/sidebarIcons/agentDefault.svg";
import analyticsDefault from "../../assets/sidebarIcons/analyticsDefault.svg";
import downArrow from "../../assets/sidebarIcons/arrowDown.svg";
import categoriesDefault from "../../assets/sidebarIcons/categoriesDefault.svg";
import customersDefault from "../../assets/sidebarIcons/customersDefault.svg";
import groupColor from "../../assets/sidebarIcons/groupColor.png";
import knowledgeDefault from "../../assets/sidebarIcons/knowledgeDefault.svg";
import profile from "../../assets/sidebarIcons/profile.svg";
import rightArrow from "../../assets/sidebarIcons/rightArrow.svg";
import settings from "../../assets/sidebarIcons/settings.svg";
import ticketsDefault from "../../assets/sidebarIcons/ticketDefault.png";

export default function CustomSidebar() {
  const dispatch = useDispatch();

	const handleLogOut = () => {
		localStorage.removeItem("rekoul_token");
		localStorage.removeItem("rekoul_user");
		dispatch(logOutState());
	};
	return (
		<aside className="h-screen w-[320px]">
			<nav className="h-full flex flex-col border-r">
				<div className="p-4">
					<h1 className="overflow-hidden transition-all text-4xl text-primaryDefault font-bold font-Inter text-center">
						Logo
					</h1>
				</div>

				<ul className="flex-1 px-1">
					<Link
						to="/dashboard"
						className="flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500] bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px]"
					>
						<img src={groupColor} alt="groupIcon" />
						<span>Dashboard</span>
					</Link>
					<Link
						to="/tickets"
						className="flex justify-between items-center py-5 px-6 text-lg1 font-Lato font-[500]"
					>
						<div className="flex space-x-4">
							<img src={ticketsDefault} alt="ticketsdIcon" />
							<span>Tickets</span>
						</div>
						<img src={rightArrow} alt="rightArrow" />
					</Link>
					<Link
						to="/categories"
						className="flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500]"
					>
						<img src={categoriesDefault} alt="categoriesIcon" />
						<span>Categories</span>
					</Link>
					<Link
						to="/knowledge"
						className="flex justify-between items-center py-5 px-6 text-lg1 font-Lato font-[500]"
					>
						<div className="flex space-x-4">
							<img src={knowledgeDefault} alt="knowledgeIcon" />
							<span>Knowledge</span>
						</div>
						<img src={rightArrow} alt="rightarrow" />
					</Link>
					<Link
						to="/customers"
						className="flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500]"
					>
						<img src={customersDefault} alt="customersIcon" />
						<span>Customer&apos;s</span>
					</Link>
					<Link
						to="/agents"
						className="flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500]"
					>
						<img src={agentDefault} alt="agentsIcon" />
						<span>Manage Agent</span>
					</Link>
					<Link
						to="/analytics"
						className="flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500]"
					>
						<img src={analyticsDefault} alt="analyticsIcon" />
						<span>Analytics/Report&apos;s</span>
					</Link>
				</ul>

				<div className="flex p-6 space-x-3">
					<div className="bg-secondaryDisable py-3 px-6 flex items-center rounded space-x-4 cursor-pointer">
						<img src={profile} alt="profile" />
						<img src={downArrow} alt="downArrow" />
					</div>
					<div className="bg-secondaryDisable py-3 px-6 flex items-center rounded space-x-4 cursor-pointer">
						<img src={settings} alt="settings" />
						<img src={downArrow} alt="downArrow" />
					</div>
				</div>
			</nav>

      <button
					onClick={handleLogOut}
					className="bg-[#1ea474] text-[#fff] py-2 px-5 rounded-sm"
				>
					<p>Log Out</p> <FaSignOutAlt />
				</button>
		</aside>
	);
}
