import ProductCard from "./ProductCard";
// import data from "../helper/data";
import { useEffect, useState } from "react";
import axios from 'axios'

const CardTotal = () => {
  const [newData, setNewData] = useState([]);


  const getProductsFromApi = async() =>{
try {
  const BASE_URL = "https://63f9f851897af748dcc6a604.mockapi.io/products"
  const  { data }  =  await axios(BASE_URL)
    setNewData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
  getProductsFromApi()
  },[])







  // const multiply = (productId) => {
  //   const updatedData = newData.map((item) => {
  //     if (item.id === productId) {
  //       return { ...item, newPrice: item.amount * item.price };
  //     }
  //     return item;
  //   });
  //   setNewData(updatedData);
  // };

  const increase = (productId) => {
    const updatedData = newData.map((item) => {
      if (item.id === productId) {
        multiply(productId);
        return { ...item, amount: item.amount + 1 };
      }

      return item;
    });
    setNewData(updatedData);
  };

  const decrease = (productId) => {
    const updatedData = newData.map((item) => {
      if (item.id === productId && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setNewData(updatedData);
  };

  const subtotal = newData.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  const tax = (subtotal * 0.18).toFixed(2);
  const shipping = 300;

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        <div>
          <h2>Card Total</h2>
        </div>

        <div>
          {newData.map((item) => {
            return (
              <ProductCard
                amount={item.amount}
                decrease={decrease}
                increase={increase}
                key={item.id}
                {...item}
              />
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
      </div>
    </div>
  );
};

export default CardTotal;
