
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>

      <div className="flex flex-row h-[250px] w-[540px] justify-center items-center border-b-slate-600 border-b-2 mt-6 gap-x-9 ">

        <div className="max-w-[300px]">
          <img src={item.image}  className="h-[180px] w-[320px]"/>
        </div>
        <div className="flex flex-col gap-4 ml-2">
          <h1 className="font-bold text-gray-700 text-[18px]">{item.title}</h1>
          <h1 className="text-sm text-gray-600  "> {item.description.split(" ").slice(0, 15).join(" ")}...</h1>
          <div className="flex flex-row gap-x-[250px]">
            <p className="font-bold text-green-600">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <AiTwotoneDelete className="text-2xl cursor-pointer text-red-600"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
