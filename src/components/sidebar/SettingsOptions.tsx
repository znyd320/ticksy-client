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

interface SettingsOptionsProps {
  handleSettings: (selectedSettings: string) => string;
  selectedSettings: string;
  showSettings: boolean
}



const SettingsOptions = ({handleSettings, selectedSettings, showSettings}: SettingsOptionsProps) => {
  return (
    <div
    className={`mx-6 py-4 bg-secondaryDisable space-y-1 rounded-t-md ${
      showSettings ? "block animate-show-hidden-element" : "hidden"
    }`}
  >
    <div
      className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
        selectedSettings === "categories"
          ? "bg-secondaryDefault text-white"
          : "text-txtColor"
      }`}
      onClick={() => handleSettings("categories")}
    >
      <img
        src={
          selectedSettings === "categories"
            ? categoriesWhite
            : categoriesDef
        }
        alt="manage categories"
      />
      <span className="text-sm font-Lato font-medium">
        Manage Categories
      </span>
    </div>

    <div
      className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
        selectedSettings === "articles"
          ? "bg-secondaryDefault text-white"
          : "text-txtColor"
      }`}
      onClick={() => handleSettings("articles")}
    >
      <img
        src={
          selectedSettings === "articles" ? articlesWhite : articlesDef
        }
        alt="Manage Articles"
      />
      <span className="text-sm font-Lato font-medium">
        Manage Articles
      </span>
    </div>

    <div
      className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
        selectedSettings === "agents"
          ? "bg-secondaryDefault text-white"
          : "text-txtColor"
      }`}
      onClick={() => handleSettings("agents")}
    >
      <img
        src={selectedSettings === "agents" ? agentsWhite : agentsDef}
        alt="Support Agents"
      />
      <span className="text-sm font-Lato font-medium">
        Support Agents
      </span>
    </div>

    <div
      className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
        selectedSettings === "system"
          ? "bg-secondaryDefault text-white"
          : "text-txtColor"
      }`}
      onClick={() => handleSettings("system")}
    >
      <img
        src={selectedSettings === "system" ? systemWhite : systemDef}
        alt="System Settings"
      />
      <span className="text-sm font-Lato font-medium">
        System Settings
      </span>
    </div>

    <div
      className={`flex items-center py-3 px-7 space-x-3 cursor-pointer hover:bg-secondaryDefault hover:text-white duration-200 ${
        selectedSettings === "account"
          ? "bg-secondaryDefault text-white"
          : "text-txtColor"
      }`}
      onClick={() => handleSettings("account")}
    >
      <img
        src={selectedSettings === "account" ? accountWhite : accountDef}
        alt="Account & Billing"
      />
      <span className="text-sm font-Lato font-medium">
        Account & Billing
      </span>
    </div>
  </div>
  )
}

export default SettingsOptions