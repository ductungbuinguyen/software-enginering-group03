import React from 'react';
import InfoItem from './InfoItem.js'

import products from '../../productItemTest/productData.js'

class ListItem extends React.Component{

    render() {
        if (this.props.chose == 'all')
        {
            return (
                <div className="ListItem">
                    <InfoItem item={products[0]} />
                    <InfoItem item={products[1]} />
                    <InfoItem item={products[2]} />
                    <InfoItem item={products[3]} />
                    <InfoItem item={products[4]} />
                </div>
            );
        }
        else {
            const product = products.filter(product => product.name == this.props.chose);
            return (
                <div className="ListItem">
                    <InfoItem item={product[0]} />
                </div>
            )
        }
    }
}

export default ListItem;