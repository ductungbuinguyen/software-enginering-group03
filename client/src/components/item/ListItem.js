import React from 'react';
import InfoItem from './InfoItem.js';

import products from '../../productItemTest/productData.js';

class ListItem extends React.Component {
	render() {
		return (
			<div class='row grid'>
				{ products.map((product, index) => (
                    <div class='col-sm-6' key={index}>
                        <InfoItem item={product} />
                    </div>
				))}
			</div>
		);
	}
}

export default ListItem;
