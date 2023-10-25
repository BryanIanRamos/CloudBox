import React, { useState } from "react";
import Screen from "../Components/LoginScreen.js";
import Create from "../Components/Account-cards/Create.js";

function Verify() {
  return (
    <>
      <Screen
        position1={"left"}
        position2={"right"}
        Card1={UserType}
        Card2={Card2}
      />
    </>
  );
}

function UserType() {
  return (
    <div className=" h-[200px] w-[900px] ml-[20%]">
      <h1 className="text-center text-blue-900 text-[28px] font-bold font-['Poppins']">
        Select Status
      </h1>
      <div class="w-[393px] border border-blue-900 mt-5"></div>
      <div className="mt-[50px] flex gap-4 justify-center">
        <button className="w-[167px] h-[43px] bg-blue-800 hover:bg-blue-700 border border-black text-white font-['Poppins']">
          Owner
        </button>
        <button className="w-[167px] h-[43px] bg-blue-800 hover:bg-blue-700 border border-black text-white font-['Poppins']">
          Employee
        </button>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className={`absolute right-[10%] top-[5%] w-[450px] `}>
      <h1 className="text-white font-bold text-[36px] text-left">
        Manage your stacks with CloudBox
      </h1>

      <p className="text-white mt-6 text-[24px] text-left">
        World first business management system, bringing your business
        activities through cloud.
      </p>
    </div>
  );
}

export default Verify;
