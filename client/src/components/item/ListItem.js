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
	return (
		<div class='row grid'>
			{products.map((product, index) => (
				<div class='col-sm-6' key={index}>
					<InfoItem item={product} listorder_of_listitem={props.listorder_of_mainmemu} setlistorder={props.setlistfood} />
				</div>
			))}
		</div>
	);
}

export default ListItem;
