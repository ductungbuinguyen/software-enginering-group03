import React from 'react'
import CartItem from './CartItem';
import '../../../Style/OrderSummary.css'
import { useState  } from 'react'

const delevery=10;
const productTests = [
    {
        name: "Pizza",
        image: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/04.jpg",
        description:
          "Flour, sausage, tomato, cheese",
        category: "Pizza",
        price: "45.000",
        nutrition: "Medium"
    },
    {
        name: "Noodles",
        image: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/09.jpg",
        description:
          "Beaf Meat, Bacon, Cucumber, Cheese, Caramelized Onion Jam",
        category: "Noodles",
        price: "20.000",
        nutrition:"Small"
    },
    {
        name: "Salad",
        image: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items-large/06.jpg",
        description:
          "Beaf Meat, Bacon, Cucumber, Cheese, Caramelized Onion Jam",
        category: "Main Dish",
        price: "15.000",
        nutrition:"Large"
    }
]
  
 const OrderSummary = () => {
    const [IsForm1,setIsForm1] = useState(true)
    const [totalPriceOrder,setTotalPriceOrder] = useState(()=>{
        const total = productTests.reduce(  (sum, cur) => sum + parseFloat(cur.price),0  );
        return total
    }); 

    
    

    const moveTo1 = () =>{
        setIsForm1(pre=> true)
    }
    const moveTo2 = () =>{
        setIsForm1(pre=> false)
    }
    const addToTalPriceOrder = (addValue)=>{
        setTotalPriceOrder(pre => pre+addValue)
    }

    const carts = productTests.map( (productTest,index) => 
        <li key={index}>
            <CartItem product={productTest} addTotal={addToTalPriceOrder}/>
        </li>
     )

    return(
        <form id='OrderSummary'>

            <div class='headerSummary'>
              <h3>Order Summary {IsForm1?'1':'2'}/2</h3> 
            </div>

            <div class='oderDetail' style={IsForm1 ? {display:"block"} : {display:"none"} }>
                <ul>
                    { carts}
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
                        {(totalPriceOrder+delevery).toFixed(2)>10?(totalPriceOrder+delevery).toFixed(2):0}
                   </div>
               </div>
               <div class='continueButton' onClick={moveTo2}>
                   <div>
                       <div>
                           Continue Order
                       </div>
                       <i class="fa-solid fa-chevron-right"></i>
                   </div>
               </div>

            </div>
            
            <div class='fieldInfo' style={IsForm1 ? {display:"none"} : {display:"block"} }>
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
                       {(totalPriceOrder+delevery).toFixed(2)>10?(totalPriceOrder+delevery).toFixed(2):0}
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
               <div class='backButton' onClick={moveTo1}>
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
 export default OrderSummary