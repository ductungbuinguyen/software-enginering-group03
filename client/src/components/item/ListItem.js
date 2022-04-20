import React from 'react';
import InfoItem from './InfoItem.js'

import products from '../../productItemTest/productData.js'

class ListItem extends React.Component{

    render() {
        if (this.props.chose === 'all' && this.props.searched === '')
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
        else if (this.props.chose !== 'all' && this.props.searched === '') {
            const product = products.filter(product => product.name === this.props.chose);
            return (
                <div className="ListItem">
                    <InfoItem item={product[0]} />
                </div>
            );
        }
        else if (this.props.chose === 'all' && this.props.searched !== '')
        {
            // const product = products.filter(product => product.name.search(/this.props.searched/i) !== -1);
            const product = products.filter(product => product.name.toLowerCase().includes(this.props.searched) || product.description.toLowerCase().includes(this.props.searched));
            const count = product.length;
            if (count == 0)
            {
                return (
                    <div className="ListItem">
                        <h1> Oops... We don't have it now!!! Another dish please... </h1>
                    </div>
                );
            } else {
                return (
                    <div className="ListItem">
                        <InfoItem item={product[0]} />
                        {count > 1 ? <InfoItem item={product[1]}/> : <div></div>}
                        {count > 2 ? <InfoItem item={product[2]}/> : <div></div>}
                        {count > 3 ? <InfoItem item={product[3]}/> : <div></div>}
                        {count > 4 ? <InfoItem item={product[4]}/> : <div></div>}
                    </div>
                );
            }
        }
        else {
            const productChosen = products.filter(product => product.name === this.props.chose);
            const productSearched = productChosen.filter(product => product.name.toLowerCase().includes(this.props.searched) || product.description.toLowerCase().includes(this.props.searched));
            const count = productSearched.length;
            if (count == 0)
            {
                return (
                    <div className="ListItem">
                        <h1> Oops... We don't have it now!!! Another dish please... </h1>
                    </div>
                );
            } else {
                return (
                    <div className="ListItem">
                        <InfoItem item={productSearched[0]} />
                        {count > 1 ? <InfoItem item={productSearched[1]}/> : <div></div>}
                        {count > 2 ? <InfoItem item={productSearched[2]}/> : <div></div>}
                        {count > 3 ? <InfoItem item={productSearched[3]}/> : <div></div>}
                        {count > 4 ? <InfoItem item={productSearched[4]}/> : <div></div>}
                    </div>
                );
            }
        }
    }
}

export default ListItem;