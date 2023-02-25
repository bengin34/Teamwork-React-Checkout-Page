import ProductCard from "./ProductCard";
// import data from "../helper/data";
// import { useEffect, useState } from "react";
// import axios from "axios";

const CardTotal = ({newData,deleteProduct,increase,decrease}) => {


  // const BASE_URL = "https://63f9f851897af748dcc6a604.mockapi.io/products";

  // const getProductsFromApi = async () => {
  //   try {
  //     const { data } = await axios(BASE_URL);
  //     setNewData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProductsFromApi();
  // }, []);

  // const deleteProduct = async (id) => {
  //   try {
  //     await axios.delete(`${BASE_URL}/${id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   getProductsFromApi();
  // };



// const handleSubmit = (e) => {

// e.preventDefault()
// // const newProduct = {name,amount,price,image,}
// postProduct()
// getProductsFromApi()
// }

// const postProduct = async (newProduct) => {
//   try {
//     await axios.post(BASE_URL, newProduct)
//   } catch (error) {
//     console.log(error)
//   }
  
// }
 



  // const multiply = (productId) => {
  //   const updatedData = newData.map((item) => {
  //     if (item.id === productId) {
  //       return { ...item, newPrice: item.amount * item.price };
  //     }
  //     return item;
  //   });
  //   setNewData(updatedData);
  // };

  // const increase = (productId) => {
  //   const updatedData = newData.map((item) => {
  //     if (item.id === productId) {
  //       // multiply(productId);
  //       return { ...item, amount: item.amount + 1 };
  //     }

  //     return item;
  //   });
  //   setNewData(updatedData);
  // };

  // const decrease = (productId) => {
  //   const updatedData = newData.map((item) => {
  //     if (item.id === productId && item.amount > 1) {
  //       return { ...item, amount: item.amount - 1 };
  //     }
  //     return item;
  //   });
  //   setNewData(updatedData);
  // };

  const subtotal = newData?.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  const tax = (subtotal * 0.18).toFixed(2);
  const shipping = 300;

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        {newData?.length > 0 ? (
          <div>
            {newData?.map((item) => {
              return (
                <>
                
                  <ProductCard
                    deleteProduct={deleteProduct}
                    amount={item.amount}
                    decrease={decrease}
                    increase={increase}
                    key={item.id}
                    {...item}
                  />
                </>
              );
            })}
            <div className="" style={{ width: "30rem" }}>
              <div className="d-flex justify-content-between">
                <h3>Subtotal</h3> <h3>${subtotal.toFixed(2)}</h3>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h3>Tax</h3> <h3>${tax}</h3>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h3>Shipping</h3> <h3>${shipping}</h3>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h3>Total</h3>{" "}
                <h3>
                  $
                  {(
                    parseFloat(subtotal) +
                    parseFloat(tax) +
                    parseFloat(shipping)
                  ).toFixed(2)}
                </h3>
              </div>
              <hr />
            </div>
          </div>
        ) : (
          <h1>Please add a new product</h1>
        )}
      </div>
    </div>
  );
};

export default CardTotal;
