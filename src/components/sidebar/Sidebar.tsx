import { Dropdown, Sidebar } from "flowbite-react";
import { ReactNode } from "react";
import { FaSignOutAlt, FaTimes, FaUserCheck } from "react-icons/fa";
import { HiMiniBanknotes } from "react-icons/hi2";
import {
  MdAirplaneTicket,
  MdCategory,
  MdDashboard,
  MdOutlineAirplaneTicket,
  MdOutlinePriceCheck,
} from "react-icons/md";

import { FaTicketSimple, FaUsers } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOutState } from "../../features/auth/auth";

import {
  UrlAnalytics,
  UrlCategory,
  UrlCustomers,
  UrlDashboard,
  UrlFinance,
  UrlKnowledge,
  UrlManageAgent,
  UrlNotification,
  UrlPriceCreate,
  UrlProRequest,
  UrlTickets,
  UrlUser,
} from "../../router/url";
import { TiTicket } from "react-icons/ti";
import { SiKnowledgebase } from "react-icons/si";

function CustomSidebar({ setOpen }: any) {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("Hello");

    localStorage.removeItem("rekoul_token");
    localStorage.removeItem("rekoul_user");
    dispatch(logOutState());
  };

  return (
    <div className="absolute z-50 md:relative xl:h-screen lg:h-screen md:max-h-none h-screen border-r md:border-none">
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className="relative"
      >
        <div className="flex gap-2 items-center border-b pb-3 mb-1">
          <img
            src="https://i.ibb.co/fMz0c1s/Vector.png"
            alt="logo"
            className="h-[45px] w-[40px]"
          />
          <h1 className="text-xl font-bold">Rekoul Admin</h1>

          <FaTimes
            size={20}
            className="ml-5 md:hidden"
            onClick={() => setOpen(false)}
          />
        </div>

        <>
          <ul className="w-full">
            <List link={UrlDashboard()} title="Dashboard">
              <MdDashboard size={18} />
            </List>
            <List link={UrlTickets()} title="Tickets">
              <TiTicket size={18} />
            </List>

            <List link={UrlCategory()} title="Category">
              <MdCategory size={18} />
            </List>

            <List link={UrlKnowledge()} title="Knowledge">
              <SiKnowledgebase size={18} />
            </List>

            <List link={UrlCustomers()} title="Customer's">
              <MdCategory size={18} />
            </List>

            <List link={UrlManageAgent()} title="Manage Agent">
              <MdCategory size={18} />
            </List>

            <List link={UrlAnalytics()} title="Analytics/Report's">
              <MdCategory size={18} />
            </List>

            <List link={UrlUser()} title="All Users">
              <FaUsers size={18} />
            </List>

            <List link={UrlProRequest()} title="Pro Users">
              <FaUserCheck size={18} />
            </List>

            <List link={UrlFinance()} title="Finance">
              <HiMiniBanknotes size={18} />
            </List>

            <List link={UrlPriceCreate()} title="Price Create">
              <MdOutlinePriceCheck size={18} />
            </List>

            <List link={UrlNotification()} title="Notification">
              <IoNotifications size={18} />
            </List>
            {/* <List link={UrlSettings()} title="Settings">
              <IoSettingsSharp size={18} />
            </List> */}
          </ul>
        </>
        <button
          onClick={handleLogOut}
          className="absolute bottom-2 justify-between flex items-center w-[90%] bg-[#1ea474] text-[#fff] py-2 px-5 rounded-sm"
        >
          <p>Log Out</p> <FaSignOutAlt />
        </button>
      </Sidebar>
    </div>
  );
}

export default CustomSidebar;

interface listTitle {
  title: string;
  children: ReactNode;
  link: string;
}

const List = ({ title, link, children }: listTitle) => {
  const location = useLocation();

  return (
    <li className="w-full mb-1">
      <Link
        to={link || "/"}
        className="w-full py-2 px-4 rounded-[5px] flex gap-2 items-center text-md"
        style={{
          backgroundColor: location.pathname === link ? "#1ea474" : "#00000010",
          color: location.pathname === link ? "#fff" : "#000000",
        }}
      >
        {children}
        {title}
      </Link>
    </li>
  );
};
