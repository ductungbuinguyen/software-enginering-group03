import React from 'react'
import '../../Style/InfoItem.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const img = require('../../assets/pizza.jpg');

class InfoItem extends React.Component {

    render() {
        return(
            <div>
                <div class="InfoItem">

                    <div>
                        
                            <div class="img-link-item">
                                
                                <img src={img}/>
                                
                                <div class="name-and-size">
                                    <div class="text-on-img"> 
                                        <h6> Pizza </h6>
                                    </div>

                                    <div class="size-on-img">
                                        <button class="button-size"> Size: M </button>
                                    </div>  
                                </div>
                                
                            </div>
                    </div>
                    
                    
                    <div class="option-item">
                        {/* dropdown hover for Option */}

                        

                        {/* Cost */}

                        <div class="select-size">
                            <select id="size">
                                <option hidden> S </option>
                                <option value="small"> S </option>
                                <option value="medium"> M </option>
                                <option value="large"> L</option>
                            </select>
                        </div>

                        <div class="wallet-dollar-cost">
                            <div class="wallet">
                                <i class="fa-solid fa-wallet"></i>
                            </div>

                            <div class="dollar">
                                <i class="fa-solid fa-dollar-sign"></i>
                            </div>
                            
                            <div class="cost">
                                <h6> 5.00 </h6> 
                            </div>
                        </div>
                        

                        {/* Add to cart */}

                        <div class="add-to-cart">
                            <button> <i class="fa-solid fa-cart-arrow-down"></i> </button>
                        </div>

                    </div> 
                                
                </div>   

                <div class="space50px">
                    hi
                </div>

                <button>test modal here</button> 

            </div>
        );
    }
}



export default InfoItem