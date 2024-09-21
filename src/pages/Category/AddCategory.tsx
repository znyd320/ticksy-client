import React from "react";

const AddCategory = () => {
  return (
    <div className="bg-[#E0E6FD] ">
      {/* Add Category Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Heading */}
        <div className="flex items-center space-x-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <h2 className="text-lg font-bold text-gray-700">ADD A CATEGORY</h2>
        </div>

        {/* Category Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Category Name ..."
            className="input input-bordered w-full text-gray-700 font-semibold"
          />
        </div>

        {/* Assigned User */}
        <div className="flex items-center justify-between border border-gray-300 rounded-md p-3 mb-4">
          <div className="flex items-center space-x-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
            <span className="text-gray-600 font-semibold">
              Assigned To Masum Sakib
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Add Category Button */}
        <div className="text-center">
          <button className="btn btn-success w-full">ADD CATEGORY</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
