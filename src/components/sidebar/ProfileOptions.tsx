
import { LuPencil } from "react-icons/lu";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";



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
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:text-white hover:bg-secondaryDefault duration-200 ${
					selectedProfile === "editProfile"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleProfile("editProfile")}
			>
				<LuPencil/>
				<span className="text-lg3 md:text-sm font-Lato font-medium group-hover:text-white">
					Edit Profile
				</span>
			</div>
			{/* saved replies ---------------*/}
			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:text-white hover:bg-secondaryDefault duration-200 ${
					selectedProfile === "savedReplies"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleProfile("savedReplies")}
			>
				
				<RiMessage2Line className=""/>

				<span className="text-lg3 md:text-sm  font-Lato font-medium group-hover:text-white">
					Saved Replies
				</span>
			</div>
			{/* signout ---------------*/}
			<div
				onClick={logOut}
				className="group flex items-center py-3 px-7 space-x-3 cursor-pointer text-txtColor hover:text-white hover:bg-secondaryDefault duration-200"
			>
				<IoIosLogOut className="md:text-[18px]"/>

				<span className="text-lg3 md:text-sm  font-Lato font-medium group-hover:text-white">
					Sign Out
				</span>
			</div>
		</div>
	);
};

export default ProfileOptions;
