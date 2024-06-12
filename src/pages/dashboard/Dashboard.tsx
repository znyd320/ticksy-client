// import { useEffect, useState } from "react";
import { BsCartCheck, BsCartX } from "react-icons/bs";
import {
  FaUserCheck,
  FaUserShield,
  FaUserTimes,
  FaUsers,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
// import Card from "../../components/card/Card"; 

function Dashboard() {
  const userData = null;

  return (
    <div className="p-5">
      <div className=" gap-5 sm:grid sm:grid-cols-1 sm:mt-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5 ">
        <Card
          title="All Users"
          total={userData?.totalUsers || 0}
          icon={<FaUsers size={30} color="#fff" />}
        />

        <Card
          title="Pro Users"
          total={userData?.totalProUser || 0}
          icon={<FaUserShield size={30} color="#fff" />}
        />

        <Card
          title="Approve User"
          total={userData?.totalApprovedProUser || 0}
          icon={<FaUserCheck size={30} color="#fff" />}
        />

        <Card
          title="Pending Users"
          total={userData?.totalUnApprovedProUser || 0}
          icon={<FaUserTimes size={30} color="#fff" />}
        />

        <Card
          title="Total Order"
          total={userData?.totalOrder || 0}
          icon={<BsCartCheck size={30} color="#fff" />}
        />

        <Card
          title="Cancel Order"
          total={userData?.totalCancleOrder || 0}
          icon={<BsCartX size={30} color="#fff" />}
        />

        <Card
          title="Total Delivered Order"
          total={userData?.totalDeliveredOrder || 0}
          icon={<MdDeliveryDining size={30} color="#fff" />}
        />

        <Card
          title="Cancel by Customer"
          total={userData?.totalCustomerCancelOrder || 0}
          icon={<BsCartX size={30} color="#fff" />}
        />

        <Card
          title="Cancel by Resonant"
          total={userData?.totalResturantCancelOrder || 0}
          icon={<BsCartX size={30} color="#fff" />}
        />
      </div>

      <div className=" sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 xl:grid xl:grid-cols-4  mt-10 gap-5">
        <div className="col-span-2 my-3">
          
        </div>
        <div className="my-3">
          
        </div>
        <div className="my-3">
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, total, icon }: any) => {
  return (
    <div className="  flex my-2  py-5 px-9 items-center gap-5 rounded shadow-xl border ">
      <div className="py-5 px-5 bg-[#1EA474] rounded-full">{icon}</div>
      <div className="">
        <b className="text-[23px]">{total}</b>
        <p className="mt-[-2px] text-[15px]">{title}</p>
      </div>
    </div>
  );
};

export default Dashboard;
