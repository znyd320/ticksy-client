import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logOutState } from "../../features/auth/auth";

import editProfileWhite from "../../assets/profileIcons/editColor.svg";
import editProfile from "../../assets/profileIcons/editDefault.svg";
import repliesColor from "../../assets/profileIcons/repliesColor.svg";
import replies from "../../assets/profileIcons/repliesDefault.svg";
import signout from "../../assets/profileIcons/signoutDefault.svg";
import upArrow from "../../assets/profileIcons/upArrow.svg";
import accountDef from "../../assets/settingsIcon/accountDefault.svg";
import accountWhite from "../../assets/settingsIcon/accountWhite.svg";
import agentsDef from "../../assets/settingsIcon/agentsDefault.svg";
import agentsWhite from "../../assets/settingsIcon/agentsWhite.svg";
import articlesDef from "../../assets/settingsIcon/articlesDefault.svg";
import articlesWhite from "../../assets/settingsIcon/articlesWhite.svg";
import categoriesDef from "../../assets/settingsIcon/categoriesDef.svg";
import categoriesWhite from "../../assets/settingsIcon/categoriesWhite.svg";
import systemDef from "../../assets/settingsIcon/systemDefault.svg";
import systemWhite from "../../assets/settingsIcon/systemWhite.svg";
import agentColor from "../../assets/sidebarIcons/agentColor.svg";
import agentDefault from "../../assets/sidebarIcons/agentDefault.svg";
import analyticsColor from "../../assets/sidebarIcons/analyticsColor.svg";
import analyticsDefault from "../../assets/sidebarIcons/analyticsDefault.svg";
import downArrow from "../../assets/sidebarIcons/arrowDown.svg";
import categoriesDefault from "../../assets/sidebarIcons/categoriesDefault.svg";
import catrgoriesColor from "../../assets/sidebarIcons/categoryColor.svg";
import customersColor from "../../assets/sidebarIcons/customersColor.svg";
import customersDefault from "../../assets/sidebarIcons/customersDefault.svg";
import groupColor from "../../assets/sidebarIcons/groupColor.png";
import groupDefault from "../../assets/sidebarIcons/groupDefault.png";
import knowledgeColor from "../../assets/sidebarIcons/knowledgeColor.svg";
import knowledgeDefault from "../../assets/sidebarIcons/knowledgeDefault.svg";
import profile from "../../assets/sidebarIcons/profile.svg";
import rightArrow from "../../assets/sidebarIcons/rightArrow.svg";
import settings from "../../assets/sidebarIcons/settings.svg";
import star from "../../assets/sidebarIcons/star.svg";
import ticketsColor from "../../assets/sidebarIcons/ticketColor.svg";
import ticketsDefault from "../../assets/sidebarIcons/ticketDefault.png";
import upArrowColor from "../../assets/sidebarIcons/upArrowColor.svg";

export default function CustomSidebar() {
	const [ticketsExpand, setTicketsExpand] = useState<boolean>(false);
	const [knowledgeExpand, setKnowledgeExpand] = useState<boolean>(false);
	const [showProfile, setShowProfile] = useState<boolean>(false);
	const [showSettings, setShowSettings] = useState<boolean>(false);
	const [selectedProfile, setSelectedProfile] = useState<string>("");
	const [selectedSettings, setSelectedSettings] = useState<string>("");

	const { pathname } = useLocation();

	const dispatch = useDispatch();

	const handleLogOut = () => {
		localStorage.removeItem("rekoul_token");
		localStorage.removeItem("rekoul_user");
		dispatch(logOutState());
	};

	const handleExpandTickets = () => {
		setTicketsExpand(!ticketsExpand);
	};

	const handleKnowledgeExpand = () => {
		setKnowledgeExpand(!knowledgeExpand);
	};

	const handleShowProfile = () => {
		setShowSettings(false)
		setShowProfile(!showProfile);
	};

	const handleOpenSettings = () => {
		setShowProfile(false)
		setShowSettings(!showSettings);
	};

	const handleSelectedProfile = (selectedProfile: string) => {
		switch (selectedProfile) {
			case "editProfile":
				setSelectedProfile("editProfile");
				return;
			case "savedReplies":
				setSelectedProfile("savedReplies");
				return;
			default:
				return selectedProfile;
		}
	};

	const handleSelectedSettings = (selectedSettings: string) => {
		switch (selectedSettings) {
			case "categories":
				setSelectedSettings("categories");
				return;
			case "account":
				setSelectedSettings("account");
				return;
			case "agents":
				setSelectedSettings("agents");
				return;
			case "system":
				setSelectedSettings("system");
				return;
			case "articles":
				setSelectedSettings("articles");
				return;
			default:
				return selectedSettings;
		}
	};

	return (
		<aside className="h-screen w-[360px] border-r">
			<nav className="h-full flex flex-col">
				{/* logo */}
				<div className="p-4">
					<h1 className="overflow-hidden transition-all text-4xl text-primaryDefault font-bold font-Inter text-center">
						Logo
					</h1>
				</div>

				{/* side menu */}
				<ul className="flex-1 px-1">
					<NavLink
						to="/dashboard"
						className={`flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500] ${
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

					{/* Tickets ----------- Start*/}
					<NavLink
						to="tickets"
						className={`flex justify-between items-center py-5 px-6 text-lg1 font-Lato font-medium ${
							pathname === "/tickets" &&
							"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
						}`}
						onClick={handleExpandTickets}
					>
						<div className="flex space-x-4">
							<img
								src={pathname === "/tickets" ? ticketsColor : ticketsDefault}
								alt="ticketsdIcon"
							/>
							<span>Tickets</span>
						</div>
						<img
							src={
								pathname === "/tickets" && ticketsExpand
									? upArrowColor
									: rightArrow
							}
							alt="rightArrow"
						/>
					</NavLink>
					{pathname === "/tickets" && ticketsExpand && (
						<ul className="flex flex-col">
							<NavLink
								className="py-4 px-6 text-lg3 text-[#545454] font-medium flex justify-between"
								to="assignme"
							>
								<span>Assigned to Me</span>
								<div className="w-7 h-7 rounded-full bg-successDisable flex items-center justify-center text-sm font-bold p-1 text-[#545454]">
									10
								</div>
							</NavLink>

							<NavLink
								className="py-4 px-6 text-lg3 text-[#545454] font-medium flex justify-between"
								to="starredTickets"
							>
								<span>Starred Tickets</span>
								<div className="flex items-center space-x-3">
									<img src={star} alt="starred Tickets" />
									<div className="w-7 h-7 rounded-full bg-secondaryDisable flex items-center justify-center text-sm font-bold p-1 text-secondaryDefault">
										14
									</div>
								</div>
							</NavLink>
							<NavLink
								className="py-4 px-6 text-lg3 text-[#545454] font-medium flex justify-between"
								to="closeTickets"
							>
								<span>Close Tickets</span>
								<div className="w-7 h-7 rounded-full bg-mirage25 flex items-center justify-center text-sm font-bold p-1 text-mirage300">
									12
								</div>
							</NavLink>
						</ul>
					)}
					{/* Tickets ----------- End*/}

					<NavLink
						to="/categories"
						className={`flex py-5 px-6 space-x-4 text-lg1 font-Lato font-[500] ${
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

					{/* knowledge ----------- Start*/}
					<NavLink
						to="knowledge"
						className={`flex justify-between items-center py-5 px-6 text-lg1 font-Lato font-[500] ${
							pathname === "/knowledge" &&
							"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
						}`}
						onClick={handleKnowledgeExpand}
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
							src={
								pathname === "/knowledge" && knowledgeExpand
									? upArrowColor
									: rightArrow
							}
							alt="rightarrow"
						/>
					</NavLink>
					{pathname === "/knowledge" && knowledgeExpand && (
						<ul className="flex flex-col">
							<NavLink
								className="py-4 px-6 text-lg3 text-[#545454] font-medium flex justify-between"
								to="assignme"
							>
								<span>Article</span>
								<div className="w-7 h-7 rounded-full bg-successDisable flex items-center justify-center text-sm font-bold p-1 text-[#545454]">
									10
								</div>
							</NavLink>
						</ul>
					)}
					{/* knowledge  ----------- end*/}
					<NavLink
						to="/customers"
						className={`flex space-x-4 items-center py-5 px-6 text-lg1 font-Lato font-[500] ${
							pathname === "/customers" &&
							"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
						}`}
					>
						<img
							src={
								pathname === "/customers" ? customersColor : customersDefault
							}
							alt="customersIcon"
						/>
						<span>Customer&apos;s</span>
					</NavLink>

					<NavLink
						to="/agents"
						className={`flex space-x-4 items-center py-5 px-6 text-lg1 font-Lato font-[500] ${
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

					<NavLink
						to="/analytics"
						className={`flex space-x-4 items-center py-5 px-6 text-lg1 font-Lato font-[500] ${
							pathname === "/analytics" &&
							"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
						}`}
					>
						<img
							src={
								pathname === "/analytics" ? analyticsColor : analyticsDefault
							}
							alt="analyticsIcon"
						/>
						<span>Analytics/Report&apos;s</span>
					</NavLink>
				</ul>

				{/* show profile ------ start*/}
				{showProfile && (
					<div className="mx-6 py-4 bg-secondaryDisable space-y-1 rounded-t-md">
						{/* edit Profile ---------------*/}
						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedProfile === "editProfile"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedProfile("editProfile")}
						>
							<img
								src={
									selectedProfile === "editProfile"
										? editProfileWhite
										: editProfile
								}
								alt="editProfile"
							/>
							<span className="text-lg3 font-Lato font-medium">
								Edit Profile
							</span>
						</div>
						{/* saved replies ---------------*/}
						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedProfile === "savedReplies"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedProfile("savedReplies")}
						>
							<img
								src={
									selectedProfile === "savedReplies" ? repliesColor : replies
								}
								alt="saved Replies"
							/>
							<span className="text-lg3 font-Lato font-medium">
								Saved Replies
							</span>
						</div>
						{/* signout ---------------*/}
						<div
							onClick={handleLogOut}
							className="flex items-center py-3 px-7 space-x-3 cursor-pointer text-txtColor"
						>
							<img src={signout} alt="sign out" />
							<span className="text-lg3 font-Lato font-medium">Sign Out</span>
						</div>
					</div>
				)}
				{/* show profile ------ end*/}

				{/* Show Settings ------------ start */}
				{showSettings && (
					<div className="mx-6 py-4 bg-secondaryDisable space-y-1 rounded-t-md">
						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedSettings === "categories"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedSettings("categories")}
						>
							<img
								src={
									selectedSettings === "categories"
										? categoriesWhite
										: categoriesDef
								}
								alt="manage categories"
							/>
							<span className="text-lg3 font-Lato font-medium">
								Manage Categories
							</span>
						</div>

						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedSettings === "articles"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedSettings("articles")}
						>
							<img
								src={
									selectedSettings === "articles" ? articlesWhite : articlesDef
								}
								alt="Manage Articles"
							/>
							<span className="text-lg3 font-Lato font-medium">
								Manage Articles
							</span>
						</div>

						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedSettings === "agents"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedSettings("agents")}
						>
							<img
								src={selectedSettings === "agents" ? agentsWhite : agentsDef}
								alt="Support Agents"
							/>
							<span className="text-lg3 font-Lato font-medium">
								Support Agents
							</span>
						</div>

						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedSettings === "system"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedSettings("system")}
						>
							<img
								src={selectedSettings === "system" ? systemWhite : systemDef}
								alt="System Settings"
							/>
							<span className="text-lg3 font-Lato font-medium">
								System Settings
							</span>
						</div>

						<div
							className={`flex items-center py-3 px-7 space-x-3 cursor-pointer ${
								selectedSettings === "account"
									? "bg-secondaryDefault text-white"
									: "text-txtColor"
							}`}
							onClick={() => handleSelectedSettings("account")}
						>
							<img
								src={selectedSettings === "account" ? accountWhite : accountDef}
								alt="Account & Billing"
							/>
							<span className="text-lg3 font-Lato font-medium">
								Account & Billing
							</span>
						</div>
					</div>
				)}
				{/* Show Settings ------------ end */}

				{/* profile & settings */}
				<div className="flex p-6 space-x-3 justify-between">
					<div
						onClick={handleShowProfile}
						className="bg-secondaryDisable py-3 px-6 flex items-center rounded space-x-4 cursor-pointer"
					>
						<img src={profile} alt="profile" />
						<img src={showProfile ? upArrow : downArrow} alt="downArrow" />
					</div>
					<div
						onClick={handleOpenSettings}
						className="bg-secondaryDisable py-3 px-6 flex items-center rounded space-x-4 cursor-pointer"
					>
						<img src={settings} alt="settings" />
						<img src={showSettings ? upArrow : downArrow} alt="downArrow" />
					</div>
				</div>
			</nav>
		</aside>
	);
}
