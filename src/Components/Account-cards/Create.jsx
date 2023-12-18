import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialUser = { email: "", password: "", username: "" };

function Create() {
  // const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  // const [name, setName] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const formData = new FormData();
      // formData.append("name", name);
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("password", password);

      // console.log("User", name);
      // console.log("pass", email);
      // console.log("email", password);

      if (first_name && last_name && email && password) {
        // const resRegister = await fetch("http://cloudbox.test/api/user", {
        const resRegister = await fetch(`${apiUrl}/api/user`, {
          method: "POST",
          body: formData,
        });

        if (resRegister.statusText === "OK") {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          console.log("resRegister", resRegister);

          toast.success(
            "Account Registered",
            {
              hideProgressBar: true,
            },
            200
          );

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signUp(); // Call signUp when form is submitted
  // };

  // useState(() => {
  //   signUp();
  // });

  return (
    <div className="absolute ">
      <ToastContainer />
      <div
        // method="POST"
        // onSubmit={signUp}
        className=" w-[445px] h-[400px] ml-[19%] text-center "
      >
        <h1 className=" text-blue-900 text-[28px] font-bold font-['Poppins']">
          Registration
        </h1>
        {/* fill form  */}
        <div className="w-full h-[0px] border border-blue-900 mt-5"></div>
        <div className="p-[12%] pt-0 mt-4 justify-center  ">
          <div className="flex flex-cols gap-6 justify-center w-auto mt-6">
            <div className=" ">
              <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                First Name
              </h1>
              <input
                type="text"
                onChange={(e) => setFirst_name(e.target.value)}
                className="w-[149px] h-[27px] bg-white border border-black  mt-4"
                autoComplete="off" // Disable autocomplete
              />
            </div>{" "}
            <div className=" ">
              <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                Last Name
              </h1>
              <input
                type="text"
                onChange={(e) => setLast_name(e.target.value)}
                className="w-[149px] h-[27px] bg-white border border-black  mt-4"
                autoComplete="off" // Disable autocomplete
              />
            </div>
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            {/* <InputDisplay text={"Location"} /> */}
            <div className="flex gap-6">
              <div>
                <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold ">
                  Email
                </h1>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[149px] h-[27px] bg-white border border-black  mt-4"
                  autoComplete="off" // Disable autocomplete
                />
              </div>
              <div>
                <div className=" ">
                  <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                    Password
                  </h1>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[149px] h-[27px] bg-white border border-black  mt-4"
                    autoComplete="off" // Disable autocomplete
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            <div className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold flex flex-start"></div>
            <InputDisplay text={"Re-password"} />
          </div>

          <div className="ml-[5%] mt-[35px] absolute flex flex-col justify-center items-center">
            {/* <div className="">
              <DateForm />
            </div> */}
            <button
              onClick={signUp}
              className=" w-[295px] h-[43px] bg-blue-900 hover:bg-blue-700 border border-black mt-[50px] flex justify-center items-center"
            >
              <h1 className=" text-center text-white font-bold ">Proceed</h1>
            </button>
          </div>
        </div>
      </div>
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
