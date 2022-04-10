import React from 'react'
import '../../Style/InfoItem.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import products from '../../productItemTest/productData.js'

const img = require('../../assets/pizza.jpg');



function InfoItem(props) {

    return(
        <div>
            <div>
        <div class="InfoItem">

            {/* Hinh anh, ten, size cua mon an hien thi */}
            <div>
                
                <div class="img-link-item">
                            {/* props.image */}
                    <img src={img}/>
                    
                    <div class="name-and-size">
                        <div class="text-on-img"> 
                            <h6> {props.name} </h6>
                        </div>

                        <div class="size-on-img">
                            <button class="button-size"> Size: M </button>
                        </div>  
                    </div>
                    
                </div>
            </div>
            
            {/* Tuy chinh kich thuoc, thong tin gia ban, them vao gio hang */}
            
            <div class="option-item">
                {/* dropdown hover for Option */}

                {/* Cost */}

                <div class="select-size" name="size">
                    <div class="bar-size">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    
                    <div class="choose-size">
                        <select id="size">
                            <option hidden> S </option>
                            <option value="small"> S </option>
                            <option value="medium"> M </option>
                            <option value="large"> L</option>
                        </select>
                    </div>
                    
                </div>

                <div class="wallet-dollar-cost">
                    <div class="wallet">
                        <i class="fa-solid fa-wallet"></i>
                    </div>

                    <div class="dollar">
                        <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                    
                    <div class="cost">
                        <h6> {props.price} </h6> 
                    </div>
                </div>
                

                {/* Add to cart */}

                <div class="add-to-cart">
                    <button> <i class="fa-solid fa-cart-arrow-down"></i> </button>
                </div>

            </div> 
                        
        </div>   

    </div>
        </div>
    );
}

export default InfoItem