import Header from "../components/Header";
import ShowButton from "../components/ShowButton";
import CardTotal from "../components/CardTotal";
import { useState,useEffect } from "react";
import AddProduct from "../components/AddProduct";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

const Main = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newData, setNewData] = useState([]);

  const hideShowFunc = () => {
    setShowAddProduct(!showAddProduct);
    console.log(showAddProduct);
  };

  const BASE_URL = "https://63f9f851897af748dcc6a604.mockapi.io/products";

  const getProductsFromApi = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setNewData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getProductsFromApi();
  };

  const increase = (productId) => {
    const updatedData = newData.map((item) => {
      if (item.id === productId) {
        // multiply(productId);
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





  return (
    <div>
      <Header />
      <ShowButton hideShowFunc={hideShowFunc} showAddProduct={showAddProduct} />
      
        <h1 className="d-flex justify-content-center text-danger mt-2">Card Total</h1>
        
      {/* {showAddProduct ? (
        <div className="d-flex  justify-content-center ">
          {" "}
          <AddProduct getProductsFromApi={getProductsFromApi} /> 
          <CardTotal newData={newData} deleteProduct={deleteProduct} increase={increase} decrease={decrease}  getProductsFromApi={getProductsFromApi}/>
          {" "}
        </div>
      ) : (
        <CardTotal  newData={newData} deleteProduct={deleteProduct} increase={increase} decrease={decrease} getProductsFromApi={getProductsFromApi}/>
      )} */}
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={showAddProduct ? 4 : 12} >
          {showAddProduct && (

            <AddProduct getProductsFromApi={getProductsFromApi} />
          )}
        </Col>

        <Col xs={12} sm={showAddProduct ? 4 : 12} md={showAddProduct ? 6 : 12}>
          <CardTotal
            newData={newData}
            deleteProduct={deleteProduct}
            increase={increase}
            decrease={decrease}
            getProductsFromApi={getProductsFromApi}
          />
        </Col>
      </Row>

    </div>
  );
};

export default Main;
