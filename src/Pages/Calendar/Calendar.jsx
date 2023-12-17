import React, { useState } from "react";
import SideNavBar from "../../Components/SideNavBar";
import ProfileHdr from "../../Components/ProfileHdr";
import useJoinTables from "../../API/useJoinTables";

const Calendar = () => {
  const [tempDate, setTempDate] = useState([
    { date: 1 },
    { date: 2 },
    { date: 3 },
    { date: 4 },
    { date: 5 },
    { date: 6 },
    { date: 7 },
    { date: 8 },
    { date: 9 },
    { date: 10 },
  ]);

  const { mergedData } = useJoinTables(
    "http://cloudbox.test/api/transaction",
    "http://cloudbox.test/api/user",
    "account_id"
    // { transaction }
  );

  console.log("Data:", mergedData);

  // const [trans, setTrans] = useState([
  //   {
  //     id: 1,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 2,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 3,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 4,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 5,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 6,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 7,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  //   {
  //     id: 8,
  //     name: "Bryan Ian Ramos",
  //     qty: 20,
  //     sold: 30,
  //     date: "june 6, 2023",
  //     total: 285,
  //   },
  // ]);

  return (
    <>
      <div className="flex w-screen h-screen ">
        <SideNavBar />
        <div className="w-full h-full">
          <ProfileHdr />
          <div className="flex border w-full h-[95%] bg-[#EBEEF5] ">
            <div
              // bg-[#EBEEF5]
              className="
            w-[100%] mt-8"
            >
              <div className="flex flex-col  px-20 gap-6 border">
                <h1 className="text-blue-950 text-[32px] font-bold font-['Poppins']">
                  Calendar
                </h1>
                <div className="p-5 w-[895px] h-[213px] bg-white rounded-md border border-zinc-500 border-opacity-50">
                  <div className="h-full flex flex-col gap-3">
                    <div className="text-blue-950 text-base font-bold font-['Poppins']">
                      September 2023
                    </div>
                    <div className="h-full flex overflow-x-auto ">
                      <div className="flex gap-5 max-h-full py-1 ">
                        {tempDate.map((elem, index) => (
                          <div
                            key={index}
                            className="w-[95px] h-full bg-slate-100 rounded-md flex justify-center items-center"
                          >
                            <span className=" text-center text-blue-950 text-[55px] font-bold font-['Poppins']">
                              {elem.date}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[895px] h-[389px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-5 flex flex-col gap-4">
                  <h2 className="text-blue-950 text-[14px] font-bold font-['Arial']">
                    Sort by: Name
                  </h2>
                  <div>
                    <div className="flex">
                      <div className="w-[119.98px] h-[38.43px] bg-blue-950 rounded-tl-md border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                          ID#
                        </p>
                      </div>
                      <div className="w-[200.60px] h-[38.43px] bg-blue-950 border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                          Name
                        </p>
                      </div>
                      <div className="w-[100.30px] h-[38.43px] bg-blue-950 border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[15px] font-medium font-['Poppins']">
                          Type
                        </p>
                      </div>
                      <div className="w-[119.04px] h-[38.43px] bg-blue-950 border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[15px] font-medium font-['Poppins']">
                          Income
                        </p>
                      </div>
                      <div className="w-[157.48px] h-[38.43px] bg-blue-950 border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                          Date
                        </p>
                      </div>
                      <div className="w-[140.60px] h-[38.43px] bg-blue-950 rounded-tr-lg border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                          Total
                        </p>
                      </div>
                    </div>
                    <div className="h-[273px] overflow-y-auto">
                      {mergedData &&
                        mergedData.map((elem, index) => (
                          <div className="flex" key={index}>
                            <div className="w-[119.98px] h-[38.43px] bg-[#EBEEF5] border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[15px] font-medium font-['Poppins']">
                                {elem.account_id}
                              </p>
                            </div>
                            <div className="w-[200.60px] h-[38.43px] bg-[#EBEEF5] border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[15px] font-medium font-['Poppins']">
                                {/* {elem.name} */}
                                {elem.joinedData[0].name}
                              </p>
                            </div>
                            <div className="w-[100.30px] h-[38.43px] bg-[#EBEEF5] border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[15px] font-medium font-['Poppins']">
                                {/* {elem.quantity} */}
                                {elem.trans_type}
                              </p>
                            </div>
                            <div className="w-[119.04px] h-[38.43px] bg-[#EBEEF5] border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[15px] font-medium font-['Poppins']">
                                {/* {elem.type} */}
                                {elem.income}
                              </p>
                            </div>
                            <div className="w-[157.48px] h-[38.43px] bg-[#EBEEF5] border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[15px] font-medium font-['Poppins']">
                                {new Date(elem.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="w-[140.60px] h-[38.43px] bg-[#EBEEF5] border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[15px] font-medium font-['Poppins']">
                                {elem.update_balance}php
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
