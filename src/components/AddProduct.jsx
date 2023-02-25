import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import { useState } from "react";


const AddProduct = ({getProductsFromApi}) => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [image,setImage] = useState("")


  const BASE_URL = "https://63f9f851897af748dcc6a604.mockapi.io/products";

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {name,
      amount:parseFloat(amount),
      price:parseFloat(price),
      image }
    const createProduct = {...newProduct, dampingRate:0.8}
    postProduct(createProduct)
    setName("")
    setPrice("")
    setAmount("")
    setImage("")
  
    }
    
    const postProduct = async (createProduct) => {
      try {
        await axios.post(BASE_URL, createProduct)
      } catch (error) {
        console.log(error)
      }
      getProductsFromApi()
    }
     



  return (
    <div className='mt-5 mx-5' style={{width:"20rem"}}>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3"  controlId="product">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" value={name} placeholder="Enter product name"  onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="product">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Price" value={price}  onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product" >
          <Form.Label>Product Amount</Form.Label>
          <Form.Control type="number" value={amount}   placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3"   controlId="product">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="text" value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)}  />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }} >
          Add to Card
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
