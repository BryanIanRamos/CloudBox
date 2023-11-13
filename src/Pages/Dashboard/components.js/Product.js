import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ProdData from "../../../data/ProdData";

const Product = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className="mt-[30px] px-20">
      <div className="text-blue-950 text-[32px] font-bold font-['Poppins'] mb-2">
        Products
      </div>

      <div>
        <div className="flex">
          <button
            className={`w-[150px] h-[29px] ${
              !filter ? "bg-white" : "bg-[#E8E8E8]"
            } rounded-tl-[25px] rounded-tr-[25px] border border-stone-300 relative z-[1]
                            flex gap-3 items-center justify-center`}
            onClick={(e) => {
              setFilter(false);
            }}
          >
            <span className="text-center text-blue-950 text-[13px] font-semibold font-['Poppins']">
              ALL
            </span>
            <div
              className={`w-[35px] h-[17px] bg-gray-200 rounded-[7px] flex items-center justify-center `}
            >
              <span className="text-zinc-500 text-[9px] font-semibold font-['Poppins']">
                283
              </span>
            </div>
          </button>
          <button
            className={`w-[150px] h-[29px] ${
              filter ? "bg-white" : "bg-[#E8E8E8]"
            } rounded-tl-[25px] rounded-tr-[25px] border border-stone-300 
                            flex gap-3 items-center justify-center z-[0]`}
            onClick={(e) => {
              setFilter(true);
            }}
          >
            <span className="text-center text-blue-950 text-[13px] font-semibold font-['Poppins']">
              Available
            </span>
            <div className="w-[35px] h-[17px] bg-gray-200 rounded-[7px] flex items-center justify-center ">
              <span className="text-zinc-500 text-[9px] font-semibold font-['Poppins']">
                283
              </span>
            </div>
          </button>
        </div>
        {/* Main Container */}
        <div
          className="w-full h-[581px] bg-white rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px] border border-stone-300
                        p-7 flex flex-col gap-6 "
        >
          {!filter ? (
            <>
              <div className="flex relative items-center">
                <div
                  className="w-[274px] h-8 bg-white rounded-[25.48px] border
           border-zinc-500 border-opacity-50 px-3
           flex gap-3 items-center"
                >
                  <Icon
                    icon="ic:baseline-search"
                    style={{ color: "green" }}
                    className="h-[20px] w-[20px]"
                  />
                  <input onChange={(e) => {}} className=" w-fit h-6 p-1" />
                </div>
                <button className="w-[74px] h-[27px] bg-sky-800 rounded-[25.48px] absolute right-0 flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-['Poppins']">
                    Add
                  </span>
                </button>
              </div>

              <div
                className="grid grid-cols-3 gap-2 px-[30px] overflow-auto"
                style={{ scrollBehavior: "smooth" }}
              >
                {ProdData.map((elem, index) => (
                  <div>
                    <div className="w-[205px] h-[237px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
                      <div className="relative">
                        <div className=" bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
                          <p className=" text-white text-[7px] font-bold font-['Poppins']">
                            {elem.price} php
                          </p>
                        </div>
                        <img
                          class="w-[181px] h-[107px] rounded-md border"
                          src={elem.img}
                          alt="profile"
                        />
                      </div>
                      <div>
                        <p className="text-black text-[16px] font-bold font-['Poppins'] py-1">
                          {elem.name}
                        </p>
                      </div>
                      <div>
                        <p className="w-[181px] text-black text-[9px] font-normal font-['Poppins']">
                          {elem.desc}
                        </p>
                      </div>
                      <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-2 mt-1">
                        <p className=" text-white text-[6.84px] font-bold font-['Poppins']">
                          QTY {elem.qty}
                        </p>
                      </div>
                      <div className="flex justify-end gap-1">
                        <button className="w-[50px] h-auto bg-amber-500 rounded-[17.22px] px-3 py-1 flex items-center justify-center">
                          <span className="text-white text-[8.11px] font-bold font-['Poppins']">
                            Update
                          </span>
                        </button>
                        <button className="w-[50px] h-auto bg-red-400 rounded-[17.22px] px-4 py-1 flex items-center justify-center">
                          <span className="text-white text-[8.11px] font-bold font-['Poppins']">
                            Delete
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex relative items-center">
                <div
                  className="w-[274px] h-8 bg-white rounded-[25.48px] border
           border-zinc-500 border-opacity-50 px-3
           flex gap-3 items-center"
                >
                  <Icon
                    icon="ic:baseline-search"
                    style={{ color: "green" }}
                    className="h-[20px] w-[20px]"
                  />
                  <input onChange={(e) => {}} className=" w-fit h-6 p-1" />
                </div>
                <button className="w-[74px] h-[27px] bg-sky-800 rounded-[25.48px] absolute right-0 flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-['Poppins']">
                    Add
                  </span>
                </button>
              </div>

              <div
                className="grid grid-cols-3 gap-2 px-[30px] overflow-auto"
                style={{ scrollBehavior: "smooth" }}
              >
                {ProdData.map((elem, index) => (
                  <div>
                    <div className="w-[205px] h-[237px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
                      <div className="relative">
                        <div className=" bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
                          <p className=" text-white text-[7px] font-bold font-['Poppins']">
                            {elem.price} php
                          </p>
                        </div>
                        <img
                          class="w-[181px] h-[107px] rounded-md border"
                          src={elem.img}
                          alt="profile"
                        />
                      </div>
                      <div>
                        <p className="text-black text-[16px] font-bold font-['Poppins'] py-1">
                          {/* {elem.name} */}Cheese
                        </p>
                      </div>
                      <div>
                        <p className="w-[181px] text-black text-[9px] font-normal font-['Poppins']">
                          {elem.desc}
                        </p>
                      </div>
                      <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-2 mt-1">
                        <p className=" text-white text-[6.84px] font-bold font-['Poppins']">
                          QTY {elem.qty}
                        </p>
                      </div>
                      <div className="flex justify-end gap-1">
                        <button className="w-[50px] h-auto bg-amber-500 rounded-[17.22px] px-3 py-1 flex items-center justify-center">
                          <span className="text-white text-[8.11px] font-bold font-['Poppins']">
                            Update
                          </span>
                        </button>
                        <button className="w-[50px] h-auto bg-red-400 rounded-[17.22px] px-4 py-1 flex items-center justify-center">
                          <span className="text-white text-[8.11px] font-bold font-['Poppins']">
                            Delete
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
