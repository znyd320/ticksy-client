
import tableImg from "../../assets/table-images/table-image.png"
import assignedImg from "../../assets/table-images/assigned-image.png"
import flagImg from "../../assets/table-images/flag.svg"

const TableOfTickets = () => {
	return (
			<table className="w-full">
				{/* head */}
				<thead className="bg-secondaryDisable px-6 border-l-[5px] hover:border-l-secondaryDisable">
					<tr>
						<th className="pl-6 pr-3 py-4 text-left ">
							<label className="flex items-center -gap--rounded-md">
								<input
									type="checkbox"
									className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
								/>
								<span className="text-txtColor font-Lato text-base2 md:text-xs-100 capitalize font-normal">
									Ticket Item
								</span>
							</label>
						</th>
						<th className="py-4 px-3 text-left  text-txtColor font-Lato font-normal text-base2 md:text-xs-100 capitalize">
							ticket titile
						</th>
						<th className="py-4 px-3 text-left  text-txtColor font-Lato font-normal text-base2 md:text-xs-100 capitalize">
							client name
						</th>
						<th className="py-4 px-3 text-left  text-txtColor font-Lato font-normal text-base2 md:text-xs-100 capitalize">
							Assigned To
						</th>
						<th className="pr-6 pl-3 py-4 text-left text-txtColor font-Lato font-normal text-base2 md:text-xs-100 capitalize">
							Status
						</th>
					</tr>
				</thead>
				{/* body */}
				<tbody>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
					<tr className="odd:bg-white even:bg-slate-50 hover:bg-secondaryDisable cursor-pointer border-l-[5px] border-l-transparent hover:border-l-[#234390]">
						<td className="pl-6 py-2">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded-sm focus:ring-0 focus:ring-offset-0 checked:border-successDefault checked:text-successDefault cursor-pointer"
									/>
								</label>
								<div className="h-7 w-7">
									<img
										className="w-full rounded-full"
										src={tableImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[9px]">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[12px]">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-2 text-left">
							<span className="text-txtColor font-Lato text-sm font-normal capitalize md:text-[10px] leading-none">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-2 text-left">
							<div className="flex flex-col gap-2">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									Koss, Stracke and Bernier
								</span>
								<span className="inline-flex gap-1 text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
									<img src={flagImg} alt="flag" />
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-2 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-[10px]">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-[10px] p-2 bg-secondaryDisable font-Lato text-txtColor capitalize font-semibold rounded">Client replied</button>
						</td>
					</tr>
				</tbody>
			</table>

	);
};

export default TableOfTickets;
