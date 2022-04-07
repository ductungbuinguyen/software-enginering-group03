import React from 'react'
import CartItem from './CartItem';
import '../../Style/OrderSummary.css'



 class OrderSummary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {IsForm1: true};

        this.moveTo1 = this.moveTo1.bind(this);
        this.moveTo2 = this.moveTo2.bind(this);
    }

    moveTo1(){
        this.setState({IsForm1: true})
    }
    moveTo2(){
        this.setState({IsForm1: false})
    }

    render(){
        return(
            <form id='OrderSummary'>

                <div class='headerSummary'>
                  <h3>Order Summary {this.state.IsForm1?'1':'2'}/2</h3> 
                </div>

                <div class='oderDetail' style={this.state.IsForm1 ? {display:"block"} : {display:"none"} }>
                   <ul>
                       <li><CartItem/></li>
                       <li><CartItem/></li>
                       <li><CartItem/></li>
                   </ul>
                   <div class='delivery'>
                       <div>
                           <div class="check">
                               <div></div>
                           </div>
                           Delivery
                       </div>
                       <div>
                           $ 10.00
                       </div>
                   </div>
                   <div class='totalOrder'>
                       <div>
                           TOTAL
                       </div>
                       <div>
                           $ 16.80
                       </div>
                   </div>
                   <div class='continueButton' onClick={this.moveTo2}>
                       <div>
                           <div>
                               Continue Order
                           </div>
                           <i class="fa-solid fa-chevron-right"></i>
                       </div>
                   </div>
   
                </div>
                
                <div class='fieldInfo' style={this.state.IsForm1 ? {display:"none"} : {display:"block"} }>
                    <input type="text" class='field' name='fullName' placeholder='Full Name'></input>
                    <input type="text" class='field' name='phone' placeholder='Phone'></input>
                    <input type="email" class='field' name='email' placeholder='Email'></input>
                    <input type="text" class='field' name='address' placeholder='Delevery Address'></input>
                    <input type="text" class='field' name='message' placeholder='Message'></input>

                    <div class='totalOrder'>
                       <div>
                           TOTAL
                       </div>
                       <div>
                           $ 16.80
                       </div>
                    </div>

                    <div class='acceptTerms'>
                       <div>
                           <input type="checkbox"></input>
                           <span>Accept </span>
                           <a href='#'>Terms</a>
                       </div>
                    </div>

                    <button  type='submit' class='submitButton'>
                        <div >
                            <div>
                                Submit
                            </div>
                           <i class="fa-solid fa-check"></i>
                        </div>
                   </button>
                   <div class='backButton' onClick={this.moveTo1}>
                       <div>
                           <div>
                               Back
                           </div>
                           <i class="fa-solid fa-chevron-right"></i>
                       </div>
                   </div>
                </div>
                
            </form>
        );
    }
 }
 export default OrderSummary