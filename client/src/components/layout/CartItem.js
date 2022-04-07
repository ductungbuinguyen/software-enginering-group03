import React from 'react'
import '../../Style/CartItem.css'

const img=require(`./pizza.jpg`)
const name=`Fitness`
const size=`Medium: 32cm`
let price=7.9

class CartItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            totalPrice:price
        };
        this.increaseQty = this.increaseQty.bind(this);
        this.decreaseQty = this.decreaseQty.bind(this);
      }
      increaseQty(){
        this.setState({
            qty:this.state.qty+1,
            totalPrice:(this.state.qty+1)*price
        })
        this.props.addTotal(price)
      }
      decreaseQty(){
        if(this.state.qty>0){
            this.setState({
                qty:this.state.qty-1,
                totalPrice:(this.state.qty-1)*price
            })
            this.props.addTotal(-price)
        }
        
      }

      render() {
        return(
            <li id="cartItem04M">
                <div class="order-list-img">
                    <img src={img} alt=""/>
                </div>
                <div class="order-list-details">
                    <div>
                        <h4> {name} <br/>    <small>{size}</small>    </h4>
                        <div class="qty-buttons"> 
                            <i class="fa-solid fa-minus qtyminus" onClick={this.decreaseQty}></i>
                            <input type="text" name="qty" value={this.state.qty} class="qty form-control"  onChange={this.changQty}/> 
                            <i class="fa-solid fa-plus qtyplus" onClick={this.increaseQty}></i>
                        </div>
                    </div>
                    <div>
                        <div class="order-list-price">$ {this.state.totalPrice.toFixed(2)}</div>
                        <div class="order-list-delete">
                            <a href="google.com" id="deleteCartItem04M"><i class="fa-solid fa-trash-can"></i></a>
                        </div>
                    </div>
                    
                </div>
            </li>
         );
      }
}
 export default CartItem