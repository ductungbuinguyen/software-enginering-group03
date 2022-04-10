import React from 'react';
import InfoItem from './InfoItem.js'

import products from '../../productItemTest/productData.js'

class ListItem extends React.Component{
    render() {
        return (
            <div>
                <InfoItem name={products[0].name} image={products[0].image} price={products[0].price} />
            </div>
        );
    }
}

export default ListItem;