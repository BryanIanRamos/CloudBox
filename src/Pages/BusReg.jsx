import React, { useState } from "react";
import Screen from "../Components/LoginScreen";
import CreateBus from "../Components/Account-cards/CreatBus";

// Registration
function BusReg() {
  return (
    <>
      <Screen
        position1={"left"}
        position2={"right"}
        Card1={CreateBus}
        Card2={Card2}
      />
    </>
  );
}

function Card2() {
  return (
    <div className={`absolute right-[10%] top-[5%] w-[450px] `}>
      <h1 className="text-white font-bold text-[36px] text-left">
        We would like to know your business
      </h1>

      <p className="text-white mt-6 text-[24px] text-left">
        Tell us about your business status
      </p>
    </div>
  );
}

export default BusReg;
