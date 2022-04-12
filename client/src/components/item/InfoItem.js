import React, { useState } from 'react';

import '../../Style/InfoItem.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react'

const img = require('../../assets/pizza.jpg');

function InfoItem(props) {
	const [ShowDes, setShowDes] = useState(false);

	function showDescription() {
		setShowDes(true);
	}

	function hideDescription() {
		setShowDes(false);
	}

	return (
		<div class='box-InfoItem'>
				<div class='InfoItem'>
					{/* Hinh anh, ten, size cua mon an hien thi */}
					<div class='img-link-item'>
						{/* props.image */}
						<img src={img} onClick={showDescription} />

						{/* Show Modal for Description */}
						<Modal show={ShowDes}>
							<Modal.Header>
								<h4> {props.item.name}</h4>
							</Modal.Header>

							<Modal.Body>
								<div class='modal-img'>
									<img src={img} />
								</div>

								<div class='modal-ingredient'>
									<h5> Ingredient: </h5>
								</div>

								<div class='modal-description'>{props.item.description}</div>

								<div class='modal-nutrition'>
									<h5> Nutrition </h5>

									<h6>
										{' '}
										<i class='fa-solid fa-stop'></i> Small:{' '}
										{props.item.nutrition.small} kcal{' '}
									</h6>
									<h6>
										{' '}
										<i class='fa-solid fa-square'></i> Medium:{' '}
										{props.item.nutrition.medium} kcal{' '}
									</h6>
									<h6>
										{' '}
										<i class='fa-solid fa-square-full'></i> Large:{' '}
										{props.item.nutrition.large} kcal{' '}
									</h6>
								</div>
							</Modal.Body>

							<Modal.Footer>
								<Button onClick={hideDescription}> Close </Button>
							</Modal.Footer>
						</Modal>
						{/* End Modal */}

						<div class='name-and-size'>
							<div class='text-on-img'>
								<h6> {props.item.name} </h6>
							</div>

							{/* show size on picture 
                        <div class="size-on-img">
                            <button class="button-size"> Size: M </button>
                        </div>  
                        */}
						</div>
					</div>

					{/* Tuy chinh kich thuoc, thong tin gia ban, them vao gio hang */}
					<div class='option-item'>
						{/* dropdown hover for Option */}

						{/* Cost */}

						<div class='select-size' name='size'>
							<div class='bar-size'>
							<Icon icon="clarity:bars-line" width="20px" height="20px"></Icon>
							</div>
							<span>Options</span>
						</div>

						<div class='wallet-dollar-cost'>
							<div class='wallet'>
							<Icon icon="ph:wallet-light" hFlip={true} width="22px" height="22px"></Icon>
							</div>
							<div class='cost'>
								<span>${props.item.price} </span>
							</div>
						</div>

						{/* Add to cart */}

						<div class='add-to-cart'>
							<Icon icon="carbon:shopping-cart" width="22px" height="22px"></Icon>
						</div>
					</div>
				</div>
		</div>
	);
}

export default InfoItem;
