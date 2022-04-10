import React, {useState} from 'react'

import '../../Style/InfoItem.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'


const img = require('../../assets/pizza.jpg');

function InfoItem(props) {

    const [ShowDes, setShowDes] = useState(false);

    function showDescription() {
        setShowDes(true);
    }

    function hideDescription() {
        setShowDes(false);
    }

    return(
        <div class="box-InfoItem">
            <div>
        <div class="InfoItem">

            {/* Hinh anh, ten, size cua mon an hien thi */}
            <div>
                
                <div class="img-link-item">
                            {/* props.image */}
                    <img src={img} onClick={showDescription}/>

                    {/* Show Modal for Description */}
                    <Modal show={ShowDes}>
                        <Modal.Header> 
                            <h4> {props.item.name}</h4> 
                        </Modal.Header>

                        <Modal.Body> 
                           
                            <div class="modal-img">
                                <img src={img} />
                            </div>
                            
                            <div class="modal-ingredient">
                                <h5> Ingredient: </h5>
                            </div>

                            <div class="modal-description">
                                {props.item.description} 
                            </div> 

                            <div class="modal-nutrition">
                                <h5> Nutrition </h5>      
                                
                                <h6> <i class="fa-solid fa-stop"></i> Small: {props.item.nutrition.small} kcal </h6> 
                                <h6> <i class="fa-solid fa-square"></i> Medium: {props.item.nutrition.medium} kcal </h6>
                                <h6> <i class="fa-solid fa-square-full"></i> Large: {props.item.nutrition.large} kcal </h6>
                            </div>                     
                            
                        </Modal.Body>

                        <Modal.Footer> 
                            <Button onClick={hideDescription}> Close </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* End Modal */}
                    
                    <div class="name-and-size">
                        <div class="text-on-img"> 
                            <h6> {props.item.name} </h6>
                        </div>

                        {/* show size on picture 
                        <div class="size-on-img">
                            <button class="button-size"> Size: M </button>
                        </div>  
                        */}
                        
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
                        <h6> {props.item.price} </h6> 
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