import React from "react";
import Screen from "../Components/LoginScreen.js";
import Login from "../Components/Account-cards/Login.js";
import CloudBoxMedium from "../Assets/box-medium.png";

// Registration
function SignIn() {
  return (
    <>
      <Screen
        position1={"right"}
        position2={"left"}
        Card1={Login}
        Card2={Card3}
      />
    </>
  );
}

function Card3() {
  return (
    <div className={`relative right-[0%] top-[2%] w-[450px]  `}>
      <h1 className="text-white font-bold text-[32px] text-center">
        Welcome to
      </h1>
      <img
        src={CloudBoxMedium}
        alt="CloudBoxMedium"
        className={`w-[133px] left-[20%] ml-[35%] mt-[20px]`}
      />
      <h2 className="text-center text-[24px] font-bold text-white font-['poppins'] mt-[10px]">
        CloudBox
      </h2>
      <p className="text-center  text-white mt-6">
        Transform Your Business with CloudBox: Your Gateway to a Secure,
        Efficient, and Future-Ready Cloud Infrastructure. Say Goodbye to Costly
        Physical Systems and Embrace Seamless Management
      </p>
    </div>
  );
}

export default SignIn;
