import React from "react";

const Analytics = () => {
  const stats = [
    {
      title: "New Ticket",
      value: 0,
      change: 10.0,
      positive: true,
      date: "Wed, Jul 20",
    },
    {
      title: "Agent Responses",
      value: 0,
      change: 10.0,
      positive: false,
      date: "Wed, Jul 20",
    },
    {
      title: "Response Time",
      value: 0,
      change: 10.0,
      positive: false,
      date: "Wed, Jul 20",
    },
    {
      title: "Like Comments",
      value: 0,
      change: 10.0,
      positive: true,
      date: "Wed, Jul 20",
    },
    {
      title: "Closed Tickets",
      value: 0,
      change: 10.0,
      positive: true,
      date: "Wed, Jul 20",
    },
  ];

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center space-y-3"
          >
            <p className="text-gray-600 font-medium">{stat.title}</p>
            <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
            <p className="text-gray-400">{stat.date}</p>
            <div
              className={`text-sm font-medium ${
                stat.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.positive ? "↑" : "↓"} {stat.change}%
            </div>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          MONTHLY ANALYTICS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>Categories Type</div>
          <div>Agent</div>
          <div>Year</div>
          <div>Month</div>
          <select className="bg-white w-full border border-gray-300 rounded-lg p-2 text-gray-600">
            <option>All Categories</option>
          </select>

          <select className="bg-white w-full border border-gray-300 rounded-lg p-2 text-gray-600">
            <option>All Agent</option>
          </select>
          <select className="bg-white w-full border border-gray-300 rounded-lg p-2 text-gray-600">
            <option>2024</option>
          </select>
          <select className="bg-white w-full border border-gray-300 rounded-lg p-2 text-gray-600">
            <option>All/Month</option>
          </select>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-5 gap-4 text-center font-semibold text-gray-600 mb-4">
          <button className="border py-2">NEW TICKETS</button>{" "}
          <button className="border py-2">AGENT RESPONSES</button>
          <button className="border py-2">RESPONSE TIME</button>
          <button className="border py-2">LIKED COMMENTS</button>
          <button className="border py-2">CLOSED TICKETS</button>
        </div>

        <div className="flex space-x-2 justify-between items-end h-48">
          {months.map((month, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Chart Bars */}
              <div
                className={`h-${
                  Math.floor(Math.random() * 32) + 8
                } w-4 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-md`}
              ></div>
              {/* Month Labels */}
              <p className="mt-2 text-gray-500 text-sm">{month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;

// import React from "react";

// const Analytics = () => {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* Statistics Cards */}
//       <div className="grid grid-cols-5 gap-4 mb-8">
//         {[
//           "New Ticket",
//           "Agent Responses",
//           "Response Time",
//           "Like Comments",
//           "Closed Tickets",
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 text-center"
//           >
//             <p className="text-sm text-gray-400 mb-2">{item}</p>
//             <p className="text-3xl text-indigo-600 font-bold">00000</p>
//             <p className="text-xs text-gray-400">Wed, Jul 20</p>
//             <div
//               className={`text-sm ${
//                 index % 2 === 0 ? "text-blue-500" : "text-orange-500"
//               }`}
//             >
//               {index % 2 === 0 ? "↑" : "↓"} 10.0%
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Filters */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           MONTHLY ANALYTICS
//         </h2>
//         <div className="grid grid-cols-4 gap-4 ">
//           <select className="border rounded-lg p-2 bg-white">
//             <option>All Categories</option>
//             {/* Add more options here */}
//           </select>
//           <select className="bg-white border rounded-lg p-2">
//             <option>All Agent</option>
//             {/* Add more options here */}
//           </select>
//           <select className="bg-white border rounded-lg p-2">
//             <option>2024</option>
//             {/* Add more options here */}
//           </select>
//           <select className="bg-white border rounded-lg p-2">
//             <option>All</option>
//             {/* Add more options here */}
//           </select>
//         </div>
//       </div>

//       {/* Bar Chart */}
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <div className="grid grid-cols-5 text-center font-bold text-gray-500 mb-4">
//           <button className="border py-2">NEW TICKETS</button>
//           <button className="border py-2">AGENT RESPONSES</button>
//           <button className="border py-2">RESPONSE TIME</button>
//           <button className="border py-2">LIKED COMMENTS</button>
//           <button className="border py-2">CLOSED TICKETS</button>
//         </div>
//         <div className="grid grid-cols-12 gap-2 items-end text-center text-sm">
//           {Array(12)
//             .fill(0)
//             .map((_, idx) => (
//               <div key={idx} className="col-span-1 flex flex-col justify-end">
//                 <div className="h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg"></div>
//                 <p>
//                   {
//                     [
//                       "JAN",
//                       "FEB",
//                       "MAR",
//                       "APR",
//                       "MAY",
//                       "JUN",
//                       "JUL",
//                       "AUG",
//                       "SEP",
//                       "OCT",
//                       "NOV",
//                       "DEC",
//                     ][idx]
//                   }
//                 </p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;
