import React from "react";

function Create() {
  return (
    <div className="absolute ">
      <div className=" w-[445px] h-[400px] ml-[19%] text-center">
        <h1 className=" text-blue-900 text-[28px] font-bold font-['Poppins']">
          Registration
        </h1>
        {/* fill form  */}
        <div className="w-full h-[0px] border border-blue-900 mt-5"></div>
        <div className="p-[12%] pt-0 mt-4 justify-center">
          <div className="flex flex-cols gap-6 justify-center">
            {/* Put here */}
            <InputDisplay text={"First Name"} />
            <InputDisplay text={"Last Name"} />
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            <InputDisplay text={"Location"} />
            <InputDisplay text={"Email"} />
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            <InputDisplay text={"Password"} />
            <InputDisplay text={"Re-password"} />
          </div>

          <div className="ml-[5%] mt-[35px] absolute flex flex-col justify-center items-center">
            <div className="">
              <DateForm />
            </div>
            <button
              onClick={null}
              className=" w-[295px] h-[43px] bg-blue-900 hover:bg-blue-700 border border-black mt-[50px] flex justify-center items-center "
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
