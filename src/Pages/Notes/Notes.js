import React from "react";
import SideNavBar from "../../Components/SideNavBar";
import ProfileHdr from "../../Components/ProfileHdr";

const Notes = () => {
  return (
    <>
      <div className="flex w-screen h-screen ">
        <SideNavBar />
        <div className="w-full h-full">
          <ProfileHdr />
          <div className="flex border w-full h-[95%] bg-[#EBEEF5] ">
            <div
              // bg-[#EBEEF5]
              className="
            w-[100%] mt-8"
            >
              {/* Content Here! */}
              Notes
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
