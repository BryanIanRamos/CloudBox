import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import ProdData from "../../../tempData/ProdData";
import useFetch from "../../../API/useFetch";
import IMG from "../../../Assets/box-medium.png";
import AddProduct from "../../../Components/AddProduct";
import UpdateProd from "./UpdateProd";
import { userData } from "../../../Components/Account-cards/extensionAuth/helper";
// import Process from ".env";

// src\Assets\box-medium.png

const Product = ({ trigger }) => {
  const [filter, setFilter] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const [ID, setID] = useState(0);
  const [deleteID, setDeleteID] = useState(0);

  const [prodStock, setProdStock] = useState();

  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  const [Back, setBack] = useState(true);
  // const [product, setProduct] = useState([]);
  // const urlAPI = import.meta.env.VITE_PRODUCT_API_URL;
  // const [isShowed] = AddProduct({
  //   trigger: false,
  // });
  const [addProduct, setAddProduct] = useState(false);

  // console.log("Set:", addProduct);

  const triggerUI = () => {
    setIsShowed(!isShowed);
  };

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
  };

  const [product, setProduct] = useState();
  const [prodLength, setProdLength] = useState(0);

  // const { data } = useFetch("http://cloudbox.test/api/product");
  const { jwt } = userData();

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`, // Include the bearer token in the Authorization header
    },
  };

  useEffect(() => {
    fetch(`${apiUrl}/api/prod-stock`, requestOptions)
      .then((res) => {
        console.log("res", res);

        if (!res.ok) {
          throw Error("Data is not fetch");
        }

        return res.json();
      })
      .then((data) => {
        // console.log("Set Data for length", data.length);
        setProdLength(data.length);
        console.log("ddata:: ", data);

        // Reverse the order of the data array before setting it in the state
        const reversedData = data.reverse();
        setProduct(reversedData);
        console.log(reversedData);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [addProduct]);

  useEffect(() => {
    const handleDelete = () => {
      if (deleteID) {
        const resourceIdToDelete = parseInt(deleteID, 10); // Example: ID of the resource you want to delete
        fetch(`${apiUrl}/api/product/${resourceIdToDelete}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            console.log("Resource deleted successfully");
            // Assuming you want to refetch the data after deletion
            setAddProduct(!addProduct);
          })
          .catch((error) => {
            console.error("There was a problem deleting the resource:", error);
          });
      }
    };

    handleDelete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteID]); // Ensure the effect runs when deleteID changes

  return (
    <>
      <div className="relative pt-[30px] flex ">
        <AddProduct trigger={addProduct} closeUI={closeUI} />
        <UpdateProd setOpen={isShowed} triggerUI={triggerUI} id={ID} />
        <div className="w-full h-full flex justify-center items-center">
          <div className="sm:px-20 pt-10 ">
            <div className="flex relative items-center justify-center h-10 mb-5 border">
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
                      {prodLength}
                    </span>
                  </div>
                </button>
                <button
                  className={`w-[150px] h-[29px] ${
                    filter ? "bg-white" : "bg-[#E8E8E8]"
                  } rounded-tl-[25px] rounded-tr-[25px] border border-stone-300 
                            flex gap-3 items-center justify-center z-[0]`}
                  onClick={() => {
                    setFilter(true);
                  }}
                >
                  <span className="text-center text-blue-950 text-[13px] font-semibold font-['Poppins']">
                    Available
                  </span>
                  <div className="w-[35px] h-[17px] bg-gray-200 rounded-[7px] flex items-center justify-center ">
                    <span className="text-zinc-500 text-[9px] font-semibold font-['Poppins']">
                      {/* filer length */}
                      {prodLength}
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
                        <input
                          onChange={(e) => {}}
                          className=" w-fit h-6 p-1"
                        />
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-[30px] overflow-auto"
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
                                  src={`${elem.image_url}`}
                                  // src={`${image}`}
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
                                  <span> {elem.description}</span>
                                </p>
                              </div>
                              <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-2 mt-1">
                                <p className=" text-white text-[7.84px] font-bold font-['Poppins']">
                                  QTY {elem.quantity}
                                </p>
                              </div>
                              <div className="flex justify-end gap-1">
                                <button
                                  className="w-[50px] h-auto bg-amber-500 rounded-[17.22px] px-3 py-1 flex items-center justify-center"
                                  onClick={() => {
                                    triggerUI();
                                    setID(elem.prod_id);
                                  }}
                                >
                                  <span className="text-white text-[8.11px] font-bold font-['Poppins']">
                                    Update
                                  </span>
                                </button>
                                <button
                                  className="w-[50px] h-auto bg-red-400 rounded-[17.22px] px-4 py-1 flex items-center justify-center"
                                  onClick={() => setDeleteID(elem.prod_id)}
                                >
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
                        <input
                          onChange={(e) => {}}
                          className=" w-fit h-6 p-1"
                        />
                      </div>
                      {/* <button className="w-[74px] h-[27px] bg-sky-800 rounded-[25.48px] absolute right-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-['Poppins']">
                      Add
                    </span>
                  </button> */}
                    </div>

                    {product && (
                      <div
                        className="grid grid-cols-3 gap-2 px-[30px] overflow-auto"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        {product.map((elem, index) => (
                          <div key={index}>
                            <div className="w-[205px] h-[237px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
                              <div className="relative">
                                <div className="bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
                                  <p className="text-white text-[7px] font-bold font-['Poppins']">
                                    {elem.price} php
                                  </p>
                                </div>
                                <img
                                  className="w-[181px] h-[107px] rounded-md border bg-gray-400"
                                  // src={elem.image_url}
                                  src={elem.image_url}
                                  alt={elem.prod_name}
                                />
                              </div>
                              <div>
                                <p className="text-black text-[16px] font-bold font-['Poppins'] py-1">
                                  {elem.prod_name}
                                </p>
                              </div>
                              <div>
                                <p className="w-[181px] h-[42px] text-black text-[12px] font-normal font-['Poppins'] overflow-hidden">
                                  {elem.description}
                                </p>
                              </div>
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
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
