interface props {
  children: any;
  title: string;
}

function DashboardCard({ children, title }: props) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <div className="px-5 py-2 bg-[#00A476] text-white border-b font-[500] text-[23px]">
        {title}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default DashboardCard;
