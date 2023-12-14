import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Icon } from "@iconify/react";
import useFetch from "../API/useFetch";
import axios from "axios";

const AddProduct = ({ trigger, closeUI }) => {
  const [isShowed, setIsShowed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0.0);
  const [productName, setProductName] = useState("");
  // const [option, setOption] = useState({
  //   category: null,
  // });
  const [option, setOption] = useState([]);
  const [prodData, setProdData] = useState({
    prod_name: "",
    price: 0,
    description: "",
    status: false,
    category_id: "",
  });
  const [stockAmount, setStockAmount] = useState(0);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  useEffect(() => {
    setIsShowed(trigger);
  }, [trigger]);

  const handleClick = () => {
    setIsShowed(false);
    closeUI();
  };

  const {
    data: categories,
    loading,
    error,
  } = useFetch("http://cloudbox.test/api/category");

  const display = () => {
    console.log("Product Name: ", prodData.prod_name);
    console.log("Price: ", prodData.price);
    console.log("description: ", prodData.description);
    // console.log("Quantity: ", prodData.status);
    console.log("Available: ", prodData.status);
    console.log("Category: ", prodData.category_name);
  };

  useEffect(() => {
    if (categories) {
      const mappedOptions = categories.map((category) => ({
        value: category.category_id,
        label: category.category_name,
      }));
      setOption(mappedOptions);
      console.log("mapped", mappedOptions);
    }
  }, [categories]);

  const submitProduct = async () => {
    console.log("data}} ", prodData);
    display();

    try {
      const resProduct = await axios.post(
        "http://cloudbox.test/api/product",
        prodData
      );

      if (resProduct.ok) {
        console.log("Product information successfully stored.");
      } else {
        console.log("Failed to store product information.");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProdData({
      ...prodData,
      [name]: value,
    });
  };

  const handleCategoryChange = (selectedOption) => {
    if (selectedOption && selectedOption.value) {
      setProdData({
        ...prodData,
        category_name: selectedOption.value, // Ensure the correct property is updated
      });
      console.log("Selected category:", selectedOption.value);
    }
  };

  const handleCheckBoxChange = (e) => {
    const { checked } = e.target;
    setProdData({
      ...prodData,
      status: checked, // Update prodData.status based on the checkbox
    });
    setIsChecked(checked); // Update the isChecked state
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
            <div className="flex flex-col h-full px-0 py-3">
              <div className="flex gap-5 flex-col justify-center items-center">
                <div className="flex flex-row gap-6">
                  <div>
                    <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                      Product Name
                    </h3>
                    <input
                      placeholder="Milk Bar"
                      name="prod_name"
                      value={prodData.prod_name}
                      className="w-[138px] h-[36px] bg-zinc-100 rounded-[5px] pl-2 placeholder-gray-500"
                      onChange={handleProductChange}
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                      Category
                    </h3>
                    {/* <Select
                      className="w-[135px] h-[29px]"
                      name="category_name"
                      options={option}
                      // value={prodData.category_name}
                      value={prodData.category_name}
                      onChange={handleCategoryChange}
                    /> */}
                    <Select
                      className="w-[135px] h-[29px]"
                      options={option}
                      value={option.find(
                        (option) => option.value === prodData.category_name
                      )}
                      onChange={handleCategoryChange}
                    />
                  </div>

                  <div>
                    <div>
                      <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                        Price
                      </h3>
                      <div className="bg-zinc-100 pl-2 w-fit rounded-[5px] flex items-center">
                        <span className="text-sky-800 font-['Poppins']">$</span>
                        <input
                          id="price"
                          name="price"
                          type="number"
                          value={prodData.price}
                          onChange={handleProductChange}
                          className="w-[108px] h-[36px] bg-zinc-100 pl-2 rounded-[5px] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex w-full gap-10">
                  <div className="w-[50%]">
                    <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                      Description
                    </h3>
                    <textarea
                      name="description"
                      value={prodData.description}
                      // Adjust the number of columns as needed
                      style={{ resize: "none" }}
                      className="border border-gray-300 p-2 rounded-md w-full "
                      placeholder="Product description..."
                      onChange={handleProductChange}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                        Quantity
                      </h3>
                      <div className="bg-zinc-100 pl-2 w-fit rounded-[5px] flex items-center">
                        <input
                          type="number"
                          // name="description"
                          value={quantity}
                          onChange={handleProductChange}
                          className="w-[108px] h-[36px] bg-zinc-100 pl-2 rounded-[5px] focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[12px] font-bold text-white font-['Poppins']">
                        Available:
                      </h3>
                      <input
                        type="checkbox"
                        name="status"
                        value={"test"}
                        checked={isChecked}
                        onChange={handleCheckBoxChange}
                        className="mr-2" // Optional: Use Tailwind CSS for styling
                      />
                    </div>
                    {/* <input
                      type="file"
                      accept="image/*"
                      // onChange={handleImageChange}
                      className="mt-4" // Optional: Use Tailwind CSS for styling
                    /> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[10%]">
                <button
                  className="w-[159.62px] h-[30.14px] bg-amber-500 hover:bg-white rounded-[25.61px] flex justify-center items-center text-white hover:text-amber-500"
                  onClick={
                    // display
                    submitProduct
                  }
                >
                  <p className="text-[14px] font-bold font-['Poppins']">
                    Register
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
