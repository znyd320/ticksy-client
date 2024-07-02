import searchImg from "../../assets/headerImages/search.svg";

const Searchbar = () => {
	return (
		<div className="md:w-[500px] border rounded-md p-3 ml-[56px]">
			<form className="flex items-center">
				<input
					type="text"
					name="search"
					id="search"
					className="placeholder:text-[#c9c9c9] p-0 font-Lato text-sm leading-none focus:outline-none focus:ring-0 w-full border-none line-clamp-1 text-ellipsis"
					placeholder="Search for Tickets...."
				/>
				<img src={searchImg} alt="" className="cursor-pointer" />
			</form>
		</div>
	);
};

export default Searchbar;
