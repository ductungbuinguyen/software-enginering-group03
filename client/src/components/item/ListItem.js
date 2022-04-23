import React, {useEffect, useState} from 'react';
import InfoItem from './InfoItem.js';
import axios from 'axios'

function ListItem(props) {
	let [ products, setProducts ] = useState([])
	useEffect(() => {
    async function fetchProducts() {
      const results = await axios('http://localhost:5000/api/products');
      setProducts(results.data?.products)
    }
    fetchProducts()
  },[])

	const productSelected = props.selected === 'all' ? products : products.filter(product => product.name === props.selected);
    const productSearched = productSelected.filter(product => product.name.toLowerCase().includes(props.searched) || product.description.toLowerCase().includes(props.searched));
    const count = productSearched.length;
    if (count == 0)
    {
        return (
            <div className="row grid">
                <h1> Oops... We currently do not have this dish, please choose another dish... </h1>
            </div>
        );
    } else {
        return (
			<div class='row grid'>
				{productSearched.map((product, index) => (
					<div class='col-sm-6' key={index}>
						<InfoItem item={product} handleAddToListOrder={props.handleAddToListOrder}/>
					</div>
				))}
			</div>
		);
    }
}

export default ListItem;