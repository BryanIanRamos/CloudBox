import React from "react";
import Screen from "../Components/LoginScreen";
import BusInfo from "../Components/Account-cards/BusInfo";

// Registration
function BusID() {
  return (
    <>
      <Screen
        position1={"left"}
        position2={"right"}
        Card1={BusInfo}
        Card2={Card3}
      />
    </>
  );
}

function Card3() {
  return (
    <div className={`absolute right-[10%] top-[5%] w-[450px] `}>
      <h1 className="text-white font-bold text-[36px] text-left">
        We would like to know your business balbla
      </h1>

      <p className="text-white mt-6 text-[24px] text-left">
        Tell us about your business status
      </p>
    </div>
  );
}

export default BusID;
