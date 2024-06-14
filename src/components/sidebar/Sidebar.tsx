// import { Sidebar } from "flowbite-react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutState } from "../../features/auth/auth";

import agentDefault from "../../assets/sidebarIcons/agentDefault.svg";
import analyticsDefault from "../../assets/sidebarIcons/analyticsDefault.svg";
import categoriesDefault from "../../assets/sidebarIcons/categoriesDefault.svg";
import customersDefault from "../../assets/sidebarIcons/customersDefault.svg";
import groupColor from "../../assets/sidebarIcons/groupColor.png";
import knowledgeDefault from "../../assets/sidebarIcons/knowledgeDefault.svg";
import rightArrow from "../../assets/sidebarIcons/rightArrow.svg";
import ticketsDefault from "../../assets/sidebarIcons/ticketDefault.png";

export default function CustomSidebar() {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		localStorage.removeItem("rekoul_token");
		localStorage.removeItem("rekoul_user");
		dispatch(logOutState());
	};

	return (
		<div className="w-[356px] min-h-screen border-r flex flex-col justify-between px-1">
			<div className="-space-y--spacing-8xl">
				{/* logo */}
				<div>
					<h1 className="text-4xl text-primaryDefault font-bold font-Inter text-center py-3">
						Logo
					</h1>
				</div>
				{/* menu */}
				<div className="flex flex-col">
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
				</div>
			</div>

			{/* settings & profile */}
			<div>
				<button
					onClick={handleLogOut}
					className="bg-[#1ea474] text-[#fff] py-2 px-5 rounded-sm"
				>
					<p>Log Out</p> <FaSignOutAlt />
				</button>
			</div>
		</div>
	);
}
