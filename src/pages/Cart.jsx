import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex flex-row justify-center gap-x-[150px]">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col gap-y-[370px] ">

        <div className="flex flex-col mt-[100px]">
          <div className="font-bold text-xl text-green-600">YOUR CART</div>
          <div className="font-bold mb-5 uppercase text-green-600 text-4xl">Summary</div>
          <p>
            <span className="font-bold text-gray-900">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col mb-[200px] gap-4 ">
          <p className="text-gray-700 font-bold">Total Amount: ${totalAmount}</p>
          <button className="font-bold text-white bg-green-600 rounded p-2 w-[330px]">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col gap-4 justify-center items-center mt-[250px]">
      <h1 className="font-bold uppercase">Cart Empty!</h1>
      <Link to={"/"}>
        <button className="font-bold text-white bg-green-600 rounded p-2 w-[200px]">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
