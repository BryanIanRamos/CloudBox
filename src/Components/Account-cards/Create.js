import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const initialUser = { email: "", password: "", username: "" };

function Create() {
  // const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      console.log("User", user.username);
      console.log("pass", user.password);
      console.log("email", user.email);
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        // console.log("res", );

        if (res.statusText === "OK") {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          console.log("res", res);

          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
      console.log(error);
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(); // Call signUp when form is submitted
  };

  return (
    <div className="absolute ">
      <ToastContainer />
      <form
        // method="POST"
        onSubmit={handleSubmit}
        className=" w-[445px] h-[400px] ml-[19%] text-center"
      >
        <h1 className=" text-blue-900 text-[28px] font-bold font-['Poppins']">
          Registration
        </h1>
        {/* fill form  */}
        <div className="w-full h-[0px] border border-blue-900 mt-5"></div>
        <div className="p-[12%] pt-0 mt-4 justify-center">
          <div className="flex flex-cols gap-6 justify-center">
            {/* Put here */}
            <div>
              <div className=" ">
                <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                  Username
                </h1>
                <input
                  type="username"
                  name="username"
                  value={user.username}
                  onChange={handleUserChange}
                  // placeholder="Enter your email"
                  className="w-[149px] h-[27px] bg-white border border-green-400  mt-4"
                />
              </div>
            </div>
            {/* <InputDisplay text={"First Name"} /> */}
            {/* <InputDisplay text={"Last Name"} /> */}
            {/* <InputDisplay text={"Position"} /> */}
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            {/* <InputDisplay text={"Location"} /> */}
            <div>
              <div className=" ">
                <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                  Email
                </h1>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleUserChange}
                  // placeholder="Enter your email"
                  className="w-[149px] h-[27px] bg-white border border-green-400  mt-4"
                />
              </div>
            </div>
            {/* <InputDisplay text={"Email"} /> */}
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            {/* <InputDisplay text={"Password"} /> */}
            <div className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold"></div>
            <div>
              <div className=" ">
                <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                  Password
                </h1>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleUserChange}
                  // placeholder="Enter password"
                  className="w-[149px] h-[27px] bg-white border border-green-400  mt-4"
                />
              </div>
            </div>

            {/* <InputDisplay text={"Re-password"} /> */}
          </div>

          <div className="ml-[5%] mt-[35px] absolute flex flex-col justify-center items-center">
            <div className="">{/* <DateForm /> */}</div>
            <button
              type="submit"
              // onClick={signUp}
              className=" w-[295px] h-[43px] bg-blue-900 hover:bg-blue-700 border border-black mt-[50px] flex justify-center items-center"
            >
              <h1 className=" text-center text-white font-bold ">Proceed</h1>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function InputDisplay({ text }) {
  return (
    <div>
      <div className=" ">
        <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
          {text}
        </h1>
        <input
          type={
            text === "Password" || text === "Re-password" ? "password" : " "
          }
          className="w-[149px] h-[27px] bg-white border border-black  mt-4"
        ></input>
      </div>
    </div>
  );
}

function DateForm() {
  return (
    <div className="flex flex-row gap-4">
      <select
        name="selectedFruit "
        className="w-[70px] h-[30px] bg-white rounded border border-black"
      >
        <option value="" placeholder="Month">
          Month
        </option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <select
        name="selectedFruit "
        className="w-[70px] h-[30px] bg-white rounded border border-black"
      >
        <option value="" placeholder="Day">
          Day
        </option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <select
        name="selectedFruit "
        className="w-[70px] h-[30px] bg-white rounded border border-black"
      >
        <option value="" placeholder="Year">
          Year
        </option>
        <option value="">2001</option>
        <option value="">2002</option>
        <option value="">2003</option>
      </select>
    </div>
  );
}

export default Create;
