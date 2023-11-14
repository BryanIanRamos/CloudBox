import React, { useEffect, useState } from "react";
import SideNavBar from "./components.js/SideNavBar";
import { Icon } from "@iconify/react";
import TransData from "../../data/TransData";
import ProfileHdr from "./components.js/ProfileHdr";
import ProdData from "../../data/ProdData";

import Product from "./components.js/Product";

const Dashboard = () => {
  const [nextPage, setNextPage] = useState(false);

  const handleClick = () => {
    setNextPage((prevState) => !prevState);
  };

  return (
    <div>
      {/* <div className="w-[1280px] h-[59px] bg-white border border-white"></div> */}
      <div className="flex">
        <SideNavBar />
        <ProfileHdr />
        <div className="flex border w-screen bg-slate-400 ">
          <div className="bg-[#EBEEF5] w-[100%] mt-8">
            {!nextPage ? (
              <div className="flex flex-col py-10 px-20 gap-6">
                <div className="flex relative h-10 items-center">
                  <h1 className=" text-blue-950 text-[32px] font-bold font-['Poppins'] absolute">
                    Dashboard
                  </h1>
                  <button
                    className="absolute right-0 bg-primaryColor py-1 px-3 rounded-md"
                    onClick={handleClick}
                  >
                    <span className="text-white">Products</span>
                  </button>
                </div>
                <div>
                  <div className="flex gap-[5%]">
                    <div
                      className="w-[284px] h-[232px] bg-gray-50 border border-zinc-500 border-opacity-50
                              flex flex-col gap-2 p-8"
                    >
                      <div>
                        <h2 className="text-black text-[33.61px] font-bold font-['Poppins']">
                          <span className="text-zinc-500 text-2xl font-medium font-['Poppins']">
                            $
                          </span>
                          25,685
                        </h2>
                      </div>
                      <div className="flex gap-1">
                        <p className="text-black text-xs font-normal font-['Poppins']">
                          Deposit
                        </p>
                        <p className="text-black text-xs font-semibold font-['Poppins']">
                          $ 25,685
                        </p>
                      </div>
                      <div>
                        <p className="text-blue-950 text-[16.91px] font-semibold font-['Poppins']">
                          +6.5 % ($680)
                        </p>
                      </div>
                      <div class="w-[204px] h-10 bg-[#155699] rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] flex gap-8 items-center justify-center">
                        <p className="text-white">ADD FUNDS</p>
                        <div class="w-[29px] h-[26.85px] bg-primaryColor bg-opacity-50 rounded-full flex items-center justify-center">
                          <Icon
                            icon="iconamoon:arrow-down-2"
                            style={{ color: "white" }}
                            className="h-[18px] w-[18px] -rotate-90"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[327px] h-[232px] bg-gray-50 border border-zinc-500 border-opacity-50 p-5">
                      <h className="text-center text-blue-950 text-base font-bold font-['Poppins']">
                        Breakdown
                      </h>
                      <div className="flex gap-7 mt-3  justify-center">
                        <div className=" w-fit flex flex-col justify-center items-center gap-1">
                          <div class="w-[78.06px] h-[78.06px] bg-sky-800 rounded-full flex items-center justify-center">
                            <Icon
                              icon="icon-park-solid:protect"
                              style={{ color: "white" }}
                              className="h-[53px] w-[48px]"
                            />
                          </div>
                          <h2 className="text-black text-base font-bold font-['Poppins']">
                            <span className="text-zinc-500 text-[14.05px] font-medium font-['Poppins']">
                              $
                            </span>
                            25,685
                          </h2>
                          <p className=" text-blue-950 text-sm font-bold font-['Poppins']">
                            Income
                          </p>
                        </div>
                        <div className=" w-fit flex flex-col justify-center items-center gap-1">
                          <div class="w-[78.06px] h-[78.06px] bg-[#FD6E67] rounded-full flex items-center justify-center">
                            <Icon
                              icon="mingcute:safe-alert-fill"
                              style={{ color: "white" }}
                              className="h-[53px] w-[48px]"
                            />
                          </div>
                          <h2 className="text-black text-base font-bold font-['Poppins']">
                            <span className="text-zinc-500 text-[14.05px] font-medium font-['Poppins']">
                              $
                            </span>
                            14,162
                          </h2>
                          <p className=" text-[#FD6E67] text-sm font-bold font-['Poppins']">
                            Expense
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ButtomSide />
              </div>
            ) : (
              <Product
                trigger={(e) => {
                  setNextPage(e);
                }}
              />
            )}
          </div>
          <div className=" bg-[#113F8D] w-[378px] pt-[7%] px-4">
            <h1 className="text-center text-white text-[30px] font-bold font-['Poppins']">
              Transactions
            </h1>

            <div className="flex items-center">
              <hr className="w-full border-2" />
              <Icon
                icon="icon-park-solid:check-one"
                style={{ color: "white" }}
                className="h-[125px] w-[125px] mx-2"
              />
              <hr className="w-full border-2" />
            </div>

            {/* TransData */}

            <div className="flex flex-col gap-7">
              {TransData.map((elem, index) => (
                <>
                  <div key={index} className="flex gap-4 px-3">
                    <div className="w-[36.71px] h-[36.71px] bg-[#155699] rounded flex items-center justify-center">
                      <span className="font-bold text-white text-[23px]">
                        {elem.initial}
                      </span>
                    </div>
                    {/* <div className="flex gap-5 border"> */}
                    <div className="flex flex-col  w-[120px] ">
                      <p className=" text-white text-xs font-bold font-['Poppins'] ">
                        {elem.name}
                      </p>
                      <p className="text-white text-xs font-normal font-['Poppins'] mr-5">
                        {elem.date}
                      </p>
                    </div>
                    <div className=" text-white text-[10.32px] font-bold font-['Poppins']">
                      ${elem.amount}
                    </div>
                    {/* </div> */}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function ButtomSide() {
  return (
    <>
      <div className="flex">
        <div className="w-[326.85px] h-[247px] bg-gray-50 border border-zinc-500 border-opacity-50">
          {/* <h2>Weekly Produce</h2>
          <div>
            <p>
              11,487
              <span>Bottles</span>
            </p>
            <div class="w-[92px] h-[92px] rounded-full border-8 border-blue-950"></div>
          </div>
          <div></div> */}
        </div>
        <div className="w-[326.85px] h-[247px] bg-gray-50 border border-zinc-500 border-opacity-50"></div>
      </div>
    </>
  );
}
