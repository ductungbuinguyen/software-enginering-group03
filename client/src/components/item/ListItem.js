import React from 'react';
import InfoItem from './InfoItem.js'

import products from '../../productItemTest/productData.js'

class ListItem extends React.Component{
    render() {
        return (
            <div class="ListItem">
                <InfoItem item={products[0]} />
                <InfoItem item={products[1]} />
                <InfoItem item={products[2]} />
                <InfoItem item={products[3]} />
                <InfoItem item={products[4]} />
            </div>
        );
    }
}

export default ListItem;