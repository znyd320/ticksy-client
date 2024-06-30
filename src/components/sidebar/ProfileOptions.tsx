import editProfileWhite from "../../assets/profileIcons/editColor.svg";
import editProfile from "../../assets/profileIcons/editDefault.svg";
import repliesColor from "../../assets/profileIcons/repliesColor.svg";
import replies from "../../assets/profileIcons/repliesDefault.svg";
import signout from "../../assets/profileIcons/signoutDefault.svg";

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
			className={`mx-6 py-4 bg-secondaryDisable space-y-1 rounded-t-md ${
				showProfile ? "block animate-show-hidden-element" : "hidden"
			}`}
		>
			{/* edit Profile ---------------*/}
			<div
				className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
					selectedProfile === "editProfile"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleProfile("editProfile")}
			>
				<img
					src={
						selectedProfile === "editProfile" ? editProfileWhite : editProfile
					}
					alt="editProfile"
				/>
				<span className="text-sm font-Lato font-medium">Edit Profile</span>
			</div>
			{/* saved replies ---------------*/}
			<div
				className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
					selectedProfile === "savedReplies"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleProfile("savedReplies")}
			>
				<img
					src={selectedProfile === "savedReplies" ? repliesColor : replies}
					alt="saved Replies"
				/>
				<span className="text-sm font-Lato font-medium">Saved Replies</span>
			</div>
			{/* signout ---------------*/}
			<div
				onClick={logOut}
				className="flex items-center py-3 px-7 space-x-3 cursor-pointer text-txtColor hover:bg-secondaryDefault hover:text-white duration-200"
			>
				<img src={signout} alt="sign out" />
				<span className="text-sm font-Lato font-medium">Sign Out</span>
			</div>
		</div>
	);
};

export default ProfileOptions;
