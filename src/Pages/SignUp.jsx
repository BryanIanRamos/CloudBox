import React from "react";

import LoginScreen from "../Components/LoginScreen";
import Create from "../Components/Account-cards/Create";

function SignUp() {
  return (
    <>
      {/* <LoginScreen position1={"right"} position2={"right"} Card={Login} /> */}
      <LoginScreen
        position1={"left"}
        position2={"right"}
        Card1={Create}
        Card2={Card2}
      />
    </>
  );
}

function Card2() {
  return (
    <div className={`absolute left-[10%] top-[5%] w-[450px] `}>
      <h1 className="text-white font-bold text-[36px] text-left">
        Manage your stacks with ClouDBox
      </h1>

      <p className="text-white mt-6 text-[24px] text-left">
        World first business management system, bringing your business
        activities through cloud.
      </p>
    </div>
  );
}

export default SignUp;
