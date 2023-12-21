import React from "react";
import { Icon } from "@iconify/react";
import { userData } from "./Account-cards/extensionAuth/helper";

import "react-toastify/dist/ReactToastify.css";

const ProfileHdr = () => {
  const { username } = userData();
  // const { username } = localStorage.getItem("first_name" + "last_name");
  // let first_name = localStorage.getItem("first_name");
  // let last_name = localStorage.getItem("last_name");
  // console.log("first_name:", first_name);
  let isAuthenticated = localStorage.getItem("isLogged");
  console.log("isAuthenticated", isAuthenticated);

  return (
    <div className=" border bg-white h-[50px] w-full absolute z-30 ">
      <div className="w-full h-full flex items-center px-4 ">
        <div className="relative flex items-center h-full w-full">
          <div className="flex gap-3 absolute ">
            <div className=" text-blue-950 text-[16px] font-semibold font-['Poppins']">
              Bumbu Farm
            </div>
          </div>
          <div className="absolute right-10 flex ">
            <Icon
              icon="iconamoon:edit-fill"
              style={{ color: "#072060" }}
              className="h-[18px] w-[18px]"
            />
            <div className="flex items-center gap-2">
              <div className="border-l-2 border-gray pl-2 ml-3 flex items-center gap-2">
                <Icon
                  icon="gg:profile"
                  style={{ color: "#072060" }}
                  className="h-[18px] w-[18px]"
                />
                {/* <p>{first_name ? { first_name } : "Null Name"}</p> */}
                <p>{username}</p>
              </div>
              <button className="text-[13px] font-semibold">
                <Icon
                  icon="material-symbols:expand-circle-down-outline-rounded"
                  style={{ color: "#072060" }}
                  className="h-[18px] w-[18px]"
                />
                {/* Log out */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHdr;
