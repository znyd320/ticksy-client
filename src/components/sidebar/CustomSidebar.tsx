import { useState } from "react";
import { useDispatch } from "react-redux";

import { logOutState } from "../../features/auth/auth";
import upArrow from "../../assets/profileIcons/upArrow.svg";
import downArrow from "../../assets/sidebarIcons/arrowDown.svg";
import profile from "../../assets/sidebarIcons/profile.svg";
import settings from "../../assets/sidebarIcons/settings.svg";
import Menu from "./Menu";
import ProfileOptions from "./ProfileOptions";
import SettingsOptions from "./SettingsOptions";

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
		<aside className="min-h-screen w-[316px] border-r sticky">
			<nav className="h-full flex flex-col justify-between space-y-4">
				{/* Top part of sidebar */}
				<div className="space-y-12">
					{/* logo */}
					<div className="px-4 pt-4">
						<h1 className="overflow-hidden transition-all sm:text-2xl md:text-4xl text-prev text-primaryDefault font-bold font-Inter text-center">
							Logo
						</h1>
					</div>

					{/* sidebar menu */}
					<Menu />
				</div>

				{/* footer of sidebar menu---------------------- */}
				<div>
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
					<div className="flex p-6 gap-3">
						<div
							onClick={handleShowProfile}
							className="bg-secondaryDisable py-3 px-6 flex items-center rounded justify-center gap-4 cursor-pointer duration-75"
						>
							<img src={profile} alt="profile" />
							<img src={showProfile ? upArrow : downArrow} alt="downArrow" />
						</div>
						<div
							onClick={handleOpenSettings}
							className="bg-secondaryDisable py-3 px-6 flex items-center rounded justify-center gap-4 cursor-pointer duration-75"
						>
							<img src={settings} alt="settings" />
							<img src={showSettings ? upArrow : downArrow} alt="downArrow" />
						</div>
					</div>
				</div>
			</nav>
		</aside>
	);
}
