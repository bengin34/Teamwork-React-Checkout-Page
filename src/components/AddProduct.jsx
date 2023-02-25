import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import { useState } from "react";


const AddProduct = ({getProductsFromApi}) => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [image,setImage] = useState("")
  const [dampingRate,setDampingRate] = useState("")

  const BASE_URL = "https://63f9f851897af748dcc6a604.mockapi.io/products";

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {name,amount,price,image,dampingRate}
    postProduct(newProduct)
    setName(" ")
    setPrice(" ")
    setAmount(" ")
    setDampingRate(" ")
    setImage(" ")
  
    }
    
    const postProduct = async (newProduct) => {
      try {
        await axios.post(BASE_URL, newProduct)
      } catch (error) {
        console.log(error)
      }
      getProductsFromApi()
    }
     



  return (
    <div className='mt-5 mx-5' style={{width:"20rem"}}>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name"  onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="product">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product" >
          <Form.Label>Product Amount</Form.Label>
          <Form.Control type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Damping Rate</Form.Label>
          <Form.Control type="number" placeholder="Damping Rate" onChange={(e) => setDampingRate(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)}  />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }} >
          Add to Card
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
