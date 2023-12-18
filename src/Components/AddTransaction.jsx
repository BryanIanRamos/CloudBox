import React, { useEffect, useState } from "react";
import { userData } from "./Account-cards/extensionAuth/helper";
import useFetch from "../API/useFetch";
import { Icon } from "@iconify/react";
import { toast, useToast } from "react-toastify";

const AddTransaction = ({ trigger, UIclose }) => {
  const { id } = userData();
  const [isShowed, setIsShowed] = useState(false);
  const [isOk, SetIsOk] = useState(false);

  //   console.log("ID=>", id);

  //   Transaction Data
  const [qty, setQty] = useState([]);
  const [trans_type, setType] = useState("");
  const [parIncome, setIncome] = useState(404);
  const [description, setDescription] = useState("Transaction Description");
  const [update_balance, setUpdate_balance] = useState(1);
  const [location, setLocation] = useState("Sample City");
  const [account_id, setAccount_id] = useState(id);
  const [image, setImage] = useState(null);

  // const [selectedProducts, setSelectedProducts] = useState([]);

  //   Sales Data
  const [quantity, setQuantity] = useState(0);
  // const [amount, setAmount] = useState(500);
  const [total_amount, setTotalAmount] = useState(0);
  const [prod_id, setProduct] = useState(null);
  const [trans_id, setTrans_id] = useState(0);

  //   Product
  const [selectedProd, setSelectedProd] = useState([]);
  const [selectedTrans, setSelectedTrans] = useState([]);
  const [selectedSales, setSelectedSales] = useState([]);
  const [filProd, setFilProd] = useState([]);

  const formSalesData = {
    quantity,
    total_amount,
    prod_id,
    trans_id,
  };
  const apiUrl = import.meta.env.VITE_MY_DOMAIN_API_;

  const { data: products } = useFetch(`${apiUrl}/api/product`);
  const { data: transDT } = useFetch(`${apiUrl}/api/transaction`);
  // const { data: transDT } = useFetch("http://cloudbox.test/api/transaction");

  useEffect(() => {
    if (transDT !== null) {
      const transLength = transDT.length;

      if (transLength > 0) {
        setTrans_id(transDT[transLength - 1].trans_id);
        setUpdate_balance(transDT[transLength - 1].update_balance);
        console.log("BALANCE", update_balance);
        // console.log("setTrans_id: ", transDT[transLength - 1].trans_id);
      } else {
        // console.log("The transDT array is empty");
      }
    } else {
      // console.log("transDT is null or undefined");
    }
  }, [transDT]);

  useEffect(() => {
    setIsShowed(trigger); // Set isShowed directly based on the trigger prop
  }, [trigger]);

  // Filter products based on the productIdToMatch
  //   useEffect(() => {
  const [amountsArray, setAmountsArray] = useState([]);

  // useEffect(() => {
  //   const qtyLength = qty.length;
  //   // console.log("::", qty.length);
  //   if (qtyLength === 0) {
  //     // Set amount to a default value or handle the empty condition as needed
  //     setAmount(0 * (filProd?.price || 0)); // Replace DEFAULT_VALUE with the value you want to set
  //   } else {
  //     setAmount(qty[qtyLength - 1] * (filProd?.price || 0));
  //   }
  // }, [selectedProd, qty]);

  useEffect(() => {
    const newTotalAmount = amountsArray.reduce((acc, curr) => acc + curr, 0);
    setTotalAmount(newTotalAmount);
    setIncome(newTotalAmount);
    // Other code...
  }, [amountsArray]);

  const prodDisply = () => {
    fetchProductByID();
    if (quantity > 0 && prod_id) {
      const filteredProduct = products.find(
        (product) => product.prod_id === prod_id
      );

      if (filteredProduct) {
        const amountToAdd = quantity * (filteredProduct?.price || 0);

        setSelectedSales((prevSelectedSales) => [
          ...prevSelectedSales,
          formSalesData,
        ]);
        setQty((prevQty) => [...prevQty, quantity]);
        setAmountsArray((prevAmounts) => [...prevAmounts, amountToAdd]);

        setSelectedProd((prevSelectedProd) => [
          ...prevSelectedProd,
          filteredProduct,
        ]);
        setFilProd(filteredProduct);

        setTotalAmount((prevTotalAmount) => prevTotalAmount + amountToAdd);
      } else {
        // console.log("Product not found");
      }
    } else {
      // console.log("Quantity or Product ID is invalid");
    }
  };

  const fetchProductByID = async () => {
    // console.log("IDD", productId);

    try {
      const response = await fetch(`${apiUrl}/api/product/${prod_id}`);
      console.log("Triggered");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const productData = await response.json();
      console.log("POST OKAY");
      console.log("Proceed", productData.image_url);
      setImage(productData.image_url);

      return productData; // Return the filtered product data
    } catch (error) {
      console.error("Error fetching product data:", error.message);
      // You can handle the error accordingly
      return null;
    }
  };

  // MANAGE SALES
  useEffect(() => {
    const manageSales = async () => {
      // console.log("Transaction Data::");
      // console.log("Transaction Type:", trans_type);
      // console.log("quantity: ", quantity);
      // console.log("income: ", income);
      // console.log("description: ", description);
      // console.log("Location: ", location);
      // console.log("Account ID: ", account_id);

      //Sales Data
      // console.log("Sales Data::");
      // console.log("QTY", quantity);
      // console.log("Total Amount", total_amount);
      // console.log("Product ID", prod_id);
      // console.log("Transaction ID", trans_id);

      // console.log("JSON FILE: ", formSalesData);

      if (quantity && total_amount && prod_id && trans_id) {
        try {
          const resSales = await fetch(`${apiUrl}/api/sales`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Accept: "application/json",
            },
            body: JSON.stringify(
              // { quantity, total_amount, prod_id, trans_id }
              formSalesData
            ), // Use salesData here instead of resSales
          });

          if (resSales.ok) {
            // If the response is okay (status 200-299), do something with the response data
            const salesData = await resSales.json();
            console.log("Response from Sales API:", salesData);
            console.log("Post sales successful");
            // Perform any action needed after a successful POST request
          } else {
            // Handle error cases for the POST request
            throw new Error(
              `Error: ${resSales.status} - ${resSales.statusText}`
            );
          }
        } catch (error) {
          // Catch any errors that occur during the fetch request
          console.error("Error while fetching data:", error);
          // Perform actions (if any) for error handling
        }
      } else {
        console.log("INVALID SALES!");
      }
    };

    manageSales();
  }, [selectedSales]);

  // console.log("AMOUNT:", parIncome);

  const handleTransaction = async (e) => {
    e.preventDefault();

    // setIncome(parseFloat(total_amount.toFixed(2)));
    const parsedParIncome = parseFloat(parIncome).toFixed(2); // Parse 'parIncome' to a two-decimal value
    setUpdate_balance(parseFloat(update_balance) + parseFloat(parsedParIncome));

    const income = parseInt(parIncome.toFixed(0));
    // console.log("INCOME", parIncome);

    const formTransData = {
      trans_type,
      income,
      description,
      update_balance,
      location,
      account_id,
    };

    // console.log("trans_type", trans_type);
    // console.log("income", income);
    // console.log("description", description);
    // console.log("update_balance", update_balance);
    // console.log("location", location);

    const updateTransaction = [...selectedTrans, formTransData];
    setSelectedTrans(updateTransaction);

    // Transaction POST
    if (
      trans_type &&
      income &&
      description &&
      update_balance &&
      location &&
      account_id
    ) {
      try {
        const resTransaction = await fetch(`${apiUrl}/api/transaction`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formTransData),
        });

        if (resTransaction.ok) {
          // If the response is okay (status 200-299), do something with the response data
          const transData = await resTransaction.json();
          toast.success("Transaction Successful!", {
            hideProgressBar: true,
          });
          console.log("Post Transaction successful");
          console.log("Response from  Transaction API:", transData);
          setTrans_id(transData.trans_id);
          console.log("Transaction ID ++: ", transData.trans_id);
        } else {
          throw new Error(
            `Error: ${resTransaction.status} - ${resTransaction.statusText}`
          );
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    } else {
      console.log("INVALID TRANSACTION");
    }
  };

  console.log("filProd.img_url ", filProd.img_url);

  return (
    <div className={isShowed ? " " : "hidden"}>
      {/* <button onClick={UIclose}>Back</button> */}
      <div
        className="w-full h-full absolute flex flex-row
                    justify-center items-center px-[130px] z-20 bg-gray-600"
      >
        <div className="w-full h-[465px] bg-[#072060] flex relative ">
          <div className="bg-[#F2EFEF] h-full w-[217px]">
            <img
              className="w-full h-[136px]"
              src={image}
              alt="Product_img"
            ></img>

            <h2 className="w-full text-center text-sky-800 text-[16px] font-bold font-['Poppins'] py-1">
              {filProd ? `${filProd.prod_name}` : "...."}
            </h2>

            <div className="w-full h-[55%] shadow  border border-t-[#155699] border-b-[#155699] flex flex-col px-5">
              <div className="flex gap-8  text-sky-800 text-[13px] font-semibold font-['Poppins'] mt-3 uppercase">
                <span>Items</span>
                <span>Qty</span>
                <span>Price</span>
              </div>
              <div className="h-full overflow-y-auto max-w-full">
                {selectedProd &&
                  selectedProd.map((elem, index) => (
                    <div
                      className="flex text-sky-800 text-[10px] font-['Poppins'] mt-1"
                      key={elem.prod_id}
                    >
                      <p className="w-[65px] mr-2 overflow-hidden">
                        <span>{elem.prod_name}</span>{" "}
                      </p>
                      <span className="w-[30px] mr-[25px] overflow-hidden">
                        {qty[index]}
                      </span>
                      <span className="w-[60px] overflow-hidden">
                        {elem.price}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="text-sky-800 text-base font-bold font-['Poppins'] p-2">
              <p>Total ${total_amount.toFixed(2)}</p>
            </div>
          </div>
          <div className="absolute right-[50px] w-[400px] h-full flex ">
            <div className=" w-full flex flex-col  items-center mt-5 relative">
              <div className="absolute right-0 top-2" onClick={UIclose}>
                <Icon
                  icon="tabler:circle-x-filled"
                  // style={{ color: "#FD6E67" }}
                  className="h-[35px] w-[35px] text-[#FD6E67] hover:text-white"
                />
              </div>
              <Icon
                icon="solar:box-bold-duotone"
                className="h-[68px] w-[64px] text-white mt-4"
              />
              <h2 className="text-white text-xl font-bold font-['Poppins'] uppercase">
                Transaction
              </h2>
              <div className=" w-full flex flex-col items-center justify-center  mt-[25px] gap-[18px]">
                <div className="flex gap-[25px]">
                  <div>
                    <h3 className="text-white text-base font-bold font-['Poppins']">
                      Product
                    </h3>

                    {/* Here */}
                    <select
                      value={prod_id}
                      onChange={(e) => setProduct(parseInt(e.target.value, 10))}
                      className="w-[159px] h-[29px] bg-zinc-100"
                    >
                      <option value="">Select a product</option>
                      {products && products.length > 0 ? (
                        products.map((product) => (
                          <option key={product.prod_id} value={product.prod_id}>
                            {product.prod_name}
                          </option>
                        ))
                      ) : (
                        <option value="">No products available</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-bold font-['Poppins']">
                      Type
                    </h3>
                    <select
                      value={trans_type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-[159px] h-[29px] bg-zinc-100"
                    >
                      <option value="">Select...</option>
                      <option value="COR">COR</option>
                      <option value="Gcash">Gcash</option>
                      <option value="F2F">F2F</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                <div className="flex flex-start w-full ml-[56px]">
                  <div>
                    <h1 className="text-white text-base font-bold font-['Poppins']">
                      QTY
                    </h1>
                    <input
                      type="number"
                      className="w-[108px] h-[29px] bg-zinc-100 pl-1"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value, 10))
                      }
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex gap-[55px] mt-[60px]">
                <div className="w-[125.13px] h-[30.42px] bg-amber-500 hover:bg-amber-600  rounded-[26.82px] flex justify-center items-center">
                  <button
                    className="w-[71.21px] h-[19.39px] text-center text-white text-[14px] font-bold font-['Poppins']"
                    onClick={handleTransaction}
                  >
                    Transact
                  </button>
                </div>
                <button
                  className="w-[125.13px] h-[30.42px] bg-sky-800 hover:bg-sky-600  rounded-[26.82px] flex justify-center items-center"
                  onClick={prodDisply}
                >
                  <p className="w-[71.21px] h-[19.39px] text-center text-white text-[14px] font-bold font-['Poppins']">
                    Add
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
