import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useFetch from "../../../API/useFetch";
import { toast } from "react-toastify";

const UpdateProd = ({ setOpen, id, triggerUI }) => {
  // const [isClose, setIsClose] = useState(false);
  // setIsClose(isOpen);
  console.log("ID:::", id);

  const [prod_name, setProd_name] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Available");
  const [category_id, setCategory_id] = useState(1);
  const [image, setImage] = useState(null);

  const [prodData, setProdData] = useState([]);
  console.log("prod_name:::", prod_name);
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  const formProdData = new FormData();

  const { data: categories } = useFetch(`${apiUrl}/api/category`);

  const submit = async () => {
    formProdData.append("prod_name", prod_name);
    formProdData.append("price", price);
    formProdData.append("description", description);
    formProdData.append("status", status);
    formProdData.append("category_id", category_id);
    // formProdData.append("image", image);
    // console.log("Image in FormData:", formProdData.get("image"));

    // const formProdData = {
    //   prod_name,
    //   price,
    //   description,
    //   status,
    //   category_id,
    //   // image,
    // };

    // console.log(image);

    // console.log("prod_name:", formProdData.get("prod_name"));
    // console.log("price:", formProdData.get("price"));
    // console.log("description:", formProdData.get("description"));
    // console.log("status:", formProdData.get("status"));
    // console.log("category_id:", formProdData.get("category_id"));
    // console.log("image:", formProdData.get("image"));

    if (prod_name && price && description && status && category_id) {
      const parsedID = parseInt(id, 10);

      try {
        let resProduct = await fetch(
          //     // `http://cloudbox.test/api/product/${parsedID}`,
          //     // `http://cloudbox.test/api/product/1`,
          `${apiUrl}/api/product/${parsedID}`,
          {
            method: "POST", // or 'PATCH' depending on your API
            // headers: {
            //   "Content-Type": "application/json",
            // },
            // body: JSON.stringify(formProdData),
            body: formProdData,
          }
        )
          .then((resProduct) => {
            if (!resProduct.ok) {
              throw new Error("Network response was not ok");
            }
            return resProduct.json(); // Parse JSON response
          })
          .then((data) => {
            // Handle successful response
            console.log("Data updated successfully:", data);
          })
          .catch((error) => {
            console.error("There was a problem updating the data:", error);
          });
      } catch (e) {
        console.log("Error!!!");
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the file object

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result); // Set the file object to state as a base64 string
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  useEffect(() => {
    const handleUpdate = async () => {
      try {
        const parsedID = parseInt(id, 10); // Second argument specifies the radix/base (e.g., base 10)
        const response = await fetch(`${apiUrl}/api/product/${parsedID}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProdData(data);
        setProd_name(data.prod_name);
        setPrice(data.price);
        setDescription(data.description);
        setStatus(data.status);
        setCategory_id(data.category_id);
        setImage(data.image_url);
        // console.log("Update successful", data);
        // Perform additional actions after successful update if needed
      } catch (error) {
        console.error("There was an error updating the data:", error);
      }
    };
    handleUpdate();
  }, [id]);

  return (
    <div
      className={`absolute w-full h-full  z-50
                    flex justify-center items-center p-10 ${
                      !setOpen && "hidden"
                    }`}
    >
      <div
        //   key={elem.prod_id}
        className="shadow-md"
      >
        <div className="w-[305px] h-[337px] bg-white rounded-md border border-zinc-500 border-opacity-50 p-[10px]">
          <div className="relative">
            <div className=" bg-amber-500 rounded-2xl flex items-center justify-center px-3 py-1 absolute m-2">
              <p className=" text-white text-[9px] font-semibold font-['Poppins']">
                {/* {elem.price} php */}$ {price}
              </p>
            </div>
            <img
              className="w-[281px] h-[167px] rounded-md border bg-gray-400"
              // src={elem.img}
              // src={`${prodData.image_url}`}
              // src={`${image}`}
              src={image}
              alt="profile"
            />
          </div>
          <div>
            <p className="text-black text-[16px] font-bold font-['Poppins'] py-1 overflow-hidden  h-[29px] p-1">
              {/* {elem.name} */}
              {/* <span>{elem.prod_name}</span> */}
              {/* {console.log("Checker", elem.prod_name)} */}
              {prod_name}
            </p>
          </div>
          <div className="">
            <p className="w-[281px] h-[45px] text-black text-[12px] font-normal font-['Poppins'] mt-1 overflow-hidden p-1">
              {/* <span> {elem.description}</span> */}
              {description}
            </p>
          </div>
          <div className="w-fit h-[15.14px] bg-sky-800 rounded-xl flex items-center justify-center px-3 py-3 mt-1 p-1">
            <p className=" text-white text-[12px] font-bold font-['Poppins']">
              {/* QTY {elem.quantity} */}
              QTY 10
            </p>
          </div>
          <div className="flex justify-end gap-1">
            {/* <div className=" h-auto bg-gray-500 rounded-[17.22px] px-3 py-1 flex items-center justify-center">
              <span className="text-white text-[12px] font-bold font-['Poppins']">
                Update
              </span>
            </div>
            <div className=" h-auto bg-gray-400 rounded-[17.22px] px-4 py-1 flex items-center justify-center">
              <span className="text-white text-[12px] font-bold font-['Poppins']">
                Delete
              </span>
            </div> */}
            <div
              className="border-2 rounded-md overflow-hidden relative"
              style={{ width: "180px", height: "30px" }}
            >
              <p className="w-full h-full flex items-center text-[13px] font-semibold justify-center absolute left-[0] top-[0]">
                Upload File
              </p>
              <input
                type="file"
                accept="image/*"
                className="opacity-0 w-full h-full z-10 absolute" // Hide default input appearance but retain functionality
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[305px] h-[337px] bg-[#145499] shadow-md">
        <div className="wi-full  flex flex-col justify-center items-center relative mt-3">
          <Icon
            icon="solar:box-bold"
            style={{ color: "white" }}
            className="h-[43px] w-[43px] "
          />
          <h1 className="text-white text-xl font-bold font-['Poppins'] uppercase">
            Update Product
          </h1>
          <button
            className="text-[#FD6E67] hover:text-white"
            onClick={triggerUI}
          >
            <Icon
              icon="tabler:circle-x-filled"
              className="h-[33px] w-[33px] absolute right-3 top-0 "
            />
          </button>
        </div>
        <div className="w-full h-auto px-4 pt-2">
          <div className="w-full h-full flex flex-col gap-1">
            <div className="flex gap-2 justify-center">
              <div className="">
                <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                  Name
                </h3>
                <input
                  placeholder={prod_name}
                  name="prod_name"
                  className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
                  onChange={(e) => setProd_name(e.target.value)}
                />
              </div>
              <div className="">
                <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                  Price
                </h3>
                <input
                  type="number"
                  // step="0.01" // Define the step to allow two decimal places
                  className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
                  placeholder={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
              </div>
              {/* <input
                placeholder="Milk Bar"
                name="prod_name"
                className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
              /> */}
            </div>
            <div className="flex gap-2 justify-center">
              <div>
                <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                  QTY
                </h3>
                <input
                  type="number"
                  className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
                  // step="0.01" // Define the step to allow two decimal places
                  placeholder="Enter price"
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                  Category
                </h3>
                <select
                  name="category_name"
                  className="w-[107px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500"
                  // options={option}
                  // value={prodData.category_name}
                  value={category_id}
                  onChange={(e) => setCategory_id(e.target.value)}
                >
                  {/* <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option> */}
                  {categories &&
                    categories.map((elem) => (
                      <option key={elem.category_id} value={elem.category_id}>
                        {elem.category_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              <div className="">
                <h3 className="text-white text-[14px] font-semibold font-['Poppins']">
                  Description
                </h3>
                <textarea
                  name="description"
                  // value={prodData.description}
                  // Adjust the number of columns as needed
                  style={{ resize: "none" }}
                  className="w-[220px] h-[27.49px] text-[10px] bg-zinc-100  pl-2 placeholder-gray-500 p-1"
                  placeholder={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-center mt-1">
              <button
                className="w-[139.62px] h-[30.14px] bg-amber-500 hover:bg-white rounded-[25.61px] flex justify-center items-center text-white hover:text-amber-500"
                // onClick={
                //   // display
                //   // handleSubmit
                // }
                onClick={submit}
              >
                <p className="text-[14px] font-bold font-['Poppins']">Update</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProd;
