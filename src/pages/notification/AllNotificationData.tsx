import nameProfile from "../../utils/nameProfile";

interface Props {
  handler: () => void;
  title: string;
  active: string;
  subTitle?: string;
}
const AllNotificationData = ({ handler, title, active, subTitle }: Props) => {
  return (
    <>
      <button
        className={`p-2 w-full my-2 border border-gray-2200 rounded-md hover:bg-slate-200 ${
          active === title && "bg-slate-200"
        } transition duration-100 ease-in`}
        onClick={handler}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className=" flex h-10 w-10 items-center justify-center rounded-full  border border-gray-300">
              {nameProfile(title || "")}
            </div>

            <div className="text-left">
              <h6>{title}</h6>
              {subTitle && (
                <p className="text-gray-600 text-xs font-light">{subTitle}</p>
              )}
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default AllNotificationData;
