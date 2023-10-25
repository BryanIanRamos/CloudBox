import React, { useState } from "react";
import Google from "../Assets/google.png";

function Login() {
  // left
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  return (
    <div className="text-center w-[296px] h-[400px] absolute pt-[20px]  items-start">
      <h1 className="text-left text-black text-[26px] font-bold font-['Poppins'] not-italic ">
        Sign In
      </h1>
      <p className="text-left text-sm">
        Or{" "}
        <b className="text-blue-900">
          <a href="#">Create Account</a>
        </b>
      </p>
      <input
        type="text"
        name="name"
        placeholder="Email"
        className="w-[295px] h-[43px] px-4 py-2 border border-gray-300 text-base text-gray-700 focus:outline-none focus:border-blue-500 mt-[20px]"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-[295px] h-[43px] px-4 py-2 border border-gray-300 text-base text-gray-700 focus:outline-none focus:border-blue-500 mt-[20px]"
      />
      <div className="w-[294px] h-9  text-left mt-[5px]">
        <span className="text-stone-500 text-[11px] font-normal font-['Poppins']">
          This page is protected by reCAPTCHA and is subject to Google{" "}
        </span>
        <span className="text-blue-900 text-[11px] font-normal font-['Poppins']">
          <b>Privacy Policy</b>
        </span>
        <span className="text-stone-500 text-[11px] font-normal font-['Poppins']">
          {" "}
          and{" "}
        </span>
        <span className="text-blue-900 text-[11px] font-normal font-['Poppins']">
          <b>Terms of Service</b>
        </span>

        {/* checkbox area */}
        <div className="mt-4">
          <label className="flex flex-row gap-2 mt-1">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-3.5 h-3.5 mt-[3px]"
            />
            <span className=" text-blue-900 text-[13px] font-normal font-['Poppins']">
              Remember me
            </span>
          </label>
          <p></p>
        </div>
        {/* Button  */}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-[294px] mt-3 h-[43px]">
          Sign In
        </button>
        <button
          class="bg-white hover:bg-[#0E2E81] text-[#565555] hover:text-white text-[14px] py-2 px-4  w-[294px] 
              mt-3 flex flex-row items-center gap-2 justify-center text-center font-['Poppins'] h-[43px] border border-[#565555]"
        >
          <img src={Google} class="w-[20px] h-[20px]" alt="" />
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
