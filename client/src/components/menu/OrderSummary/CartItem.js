import React from 'react'
import { useState  } from 'react'
import '../../../Style/CartItem.css'
let img,name,size,price

const CartItem = (props) => {

    if(typeof props.product!="undefined"){
         img=props.product.image 
         name=props.product.name 
         size=props.product.nutrition 
         price=parseFloat(props.product.price)
    }
    else{
         img="https://ultimatewebsolutions.net/foodboard/img/bg/empty-cart-small.jpg" 
         name="Your cart is empty" 
         size="Start adding items" 
         price=0
    }

    

    const [qty,setQty] = useState(1);    
    const [totalPrice,setTotalPrice] = useState(price);
     
    const increaseQty= ()=> {
                setQty(pre => pre+1)
                setTotalPrice( pre=> pre+price)
                props.addTotal(price)
    }

    const decreaseQty = () => {
        if(qty>0){
            setQty(pre=>pre-1);
            setTotalPrice(pre=> pre-price)
            props.addTotal(-price)
        }
    }

    return(
            <li id="cartItem04M">
                <div class="order-list-img">
                    <img src={img} alt=""/>
                </div>
                <div class="order-list-details">
                    <div>
                        <h4> {name} <br/>    <small>{size}</small>    </h4>
                        <div class="qty-buttons"> 
                            <i class="fa-solid fa-minus qtyminus" onClick={decreaseQty}></i>
                            <input type="text" name="qty" value={qty} class="qty"/> 
                            <i class="fa-solid fa-plus qtyplus" onClick={increaseQty}></i>
                        </div>
                    </div>
                    <div>
                        <div class="order-list-price">$ {totalPrice.toFixed(2)}</div>
                        <div class="order-list-delete">
                            <a href="google.com" id="deleteCartItem04M"><i class="fa-solid fa-trash-can"></i></a>
                        </div>
                    </div>
                    
                </div>
            </li>
         );
}
 export default CartItem