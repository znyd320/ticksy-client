import { useState } from "react";
import { useDispatch } from "react-redux";

import { MdKeyboardArrowDown } from "react-icons/md";
import { logOutState } from "../../features/auth/auth";
import Menu from "./Menu";
import ProfileOptions from "./ProfileOptions";
import SettingsOptions from "./SettingsOptions";

import profileIcon from "../../assets/side-navbar-icons/sidebar-bottom-section/profile-section-icons/profile-icon.svg";
import settingIcon from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/settings-icon.svg";

export default function CustomSidebar() {
	const [showProfile, setShowProfile] = useState<boolean>(false);
	const [showSettings, setShowSettings] = useState<boolean>(false);
	const [selectedProfile, setSelectedProfile] = useState<string>("");
	const [selectedSettings, setSelectedSettings] = useState<string>("");

	const dispatch = useDispatch();

	const handleLogOut = () => {
		localStorage.removeItem("rekoul_token");
		localStorage.removeItem("rekoul_user");
		dispatch(logOutState());
	};

	const handleShowProfile = () => {
		setShowSettings(false);
		setShowProfile(!showProfile);
	};

	const handleOpenSettings = () => {
		setShowProfile(false);
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
		<aside className="h-full md:w-[250px] 2xl:w-[316px] fixed top-0 left-0 flex flex-col pt-5 border-r">
			{/* sidebar logo */}
			<header className="-mb--spacing-8xl md:-mb--spacing-4xl">
				<h1 className="md:text-xl 2xl:text-4xl text-prev text-primaryDefault font-bold font-Inter text-center pb-[5px]">
					Logo
				</h1>
			</header>

			{/* sidebar menu */}
			<div className="overflow-scroll flex-grow flex flex-col justify-between">
				<Menu />

				{/* helping section */}
				<section className="bg-[#FBFBFB] text-center py-6">
					<p className="text-[#4F4F4F] font-Lato text-xs-100 font-semibold uppercase mb-1">
						You can contact
					</p>
					<p className="text-[#4F4F4F] font-Inter text-sm font-semibold capitalize mb-2">
						Need Help ?
					</p>
					<button className="-px--rounded-md py-2 -bg--Secondary-CTA rounded text-white text-xs-100 font-semibold uppercase">
						Get support
					</button>
				</section>
			</div>

			{/* footer of sidebar menu---------------------- */}
			<footer className="mt-auto flex-shrink-0 z-10">
				<ProfileOptions
					showProfile={showProfile}
					selectedProfile={selectedProfile}
					handleProfile={handleSelectedProfile}
					logOut={handleLogOut}
				/>
				{/* show profile ------ end*/}

				<SettingsOptions
					showSettings={showSettings}
					selectedSettings={selectedSettings}
					handleSettings={handleSelectedSettings}
				/>

				{/* Show Settings ------------ end */}

				{/* profile & settings */}
				<div className="flex p-6 gap-3 justify-center">
					<div
						onClick={handleShowProfile}
						className="bg-secondaryDisable py-3 px-6 flex items-center rounded justify-center gap-2  cursor-pointer duration-75"
					>
						{/* Profile Picture */}
						<img src={profileIcon} alt="" width={22} />
						{/* Arrow */}

						<MdKeyboardArrowDown
							className={`text-[#545454] duration-200 ${
								showProfile ? "rotate-180" : ""
							}`}
						/>
					</div>
					<div
						onClick={handleOpenSettings}
						className="bg-secondaryDisable py-3 px-6 flex items-center rounded justify-center gap-2 cursor-pointer duration-75"
					>
						{/* Settings icon */}
						<img src={settingIcon} alt="" width={22} />
						{/* arrown icon */}
						<MdKeyboardArrowDown
							className={`text-[#545454] duration-200 ${
								showSettings ? "rotate-180" : ""
							}`}
						/>
					</div>
				</div>
			</footer>
		</aside>
	);
}
