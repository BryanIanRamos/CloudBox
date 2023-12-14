import React, { useState } from "react";
import SideNavBar from "../../Components/SideNavBar";
import ProfileHdr from "../../Components/ProfileHdr";
import CircularProgressBar from "../../Components/CircularProgressBar";
import useFetch from "../../API/useFetch";

const Report = () => {
  const { data, loading, error } = useFetch("http://cloudbox.test/api/user");
  console.log("Report Data:", data);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 2,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 3,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 4,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 5,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 6,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 7,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
    {
      id: 8,
      name: "Aron Fernanzed",
      prodID: 101,
      prodName: "Milk",
      date: "11/20/2023",
      action: "Update",
    },
  ]);

  // const [employees, setEmployees] = useState([
  //   { id: 1, name: "Aron Fernandez", date: "June 6, 2023" },
  //   { id: 2, name: "Aron Fernandez", date: "June 6, 2023" },
  //   { id: 3, name: "Aron Fernandez", date: "June 6, 2023" },
  //   { id: 4, name: "Aron Fernandez", date: "June 6, 2023" },
  //   { id: 5, name: "Aron Fernandez", date: "June 6, 2023" },
  // ]);

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideNavBar />
        <div className="w-full h-full">
          <ProfileHdr />
          <div className="flex border w-full h-[95%] bg-[#EBEEF5] ">
            <div className="w-[100%] mt-8 px-[60px] flex flex-col gap-8">
              <h1 className="text-blue-950 text-3xl font-bold font-['Poppins']">
                Reports
              </h1>
              <div className="flex gap-10">
                <div className="w-[539px] h-[272px] bg-white rounded-lg border border-zinc-500 border-opacity-50 p-5 overflow-hidden">
                  <div className="mb-2">
                    <h2 className="text-blue-950 text-xl font-[900] font-['Poppins'] flex flex-col">
                      Product
                      <span className="text-blue-950 text-xs font-normal font-['Poppins']">
                        6 Activities
                      </span>
                    </h2>
                  </div>
                  {/* table Body */}
                  <div className="flex  w-full">
                    <div className="w-[70.30px] h-[25.52px] bg-blue-950 rounded-tl border border-slate-100 flex items-center justify-center">
                      <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                        ID#
                      </p>
                    </div>
                    <div className="w-[114.53px] h-[25.52px] bg-blue-950 border border-slate-100 flex items-center justify-center">
                      <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                        Name
                      </p>
                    </div>
                    <div className="w-[63.77px] h-[25.52px] bg-blue-950 border border-slate-100 flex items-center justify-center">
                      <p className="text-white text-[9.79px] font-medium font-['Poppins']">
                        Product ID
                      </p>
                    </div>
                    <div className="px-2 h-[25.52px] bg-blue-950 border border-slate-100 flex items-center justify-center">
                      <p className="text-white text-[8.79px] font-medium font-['Poppins']">
                        Product Name
                      </p>
                    </div>
                    <div className="w-[80.27px] h-[25.52px] bg-blue-950 border border-slate-100 flex items-center justify-center">
                      <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                        Date
                      </p>
                    </div>
                    <div className="w-[82.38px] h-[25.52px] bg-blue-950 rounded-tr border border-slate-100 flex items-center justify-center">
                      <p className="text-white text-[11.79px] font-medium font-['Poppins']">
                        Activity
                      </p>
                    </div>
                  </div>
                  <div className="border h-[155px] overflow-y-auto  scroll-snap-type-y w-fit">
                    {products &&
                      products.map((elem) => (
                        <div key={elem.id} className="flex">
                          <div className="w-[70.30px] h-[25.52px] bg-[#DCE0E9]  border border-slate-100 flex items-center justify-center">
                            <p className="text-blue-950 text-[11.79px] font-medium font-['Poppins']">
                              {elem.id}
                            </p>
                          </div>
                          <div className="w-[114.53px] h-[25.52px] bg-[#DCE0E9] border border-slate-100 flex items-center justify-center">
                            <p className="text-blue-950 text-[11.79px] font-medium font-['Poppins']">
                              {elem.name}
                            </p>
                          </div>
                          <div className="w-[63.77px] h-[25.52px] bg-[#DCE0E9] border border-slate-100 flex items-center justify-center">
                            <p className="text-blue-950 text-[11.79px] font-medium font-['Poppins']">
                              {elem.prodID}
                            </p>
                          </div>
                          <div className="w-[81.27px] h-[25.52px] bg-[#DCE0E9] border border-slate-100 flex items-center justify-center">
                            <p className="text-blue-950 text-[11.79px] font-medium font-['Poppins']">
                              {elem.prodName}
                            </p>
                          </div>
                          <div className="w-[80.27px] h-[25.52px] bg-[#DCE0E9] border border-slate-100 flex items-center justify-center">
                            <p className="text-blue-950 text-[11.79px] font-medium font-['Poppins']">
                              {elem.date}
                            </p>
                          </div>
                          <div className="w-[82.38px] h-[25.52px] bg-[#DCE0E9] border border-slate-100 flex items-center justify-center">
                            <p className="text-blue-950 text-[11.79px] font-medium font-['Poppins']">
                              {elem.action}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="w-[327px] h-[272px] bg-white rounded-lg border border-zinc-500 border-opacity-50 p-5">
                  <div className="mb-2">
                    <h2 className="text-blue-950 text-xl font-[900] font-['Poppins'] flex flex-col">
                      Employees
                      <span className="text-blue-950 text-xs font-normal font-['Poppins']">
                        4 Activities
                      </span>
                    </h2>
                  </div>
                  <div>
                    <div className="flex">
                      <div className="w-[67.97px] h-[21.77px] bg-blue-950 rounded-tl-[3.19px] border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.50px] font-medium font-['Poppins']">
                          ID#
                        </p>
                      </div>
                      <div className="w-[113.65px] h-[21.77px] bg-blue-950 border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.50px] font-medium font-['Poppins']">
                          Name
                        </p>
                      </div>
                      <div className="w-[89.22px] h-[21.77px] bg-blue-950 rounded-tr-[3.19px] border border-slate-100 flex justify-center items-center">
                        <p className="text-white text-[11.50px] font-medium font-['Poppins']">
                          Date
                        </p>
                      </div>
                    </div>
                    {/* Table side  */}
                    <div className="h-[155px] overflow-y-auto scroll-snap-type-y">
                      {data &&
                        data.map((elem, index) => (
                          <div className="flex" key={index}>
                            <div className="w-[67.97px] h-[21.77px] bg-blue-950 bg-opacity-20 border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[10.50px] font-medium font-['Poppins']">
                                {elem.id}
                              </p>
                            </div>
                            <div className="w-[113.65px] h-[21.77px] bg-blue-950 bg-opacity-20 border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[10.50px] font-medium font-['Poppins']">
                                {elem.name}
                              </p>
                            </div>
                            <div className="w-[89.22px] h-[21.77px] bg-blue-950 bg-opacity-20 border border-slate-100 flex justify-center items-center">
                              <p className="text-blue-950 text-[10.50px] font-medium font-['Poppins']">
                                {new Date(elem.created_at).toLocaleDateString()}
                                {/* {new Date(elem.created_at).toLocaleString(
                                  "default",
                                  { month: "long", day: "numeric" }
                                )} */}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="w-[539px] h-[272px] bg-white rounded-lg border border-zinc-500 border-opacity-50 p-5">
                  <div>
                    <h2 className="text-blue-950 text-xl font-[900] font-['Poppins'] flex flex-col">
                      Stack and Sales
                      <span className="text-blue-950 text-xs font-normal font-['Poppins']">
                        2023
                      </span>
                    </h2>
                    <div className="flex justify-center gap-[65px] h-auto">
                      <div className="flex flex-col gap-3">
                        <CircularProgressBar
                          percentage={40}
                          setRadius={100}
                          stroke={23}
                          // secColor={true}
                          isLarge={true}
                        />
                        <p className="text-center text-blue-950 text-base font-bold font-['Poppins']">
                          Total Stock
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <CircularProgressBar
                          percentage={78}
                          setRadius={100}
                          stroke={23}
                          secColor={true}
                          isLarge={true}
                        />
                        <p className="text-center text-[#FEAC00] text-base font-bold font-['Poppins']">
                          Total Stock
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[327px] h-[272px] bg-white rounded-lg border border-zinc-500 border-opacity-50 p-5">
                  <div>
                    <h2 className="text-blue-950 text-xl font-[900] font-['Poppins'] flex flex-col">
                      Annual Sales
                      <span className="text-blue-950 text-xs font-normal font-['Poppins']">
                        2023
                      </span>
                    </h2>
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

export default Report;
