import React from "react";

const BusInfo = () => {
  return (
    <div className="absolute">
      <div className=" w-[445px] h-[400px] ml-[19%] text-center  pt-20">
        <div>
          <h1 className=" text-blue-900 text-[28px] font-bold font-['Poppins']">
            Enter Business ID
          </h1>
          {/* fill form  */}
          <input
            //   type={
            //     text === "Password" || text === "Re-password"
            //       ? "password"
            //       : "text"
            //   }
            type="text"
            onChange={(e) => e.target.value}
            className="text-gray-500 text-[28px] w-full h-[40px] border-b-2 border-blue-900  mt-5 focus:border-red-500 text-center pb-3"
          ></input>

          {/* <div className="w-full h-[0px] border border-blue-900 mt-5"></div> */}
        </div>
      </div>
    </div>
  );
};

export default BusInfo;
