function Settings() {
  return (
    <>
      <div className="p-3 overflow-x-auto h-[820px]">
        {/*//todo sidebar area */}
        <div className=" border px-4 py-3">
          <div className=" border-b dark:border-cyan-900 dark:text-gray-200 pb-2 py-3 mt-2 ">
            <h1 className="text-xl text-black mb-2 dark:text-white ">
              General Setting
            </h1>
            <div className=" md:flex lg:flex gap-2"></div>
          </div>
          <div className=" md:flex lg:flex gap-3 my-4">
            <div className="">
              <h1>Web Logo</h1>
              {/* <input type="file" id="" /> */}
              <div>
                <label className="font-semibold">
                  <img
                    src="https://i.ibb.co/fMz0c1s/Vector.png"
                    alt="Logo"
                    className="border w-[180px] mt-2 rounded cursor-pointer p-3 h-[100px] object-contain"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <h1>Fev Icon</h1>
              {/* <input type="file" id="" /> */}
              <div>
                <label className="font-semibold">
                  <img
                    src="https://i.ibb.co/fMz0c1s/Vector.png"
                    alt="Logo"
                    className="border w-[180px] mt-2 rounded cursor-pointer p-3 h-[100px] object-contain"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <h1>App Icon</h1>
              {/* <input type="file" id="" /> */}
              <div>
                <label className="font-semibold">
                  <img
                    src="https://i.ibb.co/fMz0c1s/Vector.png"
                    alt="Logo"
                    className="border w-[180px] mt-2 rounded cursor-pointer p-3 h-[100px] object-contain"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className=" sm:grid md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 mt-5  gap-5 ">
            <label className="block space-y-1.5 undefined">
              <p className="pl-1.5 drop-shadow-sm text-black dark:text-white font-poppins">
                Title
              </p>
              <input
                className="input border border_stroke dark:border-slate-700 rounded-md dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize"
                type="text"
              />
            </label>
            <label className="block space-y-1.5 undefined">
              <p className="pl-1.5 drop-shadow-sm text-black dark:text-white font-poppins">
                Apps Name
              </p>
              <input
                className="input border border_stroke dark:border-slate-700 rounded-md dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize"
                type="text"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
