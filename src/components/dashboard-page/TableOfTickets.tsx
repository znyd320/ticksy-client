
import tableImg from "../../assets/table-images/table-image.png"
import assignedImg from "../../assets/table-images/assigned-image.png"

const TableOfTickets = () => {
	return (
			<table className="w-full">
				{/* head */}
				<thead className="bg-secondaryDisable px-6">
					<tr>
						<th className="pl-6 pr-3 py-4 text-left ">
							<label className="flex items-center -gap--rounded-md">
								<input
									type="checkbox"
									className="border-2 border-[#A4A4A4] appearance-none rounded focus:ring-0 focus:ring-offset-0 text-black"
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
					<tr className="odd:bg-white even:bg-slate-50">
						<td className="pl-6 pr-3 py-4">
							<div className="flex items-center gap-2">
								<label>
									<input
										type="checkbox"
										className="border-2 border-[#A4A4A4] appearance-none rounded focus:ring-0 focus:ring-offset-0 text-black"
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
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
										Theme Name
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
										#6784578
									</span>
								</div>
							</div>
						</td>
						<td className="py-4 px-3 text-left">
							<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
								What are your delivery and shipping policies..................?
							</span>
						</td>
						<td className="py-4 px-3 text-left">
							<div className="flex flex-col gap-1">
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
									Koss, Stracke and Bernier
								</span>
								<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
									(GMT+6) 11:30 AM
								</span>
							</div>
						</td>
						<td className="py-4 px-3 text-left">
							<div className="flex items-center gap-2">
								<div className="h-7 w-7">
									<img
										className="rounded-full"
										src={assignedImg}
										alt="Avatar Tailwind CSS Component"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
										Michael Wood
									</span>
									<span className="text-txtColor font-Lato text-sm leading-none font-normal capitalize md:text-xs-100">
										Updated 2 Hours Ago
									</span>
								</div>
							</div>
						</td>
						<td className="pr-6 pl-3">
							<button className="md:text-xs-100">details</button>
						</td>
					</tr>
				</tbody>
			</table>

	);
};

export default TableOfTickets;
