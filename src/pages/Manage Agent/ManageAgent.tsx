import lockKey from "../../assets/icons/lockKey.png";
import ticketRight from "../../assets/icons/ticketRight.png";
import tick from "../../assets/icons/tick.png";

const ManageAgent = () => {
  return (
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
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-gray-900">Minjur Rahman</h2>
          {/* Role Icon */}
          <img className="w-6 h-6" src={lockKey} alt="" />
        </div>

        {/* Ticket Info */}
        <div className="flex space-x-6 text-gray-600">
          {/* Open Tickets */}
          <div className="flex items-center space-x-1">
            <img className="h-5 w-5" src={ticketRight} alt="" />
            <span>1360 open tickets</span>
          </div>

          {/* Closed Tickets */}
          <div className="flex items-center space-x-1">
            <img className="h-5 w-5" src={tick} alt="" />
            <span>131518 closed tickets</span>
          </div>
        </div>

        {/* Last Signed In Info */}
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Last signed in:</span> 1
          Week Ago on September 20, 2024 at 11:00 AM
        </div>
      </div>
    </div>
  );
};

export default ManageAgent;
