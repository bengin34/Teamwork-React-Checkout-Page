import Header from '../components/Header';
import ShowButton from '../components/ShowButton';
import CardTotal from '../components/CardTotal';
import { useState } from 'react';
import AddProduct from '../components/AddProduct';

const Main = () => {

const [showAddProduct, setShowAddProduct ] = useState(false)

 const hideShowFunc = () =>{
 
  setShowAddProduct(!showAddProduct)
  console.log(showAddProduct)
  }


    return (
        <div>
        <Header />
        <ShowButton  hideShowFunc={hideShowFunc} 
        showAddProduct={showAddProduct}  />
        
        {
            showAddProduct 
            ? <div className='d-flex justify-content-center ' > <AddProduct /> <CardTotal /> </div> 
            : <CardTotal />
        }
      
        </div>
    )
}

export default Main