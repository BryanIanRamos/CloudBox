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
  const [income, setIncome] = useState(500);
  const [description, setDescription] = useState("Transaction Description");
  const [update_balance, setUpdate_balance] = useState(1500);
  const [location, setLocation] = useState("Sample City");
  const [account_id, setAccount_id] = useState(id);

  // const [selectedProducts, setSelectedProducts] = useState([]);

  //   Sales Data
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total_amount, setTotalAmount] = useState(0);
  const [prod_id, setProduct] = useState(null);
  const [trans_id, setTrans_id] = useState(1);

  //   Product
  const [selectedProd, setSelectedProd] = useState([]);
  const [selectedTrans, setSelectedTrans] = useState([]);
  const [selectedSales, setSelectedSales] = useState([]);
  const [filProd, setFilProd] = useState([]);

  const [productName, setProductName] = useState("");
  const [prodPrice, setProdPrice] = useState(0);

  const formSalesData = {
    quantity,
    total_amount,
    prod_id,
    trans_id,
  };

  const { data: products } = useFetch("http://cloudbox.test/api/product");
  // const { data: transDT } = useFetch("http://cloudbox.test/api/transaction");

  // const transLength = transDT.length;
  // setTrans_id(transDT[transLength].trans_id);

  useEffect(() => {
    setIsShowed(trigger); // Set isShowed directly based on the trigger prop
  }, [trigger]);

  // Filter products based on the productIdToMatch
  //   useEffect(() => {
  const [amountsArray, setAmountsArray] = useState([]);

  useEffect(() => {
    const qtyLength = qty.length;
    // console.log("::", qty.length);
    if (qtyLength === 0) {
      // Set amount to a default value or handle the empty condition as needed
      setAmount(0 * (filProd?.price || 0)); // Replace DEFAULT_VALUE with the value you want to set
    } else {
      setAmount(qty[qtyLength - 1] * (filProd?.price || 0));
    }
  }, [selectedProd, qty]);

  useEffect(() => {
    setTotalAmount(amountsArray.reduce((acc, curr) => acc + curr, 0)); // Sum all amounts in the array
  }, [amountsArray]);

  const prodDisply = () => {
    if (products && products.length > 0) {
      const filteredProduct = products.find(
        (product) => product.prod_id === prod_id
      );

      setSelectedSales((prevSelectedSales) => [
        ...prevSelectedSales,
        formSalesData,
      ]);

      setQty((quant) => [...quant, quantity]);

      if (filteredProduct) {
        setFilProd(filteredProduct);
        setSelectedProd((prevSelectedProd) => [
          ...prevSelectedProd,
          filteredProduct,
        ]);

        setAmountsArray((prevAmounts) => [
          ...prevAmounts,
          quantity * (filteredProduct?.price || 0),
        ]); // Update amounts array
      }
    }
    manageSales();
  };

  const manageSales = async () => {
    // e.preventDefault();

    console.log("Transaction Data::");
    console.log("Transaction Type:", trans_type);
    console.log("quantity: ", quantity);
    console.log("income: ", income);
    console.log("description: ", description);
    console.log("Location: ", location);
    console.log("Account ID: ", account_id);

    //Sales Data
    console.log("Sales Data::");
    console.log("QTY", quantity);
    console.log("Total Amount", total_amount);
    console.log("Product ID", prod_id);
    console.log("Transaction ID", trans_id);

    // console.log("JSON FILE: ", formSalesData);

    if (quantity && total_amount && prod_id && trans_id) {
      try {
        const resSales = await fetch("http://cloudbox.test/api/sales", {
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
          throw new Error(`Error: ${resSales.status} - ${resSales.statusText}`);
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

  // const manageSales = async () => {
  //   try {
  //     const resSales = await fetch("http://cloudbox.test/api/sales", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Add other necessary headers if required by the API
  //       },
  //       body: JSON.stringify(formSalesData),
  //     });

  //     if (resSales.ok) {
  //       const salesData = await resSales.json();
  //       console.log("Response from Sales API:", salesData);
  //       console.log("Post sales successful");
  //       // Perform actions after a successful POST request
  //     } else {
  //       throw new Error(`Error: ${resSales.status} - ${resSales.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error("Error while fetching data:", error);
  //     // Handle error cases (e.g., display an error message to the user)
  //   }
  // };

  const handleTransaction = async (e) => {
    //   Transaction Data

    const formTransData = {
      trans_type,
      income,
      description,
      update_balance,
      location,
      account_id,
    };

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
        const resTransaction = await fetch(
          "http://cloudbox.test/api/transaction",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(
              //     {
              //   trans_type,
              //   income,
              //   description,
              //   update_balance,
              //   location,
              //   account_id,
              // }
              formTransData
            ), // Use salesData here instead of resSales
          }
        );

        if (resTransaction.ok) {
          // If the response is okay (status 200-299), do something with the response data
          const transData = await resTransaction.json();
          console.log("Post Transaction successful");
          console.log("Response from  Transaction API:", transData);
          setTrans_id(transData.trans_id);
          console.log("Transaction ID ++: ", transData.trans_id);

          // Perform any action needed after a successful POST request

          // setTimeout(() => {
          //   UIclose();
          //   toast.success(
          //     "Transaction Successful",
          //     {
          //       hideProgressBar: true,
          //     },
          //     200
          //   );
          // }, 380);
        } else {
          // Handle error cases for the POST request
          throw new Error(
            `Error: ${resTransaction.status} - ${resTransaction.statusText}`
          );
        }
      } catch (error) {
        // Catch any errors that occur during the fetch request
        console.error("Error while fetching data:", error);
        // Perform actions (if any) for error handling
      }
    } else {
      console.log("INVALID TRANSACTION");
    }
  };

  return (
    <div className={isShowed ? " " : "hidden"}>
      {/* <button onClick={UIclose}>Back</button> */}
      <div
        className="w-full h-full absolute flex flex-row
                    justify-center items-center px-[130px] z-20 bg-gray-600"
      >
        <div className="w-full h-[465px] bg-[#072060] flex relative ">
          <div className="bg-[#F2EFEF] h-full w-[217px]">
            <img className="w-full h-[136px]" src="#" alt="Product_img"></img>
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
              {/* <div className="flex  text-sky-800 text-[10px] font-['Poppins'] mt-1">
                <p className="w-[65px] mr-2 overflow-hidden">
                  1 | <span>Product 1</span>
                </p>
                <span className="w-[30px] mr-[25px] overflow-hidden">12</span>
                <span className="w-[60px] overflow-hidden">Total</span>
              </div> */}
            </div>
            <div className="text-sky-800 text-base font-bold font-['Poppins'] p-2">
              <p>Total ${total_amount.toFixed(2)}</p>
            </div>
          </div>
          <div className="absolute right-[50px] w-[400px] h-full flex ">
            <div className=" w-full flex flex-col  items-center mt-5">
              <Icon
                icon="solar:box-bold-duotone"
                className="h-[68px] w-[64px] text-white"
                onClick={UIclose}
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
