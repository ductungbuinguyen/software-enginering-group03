import React from 'react'
import { useState  } from 'react'
import '../../../Style/CartItem.css'

const CartItem = (props) => {
    let food = {
        name: "Your cart is empty",
        image: "https://ultimatewebsolutions.net/foodboard/img/bg/empty-cart-small.jpg",
        price: 0,
        nutrition: "Start adding items",
        qty:0
    }

    if(typeof props.product!="undefined"){
        food.name=props.product.name
        food.image=props.product.image
        food.price=parseFloat(props.product.price)
        food.nutrition=props.product.nutrition
        food.qty=props.product.qty
   }
    
    const increaseQty= ()=> {
                props.handleIncr(props.index)
                props.addTotal(food.price)
    }

    const decreaseQty = () => {
                if(props.product.qty>0){
                    props.handleDecr(props.index)
                    props.addTotal(-food.price)
                }
    }
    const handleDelete = () => {
        props.addTotal(-food.price*food.qty)
        props.handleDelete(props.index)
    }

    return(
            <li className="cartItem04M">
                <div class="order-list-img">
                    <img src={food.image} alt=""/>
                </div>
                <div class="order-list-details">
                    <div>
                        <h4> {food.name} <br/>    <small>{food.nutrition}</small>    </h4>
                        <div class="qty-buttons"> 
                            <i class="fa-solid fa-minus qtyminus" onClick={decreaseQty}></i>
                            <input type="text" name="qty" value={food.qty} class="qty"/> 
                            <i class="fa-solid fa-plus qtyplus" onClick={increaseQty}></i>
                        </div>
                    </div>
                    <div>
                        <div class="order-list-price">$ {food.price*food.qty.toFixed(2)}</div>
                        <div class="order-list-delete">
                            <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
                        </div>
                    </div>
                    
                </div>
            </li>
         );
}
 export default CartItem