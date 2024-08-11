import FilterTickets from "../../components/dashboard-page/FilterTickets";
import TableOfTickets from "../../components/dashboard-page/TableOfTickets";

function Dashboard() {

  return (
    <div className="flex justify-between items-start">
      <div className="w-3/4 overflow-x-auto">
        <TableOfTickets/>
      </div>
      <div className="w-[23%]">
      <FilterTickets/>
      </div>
    </div>
  );
}



export default Dashboard;
