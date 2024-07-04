import allTickets from "../../assets/headerImages/tickets-section/total.svg";

const AllTickets = () => {
	return (
		<div className="group p-6 rounded-2xl shadow-tickets-box flex items-center justify-between hover:bg-total-tickets-gradiant cursor-pointer hover:shadow-none">
			<div className="flex flex-col -gap--rounded-md">
				<div className="flex items-center gap-[10px]">
					<h4 className="font-Lato text-successDefault leading-none font-bold group-hover:text-white">
						0,000
					</h4>
					<svg
						className="md:w-4 md:h-4 w-7 h-7 fill-[#12B76A] group-hover:fill-white"
						viewBox="0 0 28 28"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Group">
							<path
								id="Vector"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.410157 20.0085C0.67286 19.7461 1.02911 19.5986 1.40058 19.5986C1.77204 19.5986 2.12829 19.7461 2.39099 20.0085L7.00408 24.6188L11.6172 20.0085C11.8814 19.7535 12.2352 19.6124 12.6025 19.6156C12.9698 19.6188 13.3212 19.766 13.5809 20.0256C13.8407 20.2852 13.988 20.6363 13.9912 21.0034C13.9944 21.3705 13.8532 21.7241 13.598 21.9882L7.99449 27.5882C7.73179 27.8507 7.37554 27.9981 7.00408 27.9981C6.63261 27.9981 6.27636 27.8507 6.01366 27.5882L0.410157 21.9882C0.147534 21.7256 0 21.3696 0 20.9983C0 20.6271 0.147534 20.2711 0.410157 20.0085Z"
							/>
							<path
								id="Vector_2"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M7.00634 8.39979C7.37788 8.39979 7.7342 8.54729 7.99691 8.80984C8.25963 9.0724 8.40722 9.4285 8.40722 9.7998V26.6C8.40722 26.9713 8.25963 27.3274 7.99691 27.5899C7.7342 27.8525 7.37788 28 7.00634 28C6.63481 28 6.27849 27.8525 6.01578 27.5899C5.75306 27.3274 5.60547 26.9713 5.60547 26.6V9.7998C5.60547 9.4285 5.75306 9.0724 6.01578 8.80984C6.27849 8.54729 6.63481 8.39979 7.00634 8.39979ZM20.0247 0.409905C20.2874 0.147443 20.6436 0 21.0151 0C21.3866 0 21.7428 0.147443 22.0055 0.409905L27.609 6.00996C27.8642 6.27401 28.0054 6.62766 28.0022 6.99474C27.999 7.36181 27.8517 7.71296 27.5919 7.97253C27.3322 8.2321 26.9809 8.37934 26.6136 8.38253C26.2462 8.38572 25.8924 8.24461 25.6282 7.98958L21.0151 3.37934L16.402 7.98958C16.2728 8.1233 16.1182 8.22996 15.9473 8.30333C15.7764 8.3767 15.5926 8.41532 15.4066 8.41694C15.2205 8.41856 15.0361 8.38313 14.8639 8.31274C14.6918 8.24234 14.5353 8.13839 14.4038 8.00694C14.2723 7.87549 14.1683 7.71917 14.0978 7.54711C14.0274 7.37506 13.9919 7.1907 13.9936 7.00481C13.9952 6.81892 14.0338 6.63521 14.1072 6.4644C14.1807 6.29359 14.2874 6.13911 14.4212 6.00996L20.0247 0.409905Z"
							/>
							<path
								id="Vector_3"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M21.0063 0C21.3779 0 21.7342 0.147501 21.9969 0.410055C22.2596 0.672608 22.4072 1.02871 22.4072 1.40001V18.2002C22.4072 18.5715 22.2596 18.9276 21.9969 19.1901C21.7342 19.4527 21.3779 19.6002 21.0063 19.6002C20.6348 19.6002 20.2785 19.4527 20.0158 19.1901C19.7531 18.9276 19.6055 18.5715 19.6055 18.2002V1.40001C19.6055 1.02871 19.7531 0.672608 20.0158 0.410055C20.2785 0.147501 20.6348 0 21.0063 0Z"
							/>
						</g>
					</svg>
				</div>
				<h4 className="text-txtColor font-Lato leading-none font-medium capitalize group-hover:text-white">
					All Tickets
				</h4>
			</div>
			<div className="md:h-[60px] md:w-[60px] bg-white flex justify-center items-center rounded-full">
				<img src={allTickets} alt="" className="md:w-8 md:h-8" />
			</div>
		</div>
	);
};

export default AllTickets;
