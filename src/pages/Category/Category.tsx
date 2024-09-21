import AddCategory from "./AddCategory";

const categories = [
  {
    id: 1,
    name: "Arcatec",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    assignedTo: "Masum Sakib",
  },
  {
    id: 2,
    name: "Masco - WordPress",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    assignedTo: "Masum Sakib",
  },
  {
    id: 3,
    name: "Xmoze - WordPress",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    assignedTo: "Masum Sakib",
  },
  {
    id: 4,
    name: "Flowto - WordPress",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    assignedTo: "Masum Sakib",
  },
  {
    id: 5,
    name: "Techza - WordPress",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    assignedTo: "Masum Sakib",
  },
  {
    id: 6,
    name: "Fugu - WordPress",
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    assignedTo: "Masum Sakib",
  },
];

const Category = () => {
  return (
    <div className="bg-[#E0E6FD] p-6 lg:grid grid-cols-4 gap-4">
      {/* Heading Section */}
      <div className="col-span-3 bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-700">
            CURRENT CATEGORIES
          </h1>
          <button className="btn btn-info text-white">SORT A-Z</button>
        </div>

        {/* Toggle and Action Button */}
        <div className="flex justify-between mb-6">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="toggle" />
            <label className="text-gray-600 font-semibold">
              Enable Compact Sorting
            </label>
          </div>
        </div>

        {/* Category List */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4"
          >
            {/* Draggable Icon */}
            <div className="flex items-center space-x-3">
              <div className="cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </div>

              {/* Category Image */}
              <div className="avatar">
                <div className="w-12 rounded-lg">
                  <img src={category.img} alt={category.name} />
                </div>
              </div>

              {/* Category Name (Editable) */}
              <input
                type="text"
                value={category.name}
                className="input input-bordered bg-white w-64 max-w-xs text-gray-700 font-semibold"
                readOnly
              />
            </div>

            {/* Assigned Info and Actions */}
            <div className="flex items-center space-x-4">
              {/* Assigned User */}
              <div className="flex items-center space-x-2">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={category.img} alt="User Avatar" />
                  </div>
                </div>
                <span className="text-gray-600 font-semibold">
                  Assigned To {category.assignedTo}
                </span>
              </div>

              {/* Right Arrow Icon */}
              <div className="cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Delete Icon */}
              <div className="cursor-pointer text-red-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <AddCategory />
      </div>
    </div>
  );
};

export default Category;
