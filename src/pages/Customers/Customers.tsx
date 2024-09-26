import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import addCustomer from "../../assets/icons/addCustomer.png";
import download from "../../assets/icons/download.png";
import { CgMoreO } from "react-icons/cg";
import { FaRegPaste } from "react-icons/fa6";

const Customers = () => {
  const customers = [
    {
      name: "Dianne Russell",
      id: "#6784578",
      envatoUser: "Dianne Russell Dianne",
      email: "Vuhaithuongnute@gmail.com",
      lastLogin: "15 Minutes Ago",
      tickets: "00000",
    },
    // Add more customer entries as necessary
  ];

  return (
    <div className="bg-[#E0E6FD] p-6 lg:grid grid-cols-4 gap-4 min-h-screen">
      {/* Left side - Table */}
      <div className="col-span-3 overflow-x-auto bg-[#f8f7f7] p-3 shadow-md">
        <table className="table bg-white rounded-none">
          {/* head */}
          <thead>
            <tr className="text-slate-700 font-bold text-base">
              <th>Name</th>
              <th>Envato User</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Ticket</th>
              <th>Options</th>
            </tr>
          </thead>
          {/* tbody */}
          <tbody>
            <tr className="text-sm text-textCyan odd:bg-slate-50">
              <td className="flex gap-2">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-circle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">#932567</div>
                  </div>
                </div>
              </td>
              <td>Dianne Russell Dianne</td>
              <td>vuhaithuongnute@gmail.com</td>
              <td>15 Minutes ago</td>
              <td>0000</td>
              <td className="text-xl flex items-center gap-4 mb-6">
                <button title="Update Product" className="text-orange-600">
                  <FaRegEdit />
                </button>
                <button title="Add Product" className="text-orange-600">
                  <FaRegPaste />
                </button>
                <button title="Product Details" className="text-green-600">
                  <CgMoreO />
                </button>
                <button title="Delete Product" className="text-red-600">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right side - Actions */}
      <div className=" bg-white shadow-lg p-6 rounded-lg text-black">
        <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-200">
          <img className="w-4" src={addCustomer} alt="" />
          <span>ADD A CUSTOMER</span>
        </button>
        <div className="mt-6 ">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg bg-white text-black"
          />
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black bg-white">
            <option>Filter By Categories</option>
            {/* Add more options */}
          </select>
        </div>
        <button className="w-full mt-6 bg-white hover:text-white border border-blue-600 text-black px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-200">
          <img className="w-4" src={download} alt="" />
          <span>Export Customers To CSV</span>
        </button>
      </div>
    </div>
  );
};

export default Customers;
