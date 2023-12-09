import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Icon } from "@iconify/react";

const AddProduct = ({ trigger, closeUI }) => {
  const [isShowed, setIsShowed] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  useEffect(() => {
    setIsShowed(trigger);
  }, [trigger]);

  const [price, setPrice] = useState(0.0);

  const handleClick = () => {
    setIsShowed(false);
    closeUI();
  };

  return [
    isShowed,
    <div
      className={`absolute z-20 w-full h-full py-[120px] px-[18%] ${
        isShowed ? "block" : "hidden"
      }`}
    >
      <div className="h-full flex justify-center items-center">
        <div className="w-full h-full bg-white rounded-[18px] flex flex-col items-center p-7 border-2 shadow-md">
          {/* Header  */}
          <div className="h-20 w-full relative">
            <div className="flex items-center absolute left-0">
              <Icon
                icon="solar:box-bold-duotone"
                style={{ color: "#145499" }}
                className="h-[55px] w-[58px] mr-3"
              />
              <h3 className="text-blue-950 text-xl font-bold font-['Poppins']">
                Add Product
              </h3>
            </div>
            <button className="absolute right-0" onClick={handleClick}>
              <Icon
                icon="tabler:circle-x-filled"
                // style={{ color: "#FD6E67" }}
                className="h-[33px] w-[33px] text-[#FD6E67] hover:text-red-600"
              />
            </button>
          </div>
          {/* Body */}
          <div className="w-full h-full bg-sky-800 rounded-[18px] py-4 px-[10%] flex flex-col gap-5 ">
            <div className="flex h-full px-10 py-3 justify-center">
              <div className="flex gap-5 flex-col mr-[20%]">
                <div>
                  <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                    Product Name
                  </h3>
                  <input
                    placeholder="Milk Bar"
                    className="w-[138px] h-[36px] bg-zinc-100 rounded-[5px] pl-2 placeholder-gray-500"
                  />
                </div>

                <div>
                  <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                    Category
                  </h3>
                  <Select className="w-[135px] h-[29px]" options={options} />
                </div>
                <div>
                  <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                    Price
                  </h3>
                  <div className="bg-zinc-100 pl-2 w-fit rounded-[5px]">
                    <span className="text-sky-800 font-['Poppins']">$</span>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-[108px] h-[36px] bg-zinc-100 pl-2 rounded-[5px] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[192.08px] h-[111px] bg-white border border-black"></div>
                <div className="flex gap-4 justify-center mt-4">
                  <button className="w-[79.28px] h-[24.88px] bg-[#DDE5EF] hover:bg-[#3D83E1] text-[10px] font-semibold text-[#3D83E1] hover:text-white">
                    Browse Files
                  </button>
                  <button className="w-[79.28px] h-[24.88px] bg-[#DDE5EF] hover:bg-[#FD6E67]  text-[10px] font-semibold text-[#FD6E67]  hover:text-white">
                    Delete
                  </button>
                </div>
                <div className="flex justify-end mt-[60px]">
                  <button className="w-[159.62px] h-[30.14px] bg-amber-500 hover:bg-white rounded-[25.61px] flex justify-center items-center text-white hover:text-amber-500">
                    <p className="text-[14px] font-bold font-['Poppins']">
                      Register
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];
};

export default AddProduct;
