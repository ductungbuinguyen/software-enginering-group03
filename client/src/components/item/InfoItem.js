import React, { useState } from 'react';

import '../../Style/InfoItem.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react'


function InfoItem(props) {
	const [ShowDes, setShowDes] = useState(false);

	function showDescription() {
		setShowDes(true);
	}

	function hideDescription() {
		setShowDes(false);
	}

    const [ShowSize, setShowSize] = useState(false);

    function showSelectSize() {
        setShowSize(true);
    }

    function hideSelectSize() {
        setShowSize(false);
    }


    /* set radio select size */
    var selectedName = props.item.name;
    var selectedImage = props.item.image;
    var selectedSize = "Small";
    var selectedPrice = "";

    function setSmallSize() {
        document.getElementById("medium").checked = false;
        document.getElementById("large").checked = false;
        selectedSize = "Small";
    }
    function setMediumSize() {
        document.getElementById("small").checked = false;
        document.getElementById("large").checked = false;
        selectedSize = "Medium";
    }
    function setLargeSize() {
        document.getElementById("small").checked = false;
        document.getElementById("medium").checked = false;
        selectedSize = "Large";
    }


    /* send order to summary cart */

    function sendOrder() {                                          
        /* order vao gio hang */

        if (selectedSize == "Small") {
            selectedPrice = props.item.pricePerSizes[0].price;
        } 
        else if (selectedSize == "Medium") {
            selectedPrice = props.item.pricePerSizes[1].price;
        }
        else {
            selectedPrice = props.item.pricePerSizes[2].price;
        }

        const order = {
            name: selectedName, 
            image: selectedImage,                                    
            size: selectedSize,
            price: selectedPrice,
            qty:1
        };                      
		props.handleAddToListOrder(order)                                                    
        hideSelectSize();                                          
    }                                                               


	return (
		<div class='box-InfoItem'>
				<div class='InfoItem'>
					{/* Hinh anh, ten, size cua mon an hien thi */}
					<div class='img-link-item'>
						{/* image */}
						<img src={props.item.image} onClick={showDescription} />

						{/* Show Modal for Description */}
						<Modal show={ShowDes}>
							<Modal.Header>
								<h4> {props.item.name}</h4>
							</Modal.Header>

							<Modal.Body>
								<div class='modal-img'>
									<img class="img-fluid" id="img_info" src={props.item.image} />
								</div>

								<div class='modal-ingredient'>
									<h5> Ingredient: </h5>
								</div>

								<div class='modal-description'>{props.item.description}</div>

								<div class='modal-nutrition'>
                                    <h5> Nutrition </h5>

                                    <div class="size-and-cost">
                                        <div class="size-of-size-and-cost">
                                            <h6>
                                                {' '}
                                                <i class='fa-solid fa-stop'></i> Small:{' '}
                                                {props.item.nutrition.small} kcal{' '}   
                                            </h6>
                                        </div>

                                        <div class="cost-of-size-and-cost">
                                            <h6>
                                            { new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes?.[0].price)  } 
                                            </h6>                                       
                                        </div>
                                        
                                    </div>

                                    <div class="size-and-cost">
                                        <div class="size-of-size-and-cost">
                                            <h6>
                                                {' '}
                                                <i class='fa-solid fa-square'></i> Medium:{' '}
                                                {props.item.nutrition.medium} kcal{' '}
                                            </h6>
                                        </div>

                                        <div class="cost-of-size-and-cost">
                                            <h6>
                                            { new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes?.[1].price)  } 
                                            </h6>                                       
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="size-and-cost">
                                        <div class="size-of-size-and-cost">
                                            <h6>
                                                {' '}
                                                <i class='fa-solid fa-square-full'></i> Large:{' '}
                                                {props.item.nutrition.large} kcal{' '}
                                            </h6>
                                        </div>

                                        <div class="cost-of-size-and-cost">
                                            <h6>
                                            { new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes?.[2].price)  } 
                                            </h6>                                       
                                        </div>
                                        
                                    </div>
									
									
								</div>
							</Modal.Body>

							<Modal.Footer>
								<button class="btn btn-warning" onClick={hideDescription}> Close </button>
							</Modal.Footer>
						</Modal>
						{/* End Modal */}
						{props.item.isHot && (<small class="red">Hot</small>)}
						<div class='name-and-size'>
							<div class='text-on-img'>
								<h6> {props.item.name} </h6>
								<p>{props.item.shortDescription}</p>
							</div>

							<div class="size-on-img">
									<span> Size: {props.item.pricePerSizes?.[0].size} </span>
							</div>  
                       
						</div>
					</div>

					{/* Tuy chinh kich thuoc, thong tin gia ban, them vao gio hang */}
					<div class='option-item'>
						{/* dropdown hover for Option */}

						{/* Cost */}

						

						<div class='wallet-dollar-cost'>
							<div class='wallet'>
							<Icon icon="ph:wallet-light" hFlip={true} width="22px" height="22px"></Icon>
							</div>
							<div class='cost'>
								<span>{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes?.[0].price)  }  </span>
							</div>
						</div>

						{/* Add to cart */}

						<div class='add-to-cart'>
							<Icon icon="carbon:shopping-cart" width="22px" height="22px" onClick={showSelectSize}></Icon>
						</div>

{/********************************** Show Modal for Select Size ************************************/}
                        <Modal show={ShowSize}>
							<Modal.Header>
								<h4> {props.item.name}</h4>
							</Modal.Header>

							<Modal.Body>
                                <Form>

                                    <div class="select-size-div-1">
                                        <div class="size-of-size-and-cost">
                                            <Form.Check type="radio" label="Small" id="small" checked onClick={setSmallSize}/>
                                        </div>

                                        <div class="cost-of-size-and-cost">
                                            <h6>
                                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes[0].price)}
                                            </h6>                                       
                                        </div>
                                        
                                    </div>

                                    <div class="select-size-div-1">
                                        <div class="size-of-size-and-cost">
                                            <Form.Check type="radio" label="Medium" id="medium" onClick={setMediumSize}/>
                                        </div>

                                        <div class="cost-of-size-and-cost">
                                            <h6>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes[1].price)}
                                            </h6>                                       
                                        </div>
                                        
                                    </div>

                                    <div class="select-size-div-1">
                                        <div class="size-of-size-and-cost">
                                        <Form.Check type="radio" label="Large" id="large" onClick={setLargeSize}/>
                                        </div>

                                        <div class="cost-of-size-and-cost">
                                            <h6>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.item.pricePerSizes[2].price)}
                                            </h6>                                       
                                        </div>
                                        
                                    </div>
                                    
                                </Form>
							</Modal.Body>

							<Modal.Footer>                           
                                <button type="button" class="btn btn-warning" onClick={hideSelectSize}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={sendOrder}>Order</button>    
							</Modal.Footer>
                            
						</Modal>
{/********************************** Show Modal for Select Size ************************************/}
					</div>
				</div>
		</div>
	);
}

export default InfoItem;