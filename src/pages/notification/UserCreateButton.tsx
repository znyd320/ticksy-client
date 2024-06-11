/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import { useGetGroupQuery } from "../../features/group/group";
import { useGetAllUserQuery } from "../../features/user/user";
import { User } from "../createGroup/CreateGroup";
import AllNotificationData from "./AllNotificationData";
import NotificationSearch from "./NotificationSearch";

const UserCreateButton = ({ setData, state, setState, selectedData }: any) => {
  // * Local State
  const [search, setSearch] = useState("");
  const [gSearch, setGSearch] = useState("");

  // * Hokes
  const { data, isLoading: userLoading } = useGetAllUserQuery({
    search: search,
  });
  const { data: group, isLoading: groupLoading } = useGetGroupQuery({
    search: gSearch,
  });

  return (
    <>
      <div className="flex gap-1 mt-2">
        <button
          onClick={() => setState(1)}
          className={`py-3 px-5 border w-1/2 hover:bg-[#1ea474] hover:text-white active:bg[bg-[#1ea474] rounded transition duration-300 ease-in-out ${
            state === 1 && "bg-[#1ea474] text-white"
          }`}
        >
          Send to User
        </button>
        <button
          onClick={() => setState(2)}
          className={`py-3 px-5 border w-1/2 hover:bg-[#1ea474] hover:text-white active:bg[bg-[#1ea474] rounded transition duration-300 ease-in-out ${
            state === 2 && "bg-[#1ea474] text-white"
          }`}
        >
          Send to Group
        </button>
      </div>

      {state === 1 && (
        <>
          <NotificationSearch value={search} setValue={setSearch} />

          {userLoading && "Loading..."}

          {data?.payload?.data?.length > 0 &&
            data?.payload.data?.map((item: User, index: number) => {
              return (
                <div key={index}>
                  <AllNotificationData
                    title={item.fullName}
                    handler={() => {
                      setData(item);
                    }}
                    active={selectedData?.fullName}
                  />
                </div>
              );
            })}
        </>
      )}

      {state === 2 && (
        <>
          <NotificationSearch value={gSearch} setValue={setGSearch} />
          {groupLoading && "Loading..."}
          {group?.payload?.data?.length > 0 &&
            [...group?.payload?.data]
              ?.reverse()
              ?.map(
                (
                  item: { groupName: string; userIds: [string] },
                  index: number
                ) => {
                  return (
                    <div key={index}>
                      <AllNotificationData
                        handler={() => {
                          setData(item);
                        }}
                        title={item?.groupName}
                        active={selectedData?.groupName}
                        subTitle={item?.userIds?.length + " Users"}
                      />
                    </div>
                  );
                }
              )}
        </>
      )}
    </>
  );
};

export default UserCreateButton;
