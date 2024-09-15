import React from "react";

const Category = () => {
  return (
    <div className="lg:grid grid-cols-4 gap-4">
      <div className="col-span-3 border-blue-600 bg-white p-5">
        <div className="bg-[#E0E6FD] p-2 text-[#4F4F4F] font-bold">
          <h4>CURRENT CATEGORIES</h4>
        </div>

        <div className="flex justify-between mt-4 mb-5">
          <div className="pt-3 flex gap-2 text-[#4F4F4F] font-semibold">
            <input type="checkbox" className="toggle" defaultChecked />
            <label htmlFor="checkbox">Enable Compact Sorting</label>
          </div>
          <button className="btn btn-info text-white">SORT A-Z</button>
        </div>

        {/* This one will mapping items */}
        <div className="flex gap-4 justify-between align-middle p-2 border rounded-lg">
          <div className="flex gap-4">
            <h1>icon</h1>
            <div className="avatar">
              <div className="mask mask-squire rounded-lg h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div className="border w-auto ">
              <h2 className="inline-block align-middle">Category Item</h2>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="mask mask-circle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <h1>D-icon</h1>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="">add a category</div>
    </div>
  );
};

export default Category;
