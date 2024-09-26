import ticketi from "../../assets/icons/ticketLeft.png";
import notesi from "../../assets/icons/notes.png";

const ViewCustomer = () => {
  return (
    <div className="m-3 bg-[#E0E6FD] lg:grid grid-cols-4 gap-4">
      <div className="col-span-3">
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
        <div className="flex justify-center gap-4 mb-3">
          <button className=" mt-6 bg-white hover:text-white border border-blue-600 text-black px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-200">
            <img className="w-4" src={ticketi} alt="" />
            <span>00000 TICKETS</span>
          </button>
          <button className=" mt-6 bg-white hover:text-white border border-blue-600 text-black px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-200">
            <img className="w-4" src={notesi} alt="" />
            <span>CUSTOMER NOTES</span>
          </button>
        </div>

        <h2 className="bg-[#F1F8F6] text-[#12B76A] p-2 text-xl">
          UPDATED WITHIN THE HOUR
        </h2>
        {/*  */}
        <div className="flex items-center cursor-pointer bg-white shadow-lg rounded-lg p-6 space-x-6">
          {/* Profile Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrmfUD5w9JWPnvQRkS5zAzu4ZaRhic78kGA&s" // Replace with actual image source
            alt="Masum Sakib"
            className="w-16 h-16 rounded-full object-cover border border-gray-300 shadow-sm"
          />

          {/* Profile Details */}
          <div className="flex flex-col space-y-2">
            {/* Username and Role Icon */}
            <h4>Dannial Russel</h4>
            <div className="flex items-center space-x-2">
              {/* Role Icon */}
              <img className="w-6 h-6" src="" alt="" />
              <h2 className="text-xl font-semibold text-gray-900">
                Mobile Menu Opening On Load
              </h2>
            </div>

            {/* Ticket Info */}
            <div className="flex space-x-6 text-gray-600">
              {/* Open Tickets */}
              <div className="flex items-center space-x-1">
                <img className="h-5 w-5" src="" alt="" />
                <span>1360 open tickets</span>
              </div>

              {/* Closed Tickets */}
              <div className="flex items-center space-x-1">
                <img className="h-5 w-5" src="" alt="" />
                <span>131518 closed tickets</span>
              </div>
            </div>

            {/* Last Signed In Info */}
            <div className="text-sm text-gray-500">
              <span className="font-medium text-gray-700">Last signed in:</span>{" "}
              1 Week Ago on September 20, 2024 at 11:00 AM
            </div>
          </div>
        </div>
      </div>

      {/* Side Card */}
      <div>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-blue-100">
            <h2 className="text-lg font-semibold text-gray-700">
              CUSTOMER INFORMATION
            </h2>
          </div>

          <div className="px-6 py-4">
            <p className="text-gray-700">
              <strong>Name:</strong> Dianne Russell
            </p>
            <p className="text-gray-700">
              <strong>On Envato:</strong>
              <a href="#" className="text-blue-500 hover:underline ml-2">
                Dianne Russell Dianne
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>
              <a
                href="mailto:vuhaihuongnute@gmail.com"
                className="text-blue-500 hover:underline ml-2"
              >
                Vuhaihuongnute@Gmail.Com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Tickets:</strong> 0000
            </p>
            <p className="text-gray-700">
              <strong>Liked:</strong> 000
            </p>
            <p className="text-gray-700">
              <strong>Last Login:</strong> 31 Minutes Ago
            </p>
            <p className="text-gray-700">
              <strong>Signed Up:</strong> 31 Minutes Ago
            </p>

            <button className="text-red-500 hover:text-red-700 mt-4">
              Delete This Customer
            </button>
          </div>

          <div className="px-6 py-4 bg-blue-100">
            <h2 className="text-lg font-semibold text-gray-700">PURCHASES</h2>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Product"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-700">Masco - Wordpress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;
