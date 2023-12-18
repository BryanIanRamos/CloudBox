import React, { useState } from "react";
import Google from "../Assets/google.png";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { storeUser } from "./extensionAuth/helper";

const initialUser = { password: "", email: "" };

function Login() {
  // left
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;

    console.log(email);
    console.log(password);

    try {
      let response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log(response.ok);

      if (response.ok) {
        console.log("response OK");
        const { data } = await response.json();
        // console.log(data.data.token);
        console.log("test", data.user.data);

        if (data.token) {
          console.log("data token okay");
          console.log("Logged In");

          storeUser(data);

          toast.success(
            "Log in successful",
            {
              hideProgressBar: true,
            },
            200
          );

          setTimeout(() => {
            navigate("/dashboard");
          });
          // console.log("test here", data.user.email);

          // Perform actions upon successful login (e.g., store user data, navigate to dashboard)
          // Assuming storeUser function stores user data
          // Navigate to the dashboard or any desired route
          // For example, assuming you're using react-router-dom:
          // navigate("/dashboard");
        } else {
          toast.error("Invalid email or password!", {});
        }
      } else {
        // Handle HTTP error status codes (non 2xx codes)
        throw new Error("Login failed with status: " + response.status);
      }
    } catch (error) {
      toast.error(
        "Login failed. Please try again later.",
        {
          hideProgressBar: true,
        },
        200
      );
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="text-center w-[296px] h-[400px] absolute pt-[20px]  items-start">
      <form onSubmit={handleLogin}>
        <ToastContainer />
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
          // id="email"
          type="email"
          name="email"
          value={user.email}
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
          // id="pwd"
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
            // onClick={handleLogin}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-[294px] mt-3 h-[43px]"
            // onClick={ScapeRoute}
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
      </form>
    </div>
  );
}

export default Login;
