import { useState } from "react";
import { useDispatch } from "react-redux";

import { logOutState } from "../../features/auth/auth";
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
		<aside className="h-full md:w-[250px] 2xl:w-[316px] fixed top-0 left-0 flex flex-col pt-5 border-r">
			{/* sidebar logo */}
			<header className="-mb--spacing-8xl md:-mb--spacing-4xl">
				<h1 className="md:text-xl 2xl:text-4xl text-prev text-primaryDefault font-bold font-Inter text-center pb-[5px]">
					Logo
				</h1>
			</header>

			{/* sidebar menu */}
			<div className="overflow-auto pr-[10px] invisible hover:visible flex-grow">
				<Menu />
			</div>

			{/* footer of sidebar menu---------------------- */}
			<footer className="mt-auto flex-shrink-0">
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
						{/* Profile Picture */}
						<svg
							className="md:w-5 md:h-5 w-8 h-8"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								id="Vector"
								d="M27.3137 4.68631C24.2917 1.66431 20.2738 0 16 0C11.7262 0 7.70831 1.66431 4.68625 4.68631C1.66431 7.70831 0 11.7262 0 16C0 20.2738 1.66431 24.2917 4.68625 27.3137C7.70831 30.3357 11.7262 32 16 32C20.2738 32 24.2917 30.3357 27.3137 27.3137C30.3357 24.2917 32 20.2738 32 16C32 11.7262 30.3357 7.70831 27.3137 4.68631ZM16 30.125C11.8207 30.125 8.06019 28.2999 5.47175 25.4056C7.07644 21.1514 11.1842 18.125 16 18.125C12.8934 18.125 10.375 15.6066 10.375 12.5C10.375 9.39338 12.8934 6.875 16 6.875C19.1066 6.875 21.625 9.39338 21.625 12.5C21.625 15.6066 19.1066 18.125 16 18.125C20.8158 18.125 24.9236 21.1514 26.5282 25.4056C23.9398 28.2999 20.1793 30.125 16 30.125Z"
								fill="#545454"
							/>
						</svg>
						{/* Arrow */}
						<svg
							className="md:w-4 md:h-2 w-5 h-3"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 12"
							fill="none"
						>
							<path
								d="M0 1.80892L1.775 0L10 8.38216L18.225 0L20 1.80892L10 12L0 1.80892Z"
								fill="#545454"
							/>
						</svg>
					</div>
					<div
						onClick={handleOpenSettings}
						className="bg-secondaryDisable py-3 px-6 flex items-center rounded justify-center gap-4 cursor-pointer duration-75"
					>
						{/* Settings icon */}
						<svg
							className="md:w-5 md:h-5 w-8 h-8"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								id="Vector"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16 0C20.4182 0 24.4182 1.79092 27.3137 4.68635C30.2091 7.58178 32 11.5818 32 16C32 20.4182 30.2091 24.4182 27.3137 27.3137C24.4182 30.2091 20.4182 32 16 32C11.5818 32 7.58178 30.2091 4.68635 27.3137C1.79092 24.4182 0 20.4182 0 16C0 11.5818 1.79092 7.58178 4.68635 4.68635C7.58178 1.79092 11.5818 0 16 0ZM17.9603 9.31149V8.06349L17.1983 7.30159H14.8017L14.0398 8.06349V9.31149C13.8001 9.38185 13.5644 9.46506 13.3337 9.56076C13.1026 9.65666 12.8769 9.76509 12.6577 9.88559L11.7741 9.00203H10.6967L9.00203 10.6968V11.7742L9.88565 12.6578C9.76518 12.877 9.65676 13.1026 9.56089 13.3337C9.46521 13.5644 9.382 13.8002 9.31162 14.0399H8.06349L7.30159 14.8018V17.1984L8.06349 17.9603H9.31156C9.3819 18.2 9.46511 18.4357 9.56083 18.6664C9.65669 18.8975 9.76513 19.1232 9.88565 19.3424L9.00203 20.226V21.3034L10.6968 22.9981H11.7742L12.6577 22.1145C12.8769 22.2351 13.1026 22.3435 13.3337 22.4393C13.5644 22.535 13.8002 22.6182 14.0399 22.6886V23.9365L14.8018 24.6984H17.1984L17.9603 23.9365V22.6885C18.2008 22.6179 18.4365 22.5345 18.6665 22.4392C18.8976 22.3433 19.1232 22.2349 19.3425 22.1144L20.226 22.998H21.3034L22.9982 21.3033V20.2259L22.1145 19.3423C22.235 19.123 22.3435 18.8974 22.4394 18.6663C22.5351 18.4356 22.6183 18.1999 22.6886 17.9602H23.9365L24.6984 17.1983V14.8017L23.9365 14.0397H22.6884C22.6181 13.8 22.5349 13.5643 22.4392 13.3335C22.3433 13.1025 22.2349 12.8769 22.1144 12.6577L22.998 11.774V10.6966L21.3034 9.00191H20.226L19.3424 9.88546C19.1232 9.76495 18.8975 9.65652 18.6664 9.56064C18.4356 9.46503 18.1999 9.38187 17.9603 9.31149ZM16 12.2381C14.9613 12.2381 14.0208 12.6592 13.34 13.34C12.6592 14.0208 12.2381 14.9613 12.2381 16C12.2381 17.0387 12.6592 17.9792 13.3399 18.66C14.0208 19.3408 14.9613 19.7619 16 19.7619C17.0387 19.7619 17.9792 19.3408 18.66 18.6601C19.3408 17.9792 19.7619 17.0387 19.7619 16C19.7619 14.9613 19.3408 14.0208 18.6601 13.34C17.9792 12.6592 17.0387 12.2381 16 12.2381Z"
								fill="#545454"
							/>
						</svg>
						{/* arrown icon */}
						<svg
							className="md:w-4 md:h-2 w-5 h-3"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 12"
							fill="none"
						>
							<path
								d="M0 1.80892L1.775 0L10 8.38216L18.225 0L20 1.80892L10 12L0 1.80892Z"
								fill="#545454"
							/>
						</svg>
					</div>
				</div>
			</footer>
		</aside>
	);
}
