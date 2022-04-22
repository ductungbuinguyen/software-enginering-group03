import React from 'react'
import CartItem from './CartItem';
import '../../../Style/OrderSummary.css'
import { useState, useEffect  } from 'react'
import {Toast,Form} from 'react-bootstrap'

const delevery=10000;


const OrderSummary = ( props ) => {
    let totalPriceOrder = props.ListOrder.reduce(  (sum, cur) => sum + parseFloat(cur.price)*cur.qty,0 );
    const [IsForm1,setIsForm1] = useState(true) 
    const [Info,setInfor] = useState({
        FullName: '',
        Phone:'',
        Email:'',
        Address:'',
        Mess:''
    })
    const [showSubmit, setShowSubmit] = useState(false);
    const [showEmpty, setShowEmpty] = useState(false);

// Chuyen tab
/*********************************************/ 
    const moveTo1 = () =>{
            setIsForm1(pre=> true)
    }
    const moveTo2 = () =>{
        if(props.ListOrder.length===0){
            setShowEmpty(true)
            return
        }
        else
            setIsForm1(pre=> false)
    }
/*********************************************/ 


// Xu ly so luong va gia tong
/*********************************************/ 
    const addToTalPriceOrder = (addValue)=>{
        totalPriceOrder+=addValue
    }
/*********************************************/ 

//Xu ly form
/*********************************************/ 
    const handleInfor = (e,field) => {

        switch(field) {
            case 'FullName':
                setInfor(pre => {
                    let obj = {...pre}
                    obj.FullName=e.target.value
                    return obj
                })
            break

            case 'Phone':
                setInfor(pre => {
                    let obj = {...pre}
                    obj.Phone=e.target.value
                    return obj
                })
            break

            case 'Email':
                setInfor(pre => {
                    let obj = {...pre}
                    obj.Email=e.target.value
                    return obj
                })
            break

            case 'Address':
                setInfor(pre => {
                    let obj = {...pre}
                    obj.Address=e.target.value
                    return obj
                })
            break

            case 'Mess':
                setInfor(pre => {
                    let obj = {...pre}
                    obj.Mess=e.target.value
                    return obj
                })
            break

            default:
                return
        }


    }
    const handleSubmit= (event) => {
        
        setInfor( pre => {
            let obj={...pre}
            obj.FullName=''
            obj.Phone=''
            obj.Email=''
            obj.Mess=''
            obj.Address=''
            return obj
        })
        event.preventDefault()
        props.handleClearListOrder()
        totalPriceOrder=0
        setShowSubmit(true)
    }
/*********************************************/ 

    const carts = (props.ListOrder.length!==0)?
                    props.ListOrder.map( (food,index) => 
                    <CartItem 
                            key={index}  food={food} 
                            addTotal={addToTalPriceOrder} handleDelete={props.handleRemoveFromListOrder} 
                            index={index} handleQty={props.handleChangQtyElement}
                    />):
                  <CartItem/>

    return(
        <form id='OrderSummary' onSubmit={e=>handleSubmit(e)}>
            
            <div class='headerSummary'>
              <h3>Order Summary {IsForm1?'1':'2'}/2</h3> 
            </div>

            <div class='oderDetail' style={IsForm1 ? {display:"block"} : {display:"none"} }>
                <ul>
                    { carts }
                </ul>
               <div class='delivery'>
                   <div>
                       <div class="check">
                           <div></div>
                       </div>
                       Delivery
                   </div>
                   <div>
                   {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(delevery)}
                   </div>
               </div>
               <div class='totalOrder'>
                   <div>
                       TOTAL
                   </div>
                   <div>
                   {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((totalPriceOrder+delevery)>delevery?(totalPriceOrder+delevery):0)}
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
                <input type="text" class='field' required name='fullName' placeholder='Full Name' value={Info.FullName} onChange={e=>handleInfor(e,'FullName')}></input>
                <input type="text" class='field' required name='phone' placeholder='Phone' value={Info.Phone}  onChange={e=>handleInfor(e,'Phone')}></input>
                <input type="email" class='field' required name='email' placeholder='Email' value={Info.Email}  onChange={e=>handleInfor(e,'Email')}></input>
                <input type="text" class='field' required name='address' placeholder='Delevery Address' value={Info.Address}  onChange={e=>handleInfor(e,'Address')}></input>
                <input type="text" class='field' required name='message' placeholder='Message' value={Info.Mess}  onChange={e=>handleInfor(e,'Mess')}></input>

                <div class='totalOrder'>
                   <div>
                       TOTAL
                   </div>
                   <div>
                   {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format((totalPriceOrder+delevery)>delevery?(totalPriceOrder+delevery):0)}
                   </div>
                </div>
                <div class='acceptTerms'>
                   <div>
                       <input type="checkbox" required></input>
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
                       <i class="fa-solid fa-chevron-left"></i>
                   </div>
               </div>
               
            </div>

            <div className='Toast'>
                <Toast onClose={() => setShowSubmit(false)} show={showSubmit} delay={3000} autohide id='toastSubmit'> 
                    <Toast.Header id='Toast_Header' closeVariant='white'>
                        <strong className="me-auto">Thank you</strong>
                    </Toast.Header>
                    <Toast.Body >Your order has been submit !</Toast.Body>
                </Toast>    
            </div>

            <div className='Toast'>
                <Toast onClose={() => setShowEmpty(false)} show={showEmpty} delay={3000} autohide id='toastEmpty'>
                    <Toast.Header id='Toast_Header' closeVariant='white'>
                        <strong className="me-auto">Opp!</strong>
                    </Toast.Header>
                    <Toast.Body >Your cart is empty !</Toast.Body>
                </Toast>    
            </div>

        </form>
    );
 }
 export default OrderSummary