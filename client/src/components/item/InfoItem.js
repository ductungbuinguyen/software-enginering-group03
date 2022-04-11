import React from 'react'
import '../../Style/InfoItem.css'

const img = require('../layout/pizza.jpg');

class InfoItem extends React.Component {
    
    render() {
        return(
            <div class="InfoItem">

                <a href="https://www.youtube.com/">
                    <div class="img-link-item">
                        
                        <img src={img}/>
                        
                        <div class="text-on-img"> 
                            <h4> Pizza </h4>
                            <h6> Sausage, tomato,... </h6>
                        </div>

                        {/* Size */}

                    </div>
                </a>
                
                
                
                <div class="option-item">
                    {/* dropdown hover for Option*/}
                    {/* Cost */}
                    {/* Add to cart */}
                </div>
            
                
            </div>
        );
    }
}

export default InfoItem