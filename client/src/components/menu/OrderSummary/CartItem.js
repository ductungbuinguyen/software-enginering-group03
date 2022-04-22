import React from 'react'
import { useState  } from 'react'
import '../../../Style/CartItem.css'

const CartItem = (props) => {
    let food = {
        name: "Your cart is empty", 
        image: "https://ultimatewebsolutions.net/foodboard/img/bg/empty-cart-small.jpg",                                    
        size: "Start adding items",
        price: 0,
        qty:1
    }

    if(typeof props.food!="undefined"){
        food.name=props.food.name
        food.image=props.food.image
        food.price=parseFloat(props.food.price)
        food.size=props.food.size
        food.qty=props.food.qty
   }
    
    const increaseQty= ()=> {
        
        props.addTotal(food.price)
        props.handleQty(props.index,1)
    }

    const decreaseQty = () => {
        if(props.food.qty>0){
            props.addTotal(-food.price)
            props.handleQty(props.index,-1)
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
                        <h4> {food.name} <br/>    <small>{food.size}</small>    </h4>
                        <div class="qty-buttons"> 
                            <i class="fa-solid fa-minus qtyminus" onClick={decreaseQty}></i>
                            <input type="text" name="qty" value={food.qty} class="qty"/> 
                            <i class="fa-solid fa-plus qtyplus" onClick={increaseQty}></i>
                        </div>
                    </div>
                    <div>
                        <div class="order-list-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(food.price*food.qty)}</div>
                        <div class="order-list-delete">
                            <i class="fa-solid fa-trash-can" onClick={handleDelete}></i>
                        </div>
                    </div>
                    
                </div>
            </li>
         );
}
 export default CartItem