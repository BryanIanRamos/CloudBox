import React, { useState } from "react";

function Create() {
  return (
    <div className="absolute ">
      <div className=" w-[445px] h-[400px] ml-[19%] text-center">
        <h1 className=" text-blue-900 text-[28px] font-bold font-['Poppins']">
          Business Status
        </h1>
        {/* fill form  */}
        <div className="w-full h-[0px] border border-blue-900 mt-5"></div>
        <div className="p-[12%] pt-0 mt-4 justify-center">
          <div className="flex flex-cols gap-6 justify-center">
            {/* Put here */}
            <InputDisplay text={"Business Name"} />
            <InputDisplay text={"Business Address"} />
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            <InputDisplay text={"Phone"} />
            <InputDisplay text={"Email"} />
          </div>
          <div className="flex flex-cols gap-6 mt-[25px] justify-center">
            <OptionType text={"Type"} />
            <InputDisplay text={"No. Employees"} />
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
            text === "Password" || text === "Re-password" ? "password" : "text"
          }
          className="w-[149px] h-[27px] bg-white border border-black  mt-4"
        ></input>
      </div>
    </div>
  );
}

function DateForm() {
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  const ListMonth = months.map((item, index) => (
    <option key={index}>{item}</option>
  ));
  const ListDays = days.map((item, index) => (
    <option key={index}>{item}</option>
  ));

  return (
    <div className="flex flex-row gap-4">
      <select
        name="selectedFruit "
        className="w-[70px] h-[30px] bg-white rounded border border-black"
      >
        <option value="" placeholder="Month">
          Month
        </option>
        {ListMonth}
      </select>
      <select
        name="selectedFruit "
        className="w-[70px] h-[30px] bg-white rounded border border-black"
      >
        <option value="" placeholder="Day">
          Day
        </option>
        {ListDays}
      </select>
      <select
        name="selectedFruit "
        className="w-[70px] h-[30px] bg-white rounded border border-black "
      >
        <option value="" placeholder="Year">
          Year
        </option>
        <option value="">2001</option>
        <option value="">2002</option>
        <option value="">2003</option>
        <option value="">2004</option>
      </select>
    </div>
  );
}

function OptionType({ text }) {
  return (
    <>
      <div>
        <div className=" ">
          <h1 className="absolute bg-white ml-[8px] p-1 pb-0 text-[10px]  text-blue-900 font-bold">
            {text}
          </h1>
          <select
            name="selectedFruit "
            className="w-[149px] h-[27px] bg-white border-[0.5px] border-gray-700  mt-4 rounded-none"
          >
            <option value={null} placeholder="type">
              ---
            </option>
            <option value="Consumer goods and services">
              Consumer goods and services
            </option>
            <option value="B2B">Business-to-business</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Professional services">Professional services</option>
            <option value="Transportation and logistic">
              Transportation and logistic
            </option>
            <option value="Agriculture">Agriculture</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Create;
