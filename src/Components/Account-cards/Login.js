import React, { useState } from "react";
import Google from "../Assets/google.png";
import axios from "axios";

const initialUser = { password: "", identifier: "" };

function Login() {
  // left
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");

  const [user, setUser] = useState(initialUser);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = "http://localhost:1337/api/auth/local";

    console.log("email", user.identifier);
    console.log("password", user.password);

    try {
      if (user.identifier && user.password) {
        const res = await axios.post(url, user);
        console.log({ res });
      } else {
        console.log("res not running");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div
      onSubmit={handleLogin}
      className="text-center w-[296px] h-[400px] absolute pt-[20px]  items-start"
    >
      <h1 className="text-left text-black text-[26px] font-bold font-['Poppins'] not-italic ">
        Sign In
      </h1>
      <p className="text-left text-sm">
        Or{" "}
        <b className="text-blue-900">
          <a href="/signup">Create Account</a>
        </b>
      </p>
      <input
        id="email"
        type="email"
        name="identifier"
        value={user.identifier}
        placeholder="Email"
        className="w-[295px] h-[43px] px-4 py-2 border border-gray-300 text-base text-gray-700 focus:outline-none focus:border-blue-500 mt-[20px]"
        onChange={
          // (e) => {
          handleChange
          // setPwd(e.target.value);
        }
        autoComplete="username"
      />
      <input
        id="pwd"
        type="password"
        name="password"
        value={user.password}
        placeholder="Password"
        className="w-[295px] h-[43px] px-4 py-2 border border-gray-300 text-base text-gray-700 focus:outline-none focus:border-blue-500 mt-[20px]"
        onChange={
          // (e) => {
          handleChange
          // setPwd(e.target.value);
        }
        autoComplete="current-password"
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
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-[294px] mt-3 h-[43px]"
        >
          Sign In
        </button>
        <button
          className="bg-white hover:bg-[#0E2E81] text-[#565555] hover:text-white text-[14px] py-2 px-4  w-[294px] 
              mt-3 flex flex-row items-center gap-2 justify-center text-center font-['Poppins'] h-[43px] border border-[#565555]"
        >
          <img src={Google} className="w-[20px] h-[20px]" alt="" />
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
