
import Button from "react-bootstrap/Button";



const ShowButton = ({hideShowFunc, showAddProduct}) => {

  return (
    <div className="d-flex justify-content-center">
   <Button onClick={hideShowFunc} > {showAddProduct ? "Hide Add Product" : " Show Add Product"}</Button>
  
   </div>
  )
};

export default ShowButton;
