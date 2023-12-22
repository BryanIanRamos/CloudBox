import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Icon } from "@iconify/react";
import { userData } from "./extensionAuth/helper";

const initialUser = { email: "", password: "", username: "" };

function Create() {
  // const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  // const [name, setName] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const { jwt } = userData();

  // const [userFocus, setUserFocus] = useState(false);

  //Must start lower or uppercase letter digit, hyphen or under scores
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}@gmail\.com$/;
  //requires at least one lowercase and upper case letter, one digit and one special character.
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  // const [user, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
        console.log("API:: ", apiUrl);
        let resRegister = await fetch(`${apiUrl}/api/signup`, {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Include the bearer token in the Authorization header
          },
          body: formData,
        });

        // const data = await resRegister.json();
        console.log("data Status: ", resRegister);

        if (resRegister.ok) {
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
      } else {
        toast.info(
          "Invalid Credentials",
          {
            hideProgressBar: true,
          },
          200
        );
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    const result = USER_REGEX.test(email);
    console.log("result", result);
    console.log("user", email);
    setValidName(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log("result: ", result);
    console.log("password: ", password);
    setValidPwd(result);
    const match = password === matchPwd;
    console.log("match: ", match);
    setValidMatch(match);
  }, [password, matchPwd]);

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
              <div className="">
                <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold ">
                  Email
                </h1>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={validName ? "false" : "true"}
                  className={`w-[149px] h-[27px] bg-white border ${
                    !validName && email ? "border-red-500" : "border-black"
                  }  mt-4`}
                  autoComplete="off" // Disable autocomplete
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
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
                    className={`w-[149px] h-[27px] bg-white border ${
                      !validPwd && password ? "border-red-500" : "border-black"
                    }  mt-4`}
                    autoComplete="off" // Disable autocomplete
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="passidnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-cols gap-6 mt-[20px] justify-left p-2">
            <div className=" absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold flex flex-start"></div>
            {/* <InputDisplay text={"Re-password"} /> */}
            <div className="">
              <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
                Re-Password
              </h1>
              <input
                type="password"
                onChange={(e) => setMatchPwd(e.target.value)}
                className="w-[149px] h-[27px] bg-white border border-black  mt-4"
                autoComplete="off" // Disable autocomplete
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="passidnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
            </div>
          </div>
          {userFocus && email && !validName ? (
            <div
              id="uidnote"
              className=" text-center bg-gray-700 p-3 text-gray-300 text-[11px] w-full mt-3"
            >
              <span className="flex gap-1 justify-center">
                <Icon icon="ph:info-fill" /> 4 to 24 characters.
              </span>
              <div className="mt-0 pt-0 ml-[16px]">
                Must begin with a letter. Letter, number, underscore, hyphens
                allowed.
              </div>
            </div>
          ) : (
            <p
              id="passidnote"
              className={` ${
                PwdFocus && password && !validPwd ? "instruction" : "hidden"
              } text-left bg-gray-700 p-5 text-gray-300 text-[10px]`}
            >
              <span className="flex gap-1 justify-center items-center">
                <Icon icon="ph:info-fill" /> 8 to 24 characters.
              </span>
              <div className="mt-0 pt-0 ml-[16px] text-center">
                Must include uppercase and lowercase letters. a number and
                special character. Allowed special characters: !@#$%
              </div>
            </p>
          )}
          {validPwd && (
            <p
              id="passidnote"
              className={` ${
                matchFocus && matchPwd && !validMatch ? "instruction" : "hidden"
              } text-left bg-gray-700 py-2 px-1  text-gray-300 text-[10px]`}
            >
              <span className="flex gap-1 justify-center items-center">
                <Icon icon="ph:info-fill" /> Password didn't match.
              </span>
            </p>
          )}

          <div className="ml-[5%] absolute flex flex-col justify-center items-center">
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

// function InputDisplay({ text }) {
//   return (
//     <div>
//       <div className=" ">
//         <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
//           {text}
//         </h1>
//         <input
//           type={
//             text === "Password" || text === "Re-password" ? "password" : " "
//           }
//           className="w-[149px] h-[27px] bg-white border border-black  mt-4"
//         ></input>
//       </div>
//     </div>
//   );
// }

// function DateForm() {
//   return (
//     <div className="flex flex-row gap-4">
//       <select
//         name="selectedFruit "
//         className="w-[70px] h-[30px] bg-white rounded border border-black"
//       >
//         <option value="" placeholder="Month">
//           Month
//         </option>
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//       </select>
//       <select
//         name="selectedFruit "
//         className="w-[70px] h-[30px] bg-white rounded border border-black"
//       >
//         <option value="" placeholder="Day">
//           Day
//         </option>
//         <option value="">1</option>
//         <option value="">2</option>
//         <option value="">3</option>
//       </select>
//       <select
//         name="selectedFruit "
//         className="w-[70px] h-[30px] bg-white rounded border border-black"
//       >
//         <option value="" placeholder="Year">
//           Year
//         </option>
//         <option value="">2001</option>
//         <option value="">2002</option>
//         <option value="">2003</option>
//       </select>
//     </div>
//   );
// }

export default Create;
