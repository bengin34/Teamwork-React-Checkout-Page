import ProductCard from "./ProductCard";


const CardTotal = ({newData,deleteProduct,increase,decrease}) => {


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
