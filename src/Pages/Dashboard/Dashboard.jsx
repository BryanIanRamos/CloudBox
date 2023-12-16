import React, { useEffect, useState } from "react";
import SideNavBar from "../../Components/SideNavBar";
import { Icon } from "@iconify/react";
import TransData from "../../tempData/TransData";
import ProfileHdr from "../../Components/ProfileHdr";

import Product from "./components/Product";
import CircularProgressBar from "../../Components/CircularProgressBar";
import ProgressBar from "../../Components/ProgressBar";
import useFetch from "../../API/useFetch";
import Select from "react-select";
import { userData } from "../../Components/Account-cards/extensionAuth/helper";
import AddTransaction from "../../Components/AddTransaction";
import useJoinTables from "../../API/useJoinTables";

const Dashboard = () => {
  const [nextPage, setNextPage] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [movement, setMovement] = useState(0);

  const { data: transactions } = useFetch(
    "http://cloudbox.test/api/transaction"
  );

  console.log("Data:", transactions);

  const UIclose = () => {
    setTransaction(false);
  };

  const handleClick = () => {
    setNextPage((prevState) => !prevState);
  };

  const handleTransaction = () => {
    setTransaction(true);
  };

  const { mergedData: userTransAPI } = useJoinTables(
    "http://cloudbox.test/api/transaction",
    "http://cloudbox.test/api/user",
    "account_id"
    // { transaction }
  );

  console.log("Joined API: ", userTransAPI);
  // console.log("Value API: ", userTransAPI.joinedData[0].name);
  // console.log("Parsed API: ", userTransAPI.transactions[0].location);

  return (
    <div className="flex w-screen h-screen ">
      <SideNavBar />
      <div className="w-full h-full">
        <ProfileHdr />
        <div className="flex w-full h-[95%] bg-[#EBEEF5] mx-0">
          <div
            // bg-[#EBEEF5]
            className="w-full relative"
          >
            {/* Popup Transaction here  */}
            <AddTransaction trigger={transaction} UIclose={UIclose} />

            {!nextPage ? (
              <div className="flex flex-col h-full max-lg:px-[15px] px-[60px] gap-6 border overflow-y-scroll pt-[30px]">
                <div className="flex relative h-10 items-center">
                  <h1 className=" text-blue-950 text-[32px] font-bold font-['Poppins'] absolute">
                    Dashboard
                  </h1>
                  <button
                    className="flex items-center  gap-2 absolute right-10 bg-primaryColor py-1 px-3 rounded-md"
                    onClick={handleClick}
                  >
                    <Icon
                      icon="solar:box-bold"
                      style={{ color: "white" }}
                      className="h-[18px] w-[18px] "
                    />
                    <span className="text-white">Products</span>
                  </button>
                </div>
                <div>
                  <div className="flex gap-[5%] max-md:flex-col max-md:justify-center max-md:items-center max-md:mt-10">
                    <div
                      className="w-[284px] max-md:w-[327px] h-[232px] bg-gray-50 border border-zinc-500 border-opacity-50
                                 flex flex-col gap-2 p-8  max-md:mb-10"
                    >
                      <div>
                        <div className="text-black text-[33.61px] font-bold font-['Poppins']">
                          <span className="text-zinc-500 text-2xl font-medium font-['Poppins']">
                            $
                          </span>
                          25,685
                        </div>
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
                      <button
                        className="w-[204px] h-10 bg-[#155699] hover:bg-[#227AD5] rounded-[9px]  flex gap-8 items-center justify-center
                                          font-semibold mt-3"
                      >
                        <button
                          className="text-white"
                          onClick={handleTransaction}
                        >
                          Add Transactions
                        </button>
                        {/* <div className="w-[29px] h-[26.85px] bg-primaryColor bg-opacity-50 rounded-full flex items-center justify-center">
                          <Icon
                            icon="iconamoon:arrow-down-2"
                            style={{ color: "white" }}
                            className="h-[18px] w-[18px] -rotate-90"
                          />
                        </div> */}
                      </button>
                    </div>
                    <div className="w-[327px] h-[232px] bg-gray-50 border border-zinc-500 border-opacity-50 p-5">
                      <h1 className="text-center text-blue-950 text-base font-bold font-['Poppins']">
                        Breakdown
                      </h1>
                      <div className="flex gap-7 mt-3  justify-center">
                        <div className=" w-fit flex flex-col justify-center items-center gap-1">
                          <div className="w-[78.06px] h-[78.06px] bg-sky-800 rounded-full flex items-center justify-center">
                            <Icon
                              icon="icon-park-solid:protect"
                              style={{ color: "white" }}
                              className="h-[53px] w-[48px]"
                            />
                          </div>
                          <div className="text-black text-base font-bold font-['Poppins']">
                            <span className="text-zinc-500 text-[14.05px] font-medium font-['Poppins']">
                              $
                            </span>
                            25,685
                          </div>
                          <p className=" text-blue-950 text-sm font-bold font-['Poppins']">
                            Income
                          </p>
                        </div>
                        <div className=" w-fit flex flex-col justify-center items-center gap-1">
                          <div className="w-[78.06px] h-[78.06px] bg-[#FD6E67] rounded-full flex items-center justify-center">
                            <Icon
                              icon="mingcute:safe-alert-fill"
                              style={{ color: "white" }}
                              className="h-[53px] w-[48px]"
                            />
                          </div>
                          <div className="text-black text-base font-bold font-['Poppins']">
                            <span className="text-zinc-500 text-[14.05px] font-medium font-['Poppins']">
                              $
                            </span>
                            14,162
                          </div>
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

          {/* TRANSACTION CONTENT HERE  */}
          <div className=" bg-[#113F8D] w-[378px] pt-[4%] px-5 max-xl:hidden">
            <div className="">
              <h1 className="text-center text-white text-[30px] font-bold font-['Poppins']">
                Transactions
              </h1>

              <div className="flex items-center  mt-6 mb-3">
                <hr className="w-full border-2" />
                <Icon
                  icon="icon-park-solid:check-one"
                  style={{ color: "white" }}
                  className="h-fit w-[125px] mx-2 "
                />
                <hr className="w-full border-2" />
              </div>

              {/* TransData */}

              <div className="flex flex-col gap-7 h-[500px] w-auto overflow-y-auto py-3">
                {userTransAPI &&
                  userTransAPI.map((elem, index) => (
                    <div key={index}>
                      <div className="flex gap-4 px-3">
                        <div className="w-[36.71px] h-[36.71px] bg-[#155699] rounded flex items-center justify-center">
                          <span className="font-bold text-white text-[17px]">
                            {elem.joinedData &&
                              elem.joinedData.length > 0 &&
                              elem.joinedData[0].name
                                .split(" ")
                                .map((word) => word.charAt(0).toUpperCase())
                                .join("")}
                          </span>
                        </div>
                        {/* <div className="flex gap-5 border"> */}
                        <div className="flex flex-col  w-[120px] ">
                          <p className="text-white text-xs font-bold font-Poppins">
                            {elem.joinedData[0].name}
                          </p>
                          <p className="text-white text-xs font-normal font-['Poppins'] mr-5 mt-1">
                            {/* {new Date(elem.created_at).toLocaleDateString()} */}

                            {new Date(elem.created_at).toLocaleTimeString(
                              "en-US",
                              { hour: "numeric", minute: "numeric" }
                            )}
                          </p>
                        </div>
                        <div className=" text-white text-[10.32px] font-bold font-['Poppins']">
                          ${elem.income}
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  ))}
              </div>
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
      <div className="flex max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="w-[326.85px] h-[247px] bg-gray-50 border border-zinc-500 border-opacity-50 p-4 overflow-hidden max-md:mb-10">
          <div>
            <h1 className=" text-blue-950 text-sm font-bold font-['Poppins'] mb-2">
              Weekly Produce
            </h1>
          </div>
          <div className="flex items-center h-fit gap-5">
            <div>
              <h2 className="text-black text-[35.04px] font-bold font-['Inria Sans']">
                11,487
                <span className="text-zinc-500 text-lg font-bold font-['Inria Sans']">
                  Bottles
                </span>
              </h2>
            </div>
            <CircularProgressBar
              percentage={40}
              setRadius={45}
              stroke={11}
              // secColor={true}
            />
          </div>
          <div className="px-4 flex gap-[10px] ">
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={85} percentage2={45} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                S
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={60} percentage2={21} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                M
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={72} percentage2={21} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                T
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={85} percentage2={67} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                W
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={70} percentage2={50} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                TF
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={45} percentage2={85} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                F
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={45} percentage2={85} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                S
              </span>
            </div>
          </div>
        </div>
        <div className="w-[326.85px] h-[247px] bg-gray-50 border border-zinc-500 border-opacity-50 p-4">
          <div>
            <h1 className=" text-blue-950 text-sm font-bold font-['Poppins'] mb-2">
              Weekly Sales
            </h1>
          </div>
          <div className="flex items-center h-fit gap-5">
            <div>
              <h2 className="text-black text-[35.04px] font-bold font-['Inria Sans']">
                11,017
                <span className="text-zinc-500 text-lg font-bold font-['Inria Sans']">
                  Bottles
                </span>
              </h2>
            </div>
            <CircularProgressBar
              percentage={80}
              setRadius={45}
              stroke={11}
              secColor={true}
            />
          </div>
          <div className="px-4 flex gap-[10px] ">
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={85} percentage2={45} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                S
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={60} percentage2={21} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                M
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={72} percentage2={21} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                T
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={85} percentage2={67} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                W
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={70} percentage2={50} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                TF
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={45} percentage2={85} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                F
              </span>
            </div>
            <div className="flex flex-col justify-center w-fit">
              <ProgressBar percentage1={45} percentage2={85} secColor={true} />
              <span className=" h-[23.08px] text-center text-zinc-500 text-[13.19px] font-bold font-['Inria Sans']">
                S
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
