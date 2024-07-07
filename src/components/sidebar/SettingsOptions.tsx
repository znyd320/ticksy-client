interface SettingsOptionsProps {
	handleSettings: (selectedSettings: string) => string;
	selectedSettings: string;
	showSettings: boolean;
}

import { LiaUser } from "react-icons/lia";
import {
	MdLockOutline,
	MdOutlineArticle,
	MdOutlineTextSnippet,
} from "react-icons/md";
import { TbZoomReset } from "react-icons/tb";

const SettingsOptions = ({
	handleSettings,
	selectedSettings,
	showSettings,
}: SettingsOptionsProps) => {
	return (
		<div
			className={`mx-6 py-4 bg-secondaryDisable rounded-t-md ${
				showSettings ? "block" : "hidden"
			}`}
		>
			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:text-white hover:bg-secondaryDefault duration-200 ${
					selectedSettings === "categories"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("categories")}
			>
				<MdOutlineArticle />
				<span className="text-lg3 md:text-sm font-Lato font-medium group-hover:text-white">
					Manage Categories
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:text-white hover:bg-secondaryDefault duration-200 ${
					selectedSettings === "articles"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("articles")}
			>
				<MdOutlineTextSnippet />

				<span className="text-lg3 md:text-sm font-Lato font-medium group-hover:text-white">
					Manage Articles
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
					selectedSettings === "agents"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("agents")}
			>
				<LiaUser />

				<span className="text-lg3 md:text-sm font-Lato font-medium group-hover:text-white">
					Support Agents
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:text-white hover:bg-secondaryDefault duration-200 ${
					selectedSettings === "system"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("system")}
			>
				<TbZoomReset />

				<span className="text-lg3 md:text-sm font-Lato font-medium group-hover:text-white">
					System Settings
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
					selectedSettings === "account"
						? "bg-secondaryDefault text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("account")}
			>
				<MdLockOutline />

				<span className="text-lg3 md:text-sm font-Lato font-medium group-hover:text-white">
					Account & Billing
				</span>
			</div>
		</div>
	);
};

export default SettingsOptions;
