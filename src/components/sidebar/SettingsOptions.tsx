interface SettingsOptionsProps {
	handleSettings: (selectedSettings: string) => string;
	selectedSettings: string;
	showSettings: boolean;
}

import account from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/account.svg";
import agents from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/agents.svg";
import articles from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/articles.svg";
import manageCategories from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/categories.svg";
import system from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/system.svg";

import selectedAccount from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/selected-account.svg";
import SelectedAgents from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/selected-agent.svg";
import selectedArticle from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/selected-article.svg";
import selectedCategories from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/selected-categories.svg";
import selectedSystem from "../../assets/side-navbar-icons/sidebar-bottom-section/settings-section-icons/selected-system.svg";

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
				className={`group flex items-center py-3 px-5 space-x-3 cursor-pointer  duration-200 ${
					selectedSettings === "categories"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("categories")}
			>
				{/* <MdOutlineArticle /> */}
				<img
					src={
						selectedSettings === "categories"
							? selectedCategories
							: manageCategories
					}
					alt=""
					className="w-[20px]"
				/>
				<span className="text-lg3 md:text-sm font-Lato font-medium ">
					Manage Categories
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-5 space-x-3 cursor-pointer  duration-200 ${
					selectedSettings === "articles"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("articles")}
			>
				<img
					src={selectedSettings === "articles" ? selectedArticle : articles}
					alt=""
					className="w-[19px]"
				/>

				<span className="text-lg3 md:text-sm font-Lato font-medium ">
					Manage Articles
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-5 space-x-3 cursor-pointer  duration-200 ${
					selectedSettings === "agents"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("agents")}
			>
				<img
					src={selectedSettings === "agents" ? SelectedAgents : agents}
					alt=""
					className="w-5"
				/>
				<span className="text-lg3 md:text-sm font-Lato font-medium ">
					Support Agents
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-5 space-x-3 cursor-pointer  duration-200 ${
					selectedSettings === "system"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("system")}
			>
				<img
					src={selectedSettings === "system" ? selectedSystem : system}
					alt=""
					className="w-5"
				/>

				<span className="text-lg3 md:text-sm font-Lato font-medium ">
					System Settings
				</span>
			</div>

			<div
				className={`group flex items-center py-3 px-5 space-x-3 cursor-pointer  duration-200 ${
					selectedSettings === "account"
						? "-bg--Secondary-CTA text-white"
						: "text-txtColor"
				}`}
				onClick={() => handleSettings("account")}
			>
				<img
					src={selectedSettings === "account" ? selectedAccount : account}
					alt=""
					className="w-5"
				/>

				<span className="text-lg3 md:text-sm font-Lato font-medium ">
					Account & Billing
				</span>
			</div>
		</div>
	);
};

export default SettingsOptions;
