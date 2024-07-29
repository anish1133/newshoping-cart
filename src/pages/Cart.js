import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItems from "../components/CartItems"


 const Cart = () =>{ 

    const{cart} = useSelector( (state) => state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect ( () => {
      setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0) );  
    }, [cart]);

    return(
        <div>
        {
           cart.length > 0 ? 
           (<div>
                <div>
                    {
                        cart.map( (item,index) => {
                            return <CartItems key={item.id} item={item} itemIndex={item} />
                        } )
                    }
                </div> 
                <div>
                    <div> 
                        <div>Your Cart</div>
                        <div>Summary</div>
                        <p>
                            <span>Total Items: {cart.length}</span>
                        </p>
                    </div>

                    <div>
                        <p>Total Amount : ${totalAmount}</p>
                        <NavLink to={"/"}>
                            <button>
                                CheckOut Now
                            </button>
                        </NavLink>
                    </div>
                </div>
           </div>) 
           :
            (<div>
                <h1>Your Cart is empty</h1>
                <Link to={"/"}>
                    <button>
                        Shop Now
                    </button>
                </Link>
            </div>)
        }
        </div>
    )
};

export default Cart;