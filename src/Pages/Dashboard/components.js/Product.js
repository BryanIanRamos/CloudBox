import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ProdData from "../../../tempData/ProdData";
import useFetch from "../../../API/useFetch";
import IMG from "../../../Assets/box-medium.png";
import AddProduct from "../../../Components/AddProduct";
// src\Assets\box-medium.png

const Product = ({ trigger }) => {
  const [filter, setFilter] = useState(false);
  const [Back, setBack] = useState(true);
  const [product, setProduct] = useState([]);
  // const [isShowed] = AddProduct({
  //   trigger: false,
  // });
  const [addProduct, setAddProduct] = useState(false);

  console.log("Set:", addProduct);

  const closeUI = () => {
    setAddProduct(false);
  };

  const handleClick = () => {
    setBack(false);
    trigger(Back);
  };
  // setAddProduct(isShowed);

  useEffect(() => {
    setBack();
  }, []);

  const openUIProd = () => {
    setAddProduct(true);
    // setTimeout(() => {
    //   setAddProduct(false);
    // }, 1000);
  };

  // console.log("test:", process.env.REACT_APP_PRODUCT_STOCK_API_URL);
  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCT_STOCK_API_URL)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is not fetch");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("Product Data::", data);
        // console.log("Data::", data);

        setProduct(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  // console.log("Product::", product);

  return (
    <div className="relative">
      <AddProduct trigger={addProduct} closeUI={closeUI} />
      <div className="px-20">
        <div className="flex relative items-center h-10 mb-5">
          <div className="text-blue-950 text-[32px] font-bold font-['Poppins']">
            Products
          </div>
          <button
            className="flex gap-2 items-center absolute right-0 bg-primaryColor py-1 px-3 rounded-md"
            onClick={handleClick}
          >
            <Icon
              icon="icon-park-twotone:back"
              style={{ color: "white" }}
              className="h-[19px] w-[19px] "
            />
            <span className="text-white">Back</span>
          </button>
        </div>

        <div>
          <div className="flex">
            <button
              className={`w-[150px] h-[29px] ${
                !filter ? "bg-white" : "bg-[#E8E8E8]"
              } rounded-tl-[25px] rounded-tr-[25px] border border-stone-300 relative z-[1]
                            flex gap-3 items-center justify-center`}
              onClick={() => {
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

          {/* //-------------Main Part-------------// */}
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
                  <button
                    className="w-[74px] h-[27px] bg-sky-800 hover:bg-sky-900 rounded-[25.48px] absolute right-0 flex items-center justify-center"
                    onClick={openUIProd}
                  >
                    <span className="text-white text-xs font-bold font-['Poppins']">
                      Add
                    </span>
                  </button>
                </div>
                {/* Here */}
                {product ? (
                  <div
                    className="grid grid-cols-3 gap-2 px-[30px] overflow-auto"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {product.map((elem, index) => (
                      <div key={elem.prod_id}>
                        <div className="w-[205px] h-[237px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
                          <div className="relative">
                            <div className=" bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
                              <p className=" text-white text-[7px] font-bold font-['Poppins']">
                                {elem.price} php
                              </p>
                            </div>
                            <img
                              className="w-[181px] h-[107px] rounded-md border bg-gray-400"
                              // src={elem.img}
                              // src={elem.thumbnail}
                              alt="profile"
                            />
                          </div>
                          <div>
                            <p className="text-black text-[16px] font-bold font-['Poppins'] py-1 overflow-hidden  h-[29px]">
                              {/* {elem.name} */}
                              <span>{elem.prod_name}</span>
                              {/* {console.log("Checker", elem.prod_name)} */}
                            </p>
                          </div>
                          <div>
                            <p className="w-[181px] h-[29px] text-black text-[9px] font-normal font-['Poppins'] overflow-hidden ">
                              <span> {elem.status}</span>
                            </p>
                          </div>
                          <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-2 mt-1">
                            <p className=" text-white text-[7.84px] font-bold font-['Poppins']">
                              QTY {elem.quantity}
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
                ) : (
                  <div>Loading...</div>
                )}
              </>
            ) : (
              //-------------Filtered Part-------------//
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

                {product ? (
                  <div
                    className="grid grid-cols-3 gap-2 px-[30px] overflow-auto"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {product.map((elem, index) => (
                      <div key={elem.id}>
                        <div className="w-[205px] h-[237px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
                          <div className="relative">
                            <div className=" bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
                              <p className=" text-white text-[7px] font-bold font-['Poppins']">
                                {elem.price} php
                              </p>
                            </div>
                            <img
                              className="w-[181px] h-[107px] rounded-md border bg-gray-400"
                              // src={elem.img}
                              // src={elem.thumbnail}
                              alt="profile"
                            />
                          </div>
                          <div>
                            <p className="text-black text-[16px] font-bold font-['Poppins'] py-1">
                              {/* {elem.name} */}
                              {elem.prod_name}
                            </p>
                          </div>
                          <div>
                            <p className="w-[181px] h-[42px] text-black text-[12px] font-normal font-['Poppins'] overflow-hidden">
                              {elem.status}
                            </p>
                          </div>
                          {/* <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-2 mt-1">
                          <p className=" text-white text-[6.84px] font-bold font-['Poppins']">
                            QTY {elem.stock}
                          </p>
                        </div> */}
                          <div className="flex justify-end gap-1 mt-2">
                            <div className="w-auto h-auto bg-sky-800 rounded-[17.22px] px-4 py-1 flex items-center justify-center">
                              <span className="text-white text-[9.11px] font-bold font-['Poppins']">
                                QTY: {elem.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
