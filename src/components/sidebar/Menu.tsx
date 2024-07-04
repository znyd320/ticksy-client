import { NavLink, useLocation } from "react-router-dom";


const Menu = () => {
	const { pathname } = useLocation();
	return (
		<ul className="px-1 visible">
			<li>
				<NavLink
					to="/dashboard"
					className={`group flex items-center md:py-3 md:text-sm py-5 px-6 space-x-4 2xl:text-lg3 font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/dashboard" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<svg
						className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Group">
							<path
								id="Vector"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M2.66133 24H7.84931C8.5549 23.9992 9.23137 23.7186 9.73029 23.2197C10.2292 22.7207 10.5099 22.0443 10.5106 21.3387V16.15C10.5097 15.4445 10.229 14.7682 9.73007 14.2694C9.23116 13.7707 8.55479 13.4901 7.84931 13.4894H2.66133C1.95585 13.4901 1.27947 13.7706 0.780555 14.2694C0.281641 14.7682 0.000930563 15.4445 0 16.15L0 21.3387C0.000781651 22.0443 0.281422 22.7207 0.780348 23.2197C1.27927 23.7186 1.95574 23.9992 2.66133 24ZM18.75 0C17.7116 0 16.6966 0.307907 15.8333 0.884785C14.9699 1.46166 14.297 2.2816 13.8996 3.24091C13.5023 4.20022 13.3983 5.25582 13.6009 6.27422C13.8034 7.29262 14.3035 8.22809 15.0377 8.96231C15.7719 9.69654 16.7074 10.1965 17.7258 10.3991C18.7442 10.6017 19.7998 10.4977 20.7591 10.1004C21.7184 9.70301 22.5383 9.0301 23.1152 8.16674C23.6921 7.30339 24 6.28835 24 5.25C23.9983 3.85813 23.4447 2.52374 22.4605 1.53954C21.4763 0.555336 20.1419 0.00167468 18.75 0ZM2.66133 10.5106H7.84931C8.55488 10.5098 9.2313 10.2291 9.73021 9.73021C10.2291 9.2313 10.5098 8.55488 10.5106 7.84931V2.66095C10.5098 1.95543 10.2291 1.27905 9.73017 0.780202C9.23126 0.281354 8.55484 0.000769082 7.84931 0L2.66133 0C1.9558 0.000769082 1.27939 0.281354 0.780467 0.780202C0.281548 1.27905 0.000868503 1.95543 0 2.66095L0 7.84931C0.000855931 8.55488 0.28152 9.2313 0.78043 9.73021C1.27934 10.2291 1.95576 10.5098 2.66133 10.5106ZM21.3387 13.4894H16.1504C15.4449 13.4901 14.7685 13.7706 14.2696 14.2694C13.7707 14.7682 13.49 15.4445 13.489 16.15V21.3387C13.4898 22.0443 13.7705 22.7207 14.2694 23.2197C14.7683 23.7186 15.4448 23.9992 16.1504 24H21.3387C22.0442 23.9992 22.7207 23.7185 23.2196 23.2196C23.7185 22.7207 23.9992 22.0442 24 21.3387V16.15C23.999 15.4445 23.7183 14.7683 23.2194 14.2695C22.7205 13.7707 22.0441 13.4902 21.3387 13.4894Z"
							/>
						</g>
					</svg>
					<span>Dashboard</span>
				</NavLink>
			</li>
			{/* Dashboard  ----------- End*/}
			<li>
				<NavLink
					to="tickets"
					className={`group flex justify-between items-center md:py-3 md:text-sm py-5 px-6 2xl:text-lg3 font-Lato font-medium hover:bg-gradient-to-r from-[#DEE5F7] duration-200 to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] cursor-pointer ${
						pathname === "/tickets" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<div className="flex space-x-4 items-center">
						<svg
							className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="ticket +  with backgroun">
								<path
									id="Vector"
									d="M23.6059 1.94356C23.5667 1.10469 22.8954 0.433424 22.0566 0.39421L13.6682 0.00183C13.4419 -0.00891824 13.2159 0.0277689 13.0047 0.109536C12.7934 0.191302 12.6016 0.316342 12.4416 0.476624L0.476535 12.4417C0.171412 12.7469 0 13.1608 0 13.5923C0 14.0239 0.171412 14.4377 0.476535 14.7429L9.25722 23.5235C9.40814 23.6748 9.58748 23.7948 9.78493 23.8766C9.98238 23.9584 10.194 24.0003 10.4078 24C10.6215 24.0003 10.8331 23.9583 11.0306 23.8765C11.2281 23.7947 11.4074 23.6748 11.5584 23.5235L23.5233 11.5585C23.8471 11.2347 24.0196 10.7894 23.9982 10.3319L23.6059 1.94356ZM20.5408 6.1901C19.7867 6.94419 18.564 6.94419 17.8099 6.1901C17.0559 5.43601 17.0559 4.21331 17.8099 3.45922C18.564 2.70513 19.7867 2.70513 20.5408 3.45922C21.2949 4.21331 21.295 5.43593 20.5408 6.1901Z"
								/>
							</g>
						</svg>
						<span>Tickets</span>
					</div>
					<svg
						className="md:w-[12px] md:h-[12px] w-2 h-[14px] fill-mirage300 group-hover:fill-[#0039BD] group-hover:-rotate-90"
						viewBox="0 0 8 14"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="Vector"
							d="M8 6.99996L1.51351 13.4865L0 11.9729L4.97297 6.99996L0 2.02699L1.51351 0.513477L8 6.99996Z"
						/>
					</svg>
				</NavLink>
				{pathname === "/tickets" && (
					<ul className="flex flex-col">
						<li className="py-4 md:py-3 md:text-sm px-6 2xl:text-lg3 text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer">
							<span>Assigned to Me</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-successDisable flex items-center justify-center font-bold p-1 text-[#545454]">
								<span className="md:text-xs-100">10</span>
							</div>
						</li>
						<li className="py-4 px-6 md:py-3 md:text-sm 2xl:text-lg3 text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer">
							<span>Starred Tickets</span>
							<div className="flex items-center space-x-3">
								{/* <img src={star} alt="starred Tickets" /> */}
								<svg
								className="md:w-[18px] md:h-[18px] w-5 h-5"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										id="Vector"
										d="M6.85 15.6053L10 13.6053L13.15 15.6316L12.325 11.8421L15.1 9.31579L11.45 8.97368L10 5.39474L8.55 8.94737L4.9 9.28947L7.675 11.8421L6.85 15.6053ZM3.825 20L5.45 12.6053L0 7.63158L7.2 6.97368L10 0L12.8 6.97368L20 7.63158L14.55 12.6053L16.175 20L10 16.0789L3.825 20Z"
										fill="#545454"
									/>
								</svg>

								<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-secondaryDisable flex items-center justify-center font-bold p-1 text-secondaryDefault">
									<span className="md:text-xs-100">14</span>
								</div>
							</div>
						</li>
						<li className="py-4 px-6 md:py-3 md:text-sm 2xl:text-lg3 text-lg3 text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer">
							<span>Close Tickets</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-mirage25 flex items-center justify-center font-bold p-1 text-mirage300">
								<span className="md:text-xs-100">12</span>
							</div>
						</li>
					</ul>
				)}
			</li>
			{/* Tickets ----------- End*/}
			<li>
				<NavLink
					to="/categories"
					className={`group flex items-center py-5 px-6 md:py-3 md:text-sm space-x-4 2xl:text-lg3 font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/categories" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<svg
						className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Group">
							<path
								id="Vector"
								d="M6.69455 10.1417H16.0419C17.0524 10.1417 17.684 9.00788 17.0524 8.25197L12.3788 0.566929C11.8735 -0.188976 10.7367 -0.188976 10.2314 0.566929L5.55771 8.25197C5.05245 9.13386 5.68403 10.1417 6.69455 10.1417Z"
							/>
							<path
								id="Vector_2"
								d="M18.3156 24C21.4549 24 23.9998 21.4617 23.9998 18.3307C23.9998 15.1996 21.4549 12.6614 18.3156 12.6614C15.1763 12.6614 12.6313 15.1996 12.6313 18.3307C12.6313 21.4617 15.1763 24 18.3156 24Z"
							/>
							<path
								id="Vector_3"
								d="M8.84211 13.2914H1.26316C0.631579 13.2914 0 13.9213 0 14.5512V22.1103C0 22.7402 0.631579 23.3701 1.26316 23.3701H8.84211C9.47369 23.3701 10.1053 22.7402 10.1053 22.1103V14.5512C10.1053 13.9213 9.47369 13.2914 8.84211 13.2914Z"
							/>
						</g>
					</svg>
					<span>Categories</span>
				</NavLink>
			</li>
			{/* Categories ----------- End*/}
			<li>
				<NavLink
					to="/knowledge"
					className={`group flex justify-between items-center py-5 px-6 md:py-3 md:text-sm 2xl:text-lg3 font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/knowledge" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<div className="flex space-x-4 items-center">
						<svg
							className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
							viewBox="0 0 22 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="Group">
								<path
									id="Vector"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M21.7674 4.18605V19.814C21.7674 22.1257 19.8932 24 17.5814 24H4.18605C1.87421 24 0 22.1257 0 19.814V4.18605C0 1.87421 1.87421 0 4.18605 0H17.5814C19.8932 0 21.7674 1.87421 21.7674 4.18605ZM16.4651 8.93023H5.30233C4.84019 8.93023 4.46512 9.3053 4.46512 9.76744C4.46512 10.2296 4.84019 10.6047 5.30233 10.6047H16.4651C16.9273 10.6047 17.3023 10.2296 17.3023 9.76744C17.3023 9.3053 16.9273 8.93023 16.4651 8.93023ZM16.4651 13.3953H5.30233C4.84019 13.3953 4.46512 13.7704 4.46512 14.2326C4.46512 14.6947 4.84019 15.0698 5.30233 15.0698H16.4651C16.9273 15.0698 17.3023 14.6947 17.3023 14.2326C17.3023 13.7704 16.9273 13.3953 16.4651 13.3953ZM10.8837 4.46512H5.30233C4.84019 4.46512 4.46512 4.84019 4.46512 5.30233C4.46512 5.76447 4.84019 6.13953 5.30233 6.13953H10.8837C11.3459 6.13953 11.7209 5.76447 11.7209 5.30233C11.7209 4.84019 11.3459 4.46512 10.8837 4.46512ZM16.4651 17.8605H5.30233C4.84019 17.8605 4.46512 18.2355 4.46512 18.6977C4.46512 19.1598 4.84019 19.5349 5.30233 19.5349H16.4651C16.9273 19.5349 17.3023 19.1598 17.3023 18.6977C17.3023 18.2355 16.9273 17.8605 16.4651 17.8605Z"
								/>
							</g>
						</svg>
						<span>Knowledge</span>
					</div>
					<svg
						className="md:w-[12px] md:h-[12px] w-2 h-[14px] fill-mirage300 group-hover:fill-[#0039BD] group-hover:-rotate-90"
						viewBox="0 0 8 14"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="Vector"
							d="M8 6.99996L1.51351 13.4865L0 11.9729L4.97297 6.99996L0 2.02699L1.51351 0.513477L8 6.99996Z"
						/>
					</svg>
				</NavLink>
				{pathname === "/knowledge" && (
					<ul className="flex flex-col">
						<li className="py-4 px-6 md:py-3 md:text-sm 2xl:text-lg3 text-[#545454] font-medium flex items-center justify-between hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer">
							<span>Article</span>
							<div className="w-7 h-7 md:w-6 md:h-6 rounded-full bg-successDisable flex items-center justify-center font-bold p-1 text-[#545454]">
								<span className="md:text-xs-100">10</span>
							</div>
						</li>
					</ul>
				)}
			</li>
			{/* Knowledge  ----------- end*/}
			<li>
				<NavLink
					to="/customers"
					className={`group flex items-center space-x-4 py-5 px-6 md:py-3 md:text-sm 2xl:text-lg3 font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/customers" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<svg
						className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
						viewBox="0 0 28 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Group">
							<path
								id="Vector"
								d="M13.7529 9.34759C16.3342 9.34759 18.4267 7.25506 18.4267 4.6738C18.4267 2.09253 16.3342 0 13.7529 0C11.1716 0 9.0791 2.09253 9.0791 4.6738C9.0791 7.25506 11.1716 9.34759 13.7529 9.34759Z"
							/>
							<path
								id="Vector_2"
								d="M23.2076 9.34763C24.8395 9.34763 26.1623 8.02477 26.1623 6.39293C26.1623 4.7611 24.8395 3.43823 23.2076 3.43823C21.5758 3.43823 20.2529 4.7611 20.2529 6.39293C20.2529 8.02477 21.5758 9.34763 23.2076 9.34763Z"
							/>
							<path
								id="Vector_3"
								d="M4.29796 9.34763C5.9298 9.34763 7.25266 8.02477 7.25266 6.39293C7.25266 4.7611 5.9298 3.43823 4.29796 3.43823C2.66613 3.43823 1.34326 4.7611 1.34326 6.39293C1.34326 8.02477 2.66613 9.34763 4.29796 9.34763Z"
							/>
							<path
								id="Vector_4"
								d="M7.20893 12.0009C6.04585 11.048 4.99253 11.1741 3.64771 11.1741C1.63637 11.1741 0 12.8008 0 14.7998V20.6667C0 21.5349 0.70859 22.2408 1.57996 22.2408C5.34188 22.2408 4.88868 22.3089 4.88868 22.0786C4.88868 17.9212 4.39627 14.8725 7.20893 12.0009Z"
							/>
							<path
								id="Vector_5"
								d="M15.0334 11.1961C12.6844 11.0002 10.6427 11.1983 8.88169 12.6519C5.93467 15.0125 6.50181 18.1908 6.50181 22.079C6.50181 23.1078 7.3388 23.9604 8.38315 23.9604C19.7229 23.9604 20.1742 24.3262 20.8466 22.8371C21.0671 22.3335 21.0067 22.4935 21.0067 17.676C21.0067 13.8496 17.6935 11.1961 15.0334 11.1961ZM23.8593 11.1746C22.5071 11.1746 21.4596 11.0497 20.2981 12.0014C23.0898 14.8516 22.6184 17.6924 22.6184 22.079C22.6184 22.3108 22.2421 22.2413 25.8707 22.2413C26.7732 22.2413 27.507 21.5101 27.507 20.6114V14.8003C27.507 12.8013 25.8707 11.1746 23.8593 11.1746Z"
							/>
						</g>
					</svg>

					<span>Customer&apos;s</span>
				</NavLink>
			</li>
			{/* Customers  ----------- end*/}
			<li>
				<NavLink
					to="/agents"
					className={`group flex items-center space-x-4 py-5 px-6 md:py-3 md:text-sm 2xl:text-lg3 font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/agents" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<svg
						className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Group">
							<path
								id="Vector"
								d="M9.47261 10.4347C12.3791 10.4347 14.7353 8.09875 14.7353 5.21727C14.7353 2.33578 12.3791 -0.00012207 9.47261 -0.00012207C6.56613 -0.00012207 4.20996 2.33578 4.20996 5.21727C4.20996 8.09875 6.56613 10.4347 9.47261 10.4347Z"
							/>
							<path
								id="Vector_2"
								d="M12.1399 21.704C11.8774 21.2514 11.7574 20.7314 11.7955 20.2107C11.8336 19.69 12.0279 19.1925 12.3535 18.7822C12.0278 18.372 11.8334 17.8745 11.7953 17.3538C11.7572 16.8331 11.8772 16.313 12.1399 15.8605L12.9914 14.3996C13.2555 13.9479 13.65 13.5848 14.124 13.3572C14.598 13.1296 15.1298 13.0478 15.6511 13.1224C15.6859 13.0368 15.7301 12.9565 15.7732 12.8751C15.1921 12.644 14.5721 12.524 13.946 12.5214H4.99952C3.67408 12.523 2.4034 13.0458 1.46617 13.9749C0.528941 14.9041 0.00167108 16.1638 0 17.4779L0 21.1301C0 21.5621 0.35365 21.9127 0.789398 21.9127H12.2609L12.1399 21.704Z"
							/>
							<path
								id="Vector_3"
								d="M22.844 19.2721C22.865 19.1104 22.8935 18.9497 22.8935 18.7827C22.8935 18.6147 22.864 18.455 22.844 18.2933L23.7923 17.5817C23.8946 17.5049 23.9651 17.3936 23.9905 17.2689C24.0159 17.1442 23.9945 17.0146 23.9302 16.9044L23.0787 15.4436C23.0146 15.3335 22.9122 15.2503 22.7907 15.2098C22.6692 15.1693 22.5369 15.1741 22.4188 15.2234L21.3273 15.6794C21.0631 15.474 20.7734 15.3032 20.4653 15.1712L20.32 14.0224C20.3041 13.8962 20.2423 13.7801 20.1462 13.696C20.05 13.6118 19.9262 13.5653 19.798 13.5653H18.096C17.9678 13.5653 17.844 13.6118 17.7478 13.696C17.6517 13.7801 17.5899 13.8962 17.574 14.0224L17.4287 15.1712C17.1207 15.3034 16.831 15.4742 16.5667 15.6794L15.4752 15.2234C15.3571 15.1741 15.2248 15.1693 15.1033 15.2098C14.9818 15.2503 14.8794 15.3335 14.8153 15.4436L13.9638 16.9044C13.8995 17.0146 13.8781 17.1442 13.9035 17.2689C13.9289 17.3936 13.9994 17.5049 14.1017 17.5817L15.05 18.2933C15.029 18.455 15.0005 18.6157 15.0005 18.7827C15.0005 18.9507 15.03 19.1104 15.05 19.2721L14.1017 19.9837C13.9994 20.0605 13.9289 20.1718 13.9035 20.2965C13.8781 20.4212 13.8995 20.5508 13.9638 20.661L14.8153 22.1229C14.8794 22.233 14.9818 22.3161 15.1033 22.3566C15.2248 22.3972 15.3571 22.3923 15.4752 22.343L16.5667 21.886C16.833 22.0874 17.1161 22.2648 17.4287 22.3942L17.574 23.543C17.6066 23.8039 17.8297 24.0001 18.095 24.0001H19.7969C19.9252 24.0001 20.049 23.9536 20.1451 23.8694C20.2412 23.7853 20.3031 23.6692 20.319 23.543L20.4642 22.3942C20.7768 22.2648 21.061 22.0864 21.3262 21.886L22.4177 22.342C22.5359 22.3913 22.6681 22.3961 22.7897 22.3556C22.9112 22.315 23.0136 22.2319 23.0777 22.1218L23.9291 20.6599C23.9934 20.5498 24.0149 20.4202 23.9895 20.2954C23.9641 20.1707 23.8936 20.0595 23.7913 19.9827L22.844 19.2721ZM18.9465 20.8697C18.6661 20.8759 18.3874 20.8266 18.1265 20.7246C17.8657 20.6226 17.628 20.47 17.4275 20.2757C17.227 20.0814 17.0676 19.8493 16.9588 19.5931C16.85 19.3369 16.7939 19.0617 16.7938 18.7838C16.7937 18.5058 16.8497 18.2306 16.9584 17.9743C17.0671 17.718 17.2263 17.4859 17.4267 17.2915C17.6272 17.0971 17.8647 16.9443 18.1255 16.8422C18.3863 16.7401 18.6651 16.6906 18.9454 16.6968C19.4954 16.7088 20.0188 16.9339 20.4036 17.3237C20.7883 17.7136 21.0038 18.2373 21.0039 18.7827C21.0041 19.3281 20.7888 19.8519 20.4043 20.242C20.0198 20.632 19.4965 20.8573 18.9465 20.8697Z"
							/>
						</g>
					</svg>

					<span>Manage Agent</span>
				</NavLink>
			</li>
			{/* Agents  ----------- end*/}
			<li>
				<NavLink
					to="/analytics"
					className={`group flex items-center space-x-4 py-5 px-6 md:py-3 md:text-sm 2xl:text-lg3 font-Lato font-[500] hover:bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] hover:border-l-8 hover:border-[#0039BD] hover:rounded-l-[4px] hover:text-[#0039BD] duration-200 cursor-pointer ${
						pathname === "/analytics" &&
						"bg-gradient-to-r from-[#DEE5F7] to-[rgba(222, 229, 247, 0.00)] border-l-8 border-[#0039BD] rounded-l-[4px] text-[#0039BD]"
					}`}
				>
					<svg
						className="md:w-[16px] md:h-[16px] w-6 h-6 fill-mirage300 group-hover:fill-[#0039BD]"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Group">
							<g id="Layer 2">
								<path
									id="Vector"
									d="M5.14286 13.7143H1.71429C0.767512 13.7143 0 14.4818 0 15.4286V22.2857C0 23.2325 0.767512 24 1.71429 24H5.14286C6.08963 24 6.85714 23.2325 6.85714 22.2857V15.4286C6.85714 14.4818 6.08963 13.7143 5.14286 13.7143Z"
								/>
								<path
									id="Vector_2"
									d="M13.7141 6.85712H10.2856C9.3388 6.85712 8.57129 7.62463 8.57129 8.5714V22.2857C8.57129 23.2325 9.3388 24 10.2856 24H13.7141C14.6609 24 15.4284 23.2325 15.4284 22.2857V8.5714C15.4284 7.62463 14.6609 6.85712 13.7141 6.85712Z"
								/>
								<path
									id="Vector_3"
									d="M22.2859 0H18.8574C17.9106 0 17.1431 0.767512 17.1431 1.71429V22.2857C17.1431 23.2325 17.9106 24 18.8574 24H22.2859C23.2327 24 24.0002 23.2325 24.0002 22.2857V1.71429C24.0002 0.767512 23.2327 0 22.2859 0Z"
								/>
							</g>
						</g>
					</svg>

					<span>Analytics/Report&apos;s</span>
				</NavLink>
			</li>
			{/* Analytics  ----------- end*/}
		</ul>
	);
};

export default Menu;
