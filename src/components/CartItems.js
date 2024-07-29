import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

 const CartItems = ({item,itemIndex}) =>{ 

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed From Cart");
    }

    return(
        <div>
            <div>
                <div>
                    <img src={item.image}/>
                </div>
                <div>
                    <h1>{item.title} </h1>
                    <h2>{item.description}</h2>
                </div>
                <div>
                    <p>{item.price}</p>
                    <div
                    onClick={removeFromCart}
                    >
                        <MdDelete  />
                    </div>
                </div>
                
            </div>
           
        </div>
    )
};

export default CartItems;