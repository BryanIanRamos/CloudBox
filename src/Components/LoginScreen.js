import React, { useState } from "react";
import CloudBox from "../Assets/cloudBox.png";
import Cloud from "./Cloud";

function LoginScreen({ position1, position2, Card1, Card2 }) {
  // left
  // const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked); // Toggle the checkbox state
  // };

  return (
    <div className="h-screen  relative bg-gradient-to-b from-blue-900 to-blue-500 overflow-hidden">
      <div className={`absolute p-5 ${position2}-0`}>
        <div className="flex flex-row text-center items-center gap-2 text-white ">
          <img src={CloudBox} alt="CloudBox" />
          <h1 className="text-[24px] font-bold">CloudBox</h1>
        </div>
      </div>
      {/* LEFT Side CONTENT  */}
      <div
        className={`w-[450px] h-screen absolute ${position2}-[10%] absolute opacity-100 mt-[13%]`}
      >
        {Card2 && <Card2 />}
      </div>

      {/* Right Side content */}
      <div
        className={`w-[450px] h-screen bg-white absolute ${position1}-0 opacity-100  flex items-center justify-start z-10`}
      >
        {Card1 && <Card1 />}
      </div>
      <Cloud pos={position1} />
    </div>
  );
}

export default LoginScreen;
