import React, { useState } from "react";
import SideNavBar from "../../Components/SideNavBar";
import ProfileHdr from "../../Components/ProfileHdr";
import useJoinTables from "../../API/useJoinTables";
import useFetch from "../../API/useFetch";

const Calendar = () => {
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

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

  // const { mergedData } = useJoinTables(
  //   "http://cloudbox.test/api/transaction",
  //   "http://cloudbox.test/api/user",
  //   "account_id"
  //   // { transaction }
  // );

  const { data: mergedData } = useFetch(`${apiUrl}/api/userTrans`);

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
    <div className="w-screen h-[50%] ">
      <div className="flex">
        <SideNavBar />
        <ProfileHdr />

        <div className="w-full h-full px-[40px] pt-[5%]">
          <div className="p-5 bg-white rounded-md border border-zinc-500 border-opacity-50">
            <div className="text-blue-950 text-[18px] font-bold font-['Arial']">
              Transaction Log
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-[580px] mt-3">
              <table className="w-full text-sm text-left rtl:text-right text-white">
                <thead className="text-xs text-white uppercase bg-[#152D69]">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ID#
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Income
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mergedData &&
                    mergedData.map((elem) => (
                      <tr
                        className="odd:bg-white odd:dark:bg-[#DCE0E9] even:bg-gray-50 even:dark:bg-[#F5F8FF] border-b dark:border-gray-700"
                        key={elem.account_id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 text-blue-950 text-[15px] font-medium font-['Poppins']"
                        >
                          {elem.account_id}
                        </th>
                        <td className="px-6 py-4 text-blue-950 text-[15px] font-medium font-['Poppins']">
                          {" "}
                          {elem.first_name} {elem.last_name}
                        </td>
                        <td className="px-6 py-4 text-blue-950 text-[15px] font-medium font-['Poppins']">
                          {" "}
                          {elem.trans_type}
                        </td>
                        <td className="px-6 py-4 text-blue-950 text-[15px] font-medium font-['Poppins']">
                          $ {elem.income}
                        </td>
                        <td className="px-6 py-4 text-blue-950 text-[15px] font-medium font-['Poppins']">
                          {new Date(elem.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-blue-950 text-[15px] font-medium font-['Poppins']">
                          {elem.update_balance}php
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
