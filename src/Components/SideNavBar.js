import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <>
      <div className="w-[245px] h-full bg-primaryColor px-6 py-7 z-[3]">
        <div>
          <div className="flex items-center gap-1">
            <Icon
              icon="solar:box-bold-duotone"
              style={{ color: "white" }}
              className="h-[53px] w-[48px]"
            />
            <h1 className="w-[100px] h-[29.61px] text-center text-white text-xl font-bold font-['Poppins']">
              CloudBox
            </h1>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col gap-7 px-4 py-6 mt-5">
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="material-symbols:dashboard"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="/dashboard">
                <h1 className="text-center text-white text-[15px] font-['Poppins']">
                  Dashboard
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="fluent:calendar-date-28-filled"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="/calendar">
                <h1 className="text-center text-white text-[15px] font-['Poppins']">
                  Calendar
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="tabler:mail-filled"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="/mail">
                <h1 className="text-center text-white text-[15px] font-['Poppins']">
                  Mail
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="mingcute:chat-4-fill"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="/report">
                <h1 className="text-center text-white text-[15px] font-['Poppins']">
                  Reports
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="eos-icons:project"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="#">
                <h1 className="text-center text-white text-[15px] font-['Poppins']">
                  Statistics
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="icon-park-solid:notes"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="/file_manager">
                <h1 className="w-auto text-center text-white text-[15px] font-['Poppins']">
                  File Manager
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <Icon
                icon="eos-icons:admin"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <Link to="/notes">
                <h1 className="text-center text-white text-[15px] font-['Poppins']">
                  Notes
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <div className=" mt-10 flex flex-col gap-3">
          <div>
            <div className="flex gap-1 items-center  px-4 py-2  ">
              <Icon
                icon="solar:settings-bold"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <h1 className="text-center text-white text-[15px] font-['Poppins']">
                Settings
              </h1>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center px-4 py-2 ">
              <Icon
                icon="ic:round-logout"
                style={{ color: "white" }}
                className="h-[24px] w-[24px]"
              />
              <h1 className="text-center text-white text-[15px] font-['Poppins']">
                Log out
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
