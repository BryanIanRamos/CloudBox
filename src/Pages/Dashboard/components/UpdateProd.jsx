import React from "react";
import { Icon } from "@iconify/react";

const UpdateProd = () => {
  return (
    <div
      className="absolute w-full h-full  z-50
                    flex justify-center items-center p-10 hidden"
    >
      <div
      //   key={elem.prod_id}
      >
        <div className="w-[305px] h-[337px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
          <div className="relative">
            <div className=" bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
              <p className=" text-white text-[9px] font-semibold font-['Poppins']">
                {/* {elem.price} php */}
                $21.00
              </p>
            </div>
            <img
              className="w-[281px] h-[167px] rounded-md border bg-gray-400"
              // src={elem.img}
              // src={elem.thumbnail}
              alt="profile"
            />
          </div>
          <div>
            <p className="text-black text-[16px] font-bold font-['Poppins'] py-1 overflow-hidden  h-[29px]">
              {/* {elem.name} */}
              {/* <span>{elem.prod_name}</span> */}
              {/* {console.log("Checker", elem.prod_name)} */}
              Name
            </p>
          </div>
          <div>
            <p className="w-[281px] h-[49px] text-black text-[9px] font-normal font-['Poppins'] overflow-hidden border">
              {/* <span> {elem.description}</span> */}
              Description.....................................
            </p>
          </div>
          <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-3 mt-1">
            <p className=" text-white text-[12px] font-bold font-['Poppins']">
              {/* QTY {elem.quantity} */}
              QTY 10
            </p>
          </div>
          <div className="flex justify-end gap-1">
            <button className=" h-auto bg-amber-500 rounded-[17.22px] px-3 py-1 flex items-center justify-center">
              <span className="text-white text-[12px] font-bold font-['Poppins']">
                Update
              </span>
            </button>
            <button className=" h-auto bg-red-400 rounded-[17.22px] px-4 py-1 flex items-center justify-center">
              <span className="text-white text-[12px] font-bold font-['Poppins']">
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[305px] h-[337px] bg-[#145499]">
        <div className="wi-full  flex flex-col justify-center items-center relative mt-3">
          <Icon
            icon="solar:box-bold"
            style={{ color: "white" }}
            className="h-[43px] w-[43px] "
          />
          <h1 className="text-white text-xl font-bold font-['Poppins'] uppercase">
            Update Product
          </h1>
          <Icon
            icon="tabler:circle-x-filled"
            className="h-[33px] w-[33px] absolute right-3 top-0 text-[#FD6E67]"
          />
        </div>
        <div className="w-full h-auto p-4">
          <div className="border w-full h-full">
            <div className="border border-green-600 flex gap-2 justify-center">
              <input
                placeholder="Milk Bar"
                name="prod_name"
                className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
              />
              <input
                placeholder="Milk Bar"
                name="prod_name"
                className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
              />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProd;
