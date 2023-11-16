import React from "react";
import { Icon } from "@iconify/react";
import { userData } from "./Account-cards/extensionAuth/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileHdr = () => {
  const { username } = userData();

  const handleLogout = () => {
    setTimeout(() => {
      // Delaying the execution of the following code by 1.5 seconds
      toast.success(
        "Logged out successfully!",
        {
          hideProgressBar: true,
        },
        2000
      );
      localStorage.clear();
      // localStorage.setItem("isLogged", false); // Updating the `isLogged` key in local storage to `false` upon logging out
      window.location.href = "/"; // Redirecting the user to the homepage upon logging out
    }, 1500); // Delay for 1.5 seconds (1500 milliseconds)
  };

  return (
    <div className="w-full h-[5%]  bg-white shadow border border-white flex items-center px-4">
      <ToastContainer />
      <div className="relative flex items-center border h-full w-full">
        <div className="flex gap-3 absolute">
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
              {/* <p>{username ? { username } : "Null Name"}</p> */}
              <p>{username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-[13px] font-semibold"
            >
              {/* <Icon
                icon="material-symbols:expand-circle-down-outline-rounded"
                style={{ color: "#072060" }}
                className="h-[18px] w-[18px]"
              /> */}
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHdr;
