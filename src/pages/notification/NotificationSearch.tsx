const NotificationSearch = ({
  value,
  setValue,
}: {
  value: string;
  setValue: any;
}) => {
  return (
    <div className="relative w-full my-2 ">
      <input
        type="search"
        className=" w-full border border-gray-300 rounded-md py-2 pr-4  focus:border-none   focus:border-[#1ea474]"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {/* <button className="m-2  absolute top-0 right-0">
        <CiSearch size={20} color="gray" />
      </button> */}
    </div>
  );
};

export default NotificationSearch;
