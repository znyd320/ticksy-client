import messaging from "../../assets/side-navbar-icons/sidebar-bottom-section/profile-section-icons/messaging.svg";
import editProfile from "../../assets/side-navbar-icons/sidebar-bottom-section/profile-section-icons/pen.svg";
import signOut from "../../assets/side-navbar-icons/sidebar-bottom-section/profile-section-icons/sign-out.svg";

import selectedMessaging from "../../assets/side-navbar-icons/sidebar-bottom-section/profile-section-icons/selected-message.svg";
import selectedEditProfile from "../../assets/side-navbar-icons/sidebar-bottom-section/profile-section-icons/selected-profile.svg";

interface ProfileOptionsProps {
	showProfile: boolean;
	selectedProfile: string;
	handleProfile: (selectedProfile: string) => string;
	logOut: () => void;
}

const ProfileOptions = ({
	showProfile,
	selectedProfile,
	handleProfile,
	logOut,
}: ProfileOptionsProps) => {
	return (
		<div
			className={`mx-6 py-4 bg-secondaryDisable space-y-1 rounded-t-md  ${
				showProfile ? "block" : "hidden"
			}`}
		>
			{/* edit Profile ---------------*/}
			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer duration-200 ${
					selectedProfile === "editProfile"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleProfile("editProfile")}
			>
				<img
					src={
						selectedProfile === "editProfile"
							? selectedEditProfile
							: editProfile
					}
					alt=""
					className="md:w-[18px]"
				/>
				<span className="text-lg3 md:text-sm font-Lato font-medium">
					Edit Profile
				</span>
			</div>
			{/* saved replies ---------------*/}
			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer duration-200 ${
					selectedProfile === "savedReplies"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleProfile("savedReplies")}
			>
				<img
					src={
						selectedProfile === "savedReplies" ? selectedMessaging : messaging
					}
					alt=""
					className="md:w-[18px]"
				/>

				<span className="text-lg3 md:text-sm  font-Lato font-medium">
					Saved Replies
				</span>
			</div>
			{/* signout ---------------*/}
			<div
				onClick={logOut}
				className="group flex items-center py-3 px-7 space-x-3 cursor-pointer text-txtColor duration-200"
			>
				{/* <IoIosLogOut className="md:text-[18px]"/> */}
				<img src={signOut} alt="" className="md:w-[18px]" />

				<span className="text-lg3 md:text-sm  font-Lato font-medium">
					Sign Out
				</span>
			</div>
		</div>
	);
};

export default ProfileOptions;
