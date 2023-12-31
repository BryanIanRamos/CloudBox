import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Icon } from "@iconify/react";
import useFetch from "../API/useFetch";
import axios from "axios";
import { userData } from "./Account-cards/extensionAuth/helper";
// import { ToastContainer, toast } from "react-toastify";
import { Toaster, toast } from "sonner";

const AddProduct = ({ trigger, closeUI }) => {
  const [isShowed, setIsShowed] = useState(false);
  const { jwt } = userData();
  const { id } = userData();

  // Attribute for Product
  const [prod_name, setProd_name] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Available");
  const [category_id, setCategory_id] = useState(1);
  const [image, setImage] = useState(null);

  // Attribute for Stock
  const [quantity, setQuantity] = useState(0);
  const [prod_id, setProd_id] = useState(0);
  const [account_id, setAccount_id] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggles the isChecked state between true and false

    if (isChecked) {
      setStatus("Not Available");
    } else {
      setStatus("Available");
    }
  };

  // const formProdData = {
  //   prod_name,
  //   price,
  //   description,
  //   status,
  //   category_id,
  //   image,
  // };

  const formStockData = {
    quantity,
    prod_id,
    account_id,
    status,
    category_id,
    // image,
  };

  useEffect(() => {
    setIsShowed(trigger);
  }, [trigger]);

  const handleClick = () => {
    setIsShowed(false);
    closeUI();
  };

  const { data: categories } = useFetch(`${apiUrl}/api/category`);

  useEffect(() => {
    const submitStock = async () => {
      if (quantity && prod_id && account_id) {
        try {
          const resStock = await fetch(`${apiUrl}/api/stock`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`, // Include the bearer token in the Authorization header
            },
            body: JSON.stringify(formStockData),
          });

          console.log("Triggered Here!");

          if (resStock) {
            console.log("Stock POST successfully!");
            toast.success(
              "Stock POST successfully!",
              {
                hideProgressBar: true,
              },
              200
            );
          } else {
            toast.success(
              "POST Stock Error!",
              {
                hideProgressBar: true,
              },
              200
            );
          }
        } catch (error) {
          console.error("Error while fetching data:", error);
        }
      }
    };
    submitStock();
  }, [prod_id, account_id]);

  const handleSubmit = async () => {
    // console.log("data}} ", prodData);
    // display();

    // console.log("prod_name", prod_name);
    // console.log("price", price);
    // console.log("description", description);
    // console.log("status", status);
    // console.log("category_id", category_id);
    // console.log("image", image);

    const formProdData = new FormData();
    formProdData.append("prod_name", prod_name);
    const priceValue = parseFloat(price);
    formProdData.append("price", priceValue);
    formProdData.append("description", description);
    formProdData.append("status", status);
    formProdData.append("category_id", category_id);
    formProdData.append("image", image);

    if (prod_name && price && description && status && category_id) {
      try {
        let resProduct = await fetch(`${apiUrl}/api/product`, {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`, // Include the bearer token in the Authorization header
          },
          // body: JSON.stringify(formProdData),
          body: formProdData,
        });

        console.log("resProduct", resProduct);

        if (resProduct.ok) {
          // const contentType = resProduct.headers.get("content-type");

          // console.log(object);

          // if (contentType && contentType.includes("application/json")) {
          const data = await resProduct.json();
          setProd_id(data.prod_id);
          setAccount_id(id);
          // console.log("Product POST successfully!");

          toast.success(
            "Product POST successfully!",
            {
              hideProgressBar: true,
            },
            200
          );
          setTimeout(() => {
            closeUI();
          }, 2000);
          // } else {
          //   // Handle HTTP error
          //   console.error("HTTP error:", resProduct.status);
          // }
        } else {
          toast.info(
            "POST Product Error!",
            {
              hideProgressBar: true,
            },
            200
          );
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    } else {
      toast.info(
        "Invalid Credentials!",
        {
          hideProgressBar: true,
        },
        200
      );
    }
  };

  return [
    isShowed,
    <div
      className={`absolute py-[140px]  w-[60%] z-50 pl-[12%] h-fits ${
        isShowed ? "block" : "hidden"
      }`}
      key={null}
    >
      <div className="h-full flex justify-center items-center ">
        <Toaster richColors position="top-center" />
        <div className="w-[800px] h-full bg-white rounded-[18px] flex flex-col items-center p-7 border-2 shadow-md bg-red-400">
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
            <div className="flex flex-col h-full px-0 py-3">
              <div className="flex gap-5 flex-col justify-center items-center">
                <div className="flex flex-row gap-6  w-full justify-center mt-3">
                  <div>
                    <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                      Product Name
                    </h3>
                    <input
                      placeholder="Milk Bar"
                      name="prod_name"
                      className="w-[138px] h-[36px] bg-zinc-100 rounded-[5px] pl-2 placeholder-gray-500"
                      onChange={(e) => setProd_name(e.target.value)}
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                      Category
                    </h3>
                    <select
                      className="w-[138px] h-[36px] bg-zinc-100 rounded-[5px] pl-2 placeholder-gray-500"
                      name="category_name"
                      // options={option}
                      // value={prodData.category_name}
                      // value={category_id}
                      onChange={(e) => setCategory_id(e.target.value)}
                    >
                      {categories &&
                        categories.map((elem) => (
                          <option
                            key={elem.category_id}
                            value={elem.category_id}
                          >
                            {elem.category_name}
                          </option>
                        ))}
                    </select>
                    {/* <Select
                      className="w-[135px] h-[29px]"
                      options={option}
                      value={option.find(
                        (option) => option.value === setCategory_id(category_id)
                      )}
                      // onChange={handleCategoryChange}
                    /> */}
                    {/* <div className="border">
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full h-full"
                        onChange={(e) => {
                          const file = e.target.files[0]; // Get the file object
                          setImage(file); // Set the file object to state
                        }}
                      />
                    </div> */}
                  </div>

                  <div>
                    <div>
                      <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                        Price
                      </h3>
                      <div className="bg-zinc-100 pl-2 w-fit rounded-[5px] flex items-center">
                        <span className="text-sky-800 font-['Poppins']">$</span>
                        <input
                          type="number"
                          className=" w-[85px] h-[36px] bg-zinc-100 pl-2 rounded-[5px] focus:outline-none text-[12px]"
                          // step="0.01" // Define the step to allow two decimal places
                          placeholder="Enter price"
                          onChange={(e) => setPrice(parseFloat(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-full gap-10  justify-center">
                  <div className="w-[50%]">
                    <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                      Description
                    </h3>
                    <textarea
                      name="description"
                      // value={prodData.description}
                      // Adjust the number of columns as needed
                      style={{ resize: "none" }}
                      className="border border-gray-300 p-2 rounded-md w-full "
                      placeholder="Product description..."
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="flex gap-2 items-center mt-2">
                      <h3 className="text-[12px] font-bold text-white font-['Poppins']">
                        Available:
                      </h3>
                      <input
                        type="checkbox"
                        name="status"
                        checked={isChecked} // Use the state variable to determine checked status
                        onChange={handleCheckboxChange} // Toggle isChecked state when checkbox is clicked
                        className="mr-2" // Optional: Use Tailwind CSS for styling
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 ">
                    <div>
                      <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                        Quantity
                      </h3>
                      <div className="bg-zinc-100 pl-2 w-fit rounded-[5px] flex items-center">
                        <input
                          type="number"
                          // name="description"
                          // value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="w-[108px] h-[36px] bg-zinc-100 pl-2 rounded-[5px] focus:outline-none"
                        />
                      </div>
                      <div className="text-[9px] mt-3 w-[128px]">
                        <input
                          type="file"
                          accept="image/*"
                          className="w-full h-full"
                          onChange={(e) => {
                            const file = e.target.files[0]; // Get the file object
                            setImage(file); // Set the file object to state
                          }}
                        />
                      </div>
                    </div>
                    {/* <div className="flex gap-2 items-center">
                      <h3 className="text-[12px] font-bold text-white font-['Poppins']">
                        Available:
                      </h3>
                      <input
                        type="checkbox"
                        name="status"
                        checked={isChecked} // Use the state variable to determine checked status
                        onChange={handleCheckboxChange} // Toggle isChecked state when checkbox is clicked
                        className="mr-2" // Optional: Use Tailwind CSS for styling
                      />
                    </div> */}
                    {/* <input
                      type="file"
                      accept="image/*"
                      // onChange={handleImageChange}
                      className="mt-4" // Optional: Use Tailwind CSS for styling
                    /> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[2%]">
                <button
                  className="w-[159.62px] h-[30.14px] bg-amber-500 hover:bg-white rounded-[25.61px] flex justify-center items-center text-white hover:text-amber-500"
                  onClick={
                    // display
                    handleSubmit
                  }
                >
                  <p className="text-[14px] font-bold font-['Poppins']">
                    Submit
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];
};

export default AddProduct;
