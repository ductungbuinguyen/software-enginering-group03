import React from 'react';

import products from '../../productItemTest/productData.js';
import ListItem from '../item/ListItem';
import '../../Style/Filter.css';
import { Button } from 'react-bootstrap';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // search: '',
            choose: 'all'
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // handleChange(e) {
    //     const value = e.target.value;
    //     this.setState({search: value});
    // }

    handleClick(e) {
        const value = e.target.value;
        this.setState({choose: value});
    }

    render() {
        const productsName = [...new Set(products.map(products => products.name))];
        return (
            <div>
                <div className='filter'>
                {/* <input onChange={this.handleChange} placeholder='Search...' value={this.state.search}></input>
                <br /> */}
                <button value='all' onClick={this.handleClick}>All</button>
                {productsName.map(t => <button onClick={this.handleClick} value={t}>{t}</button>)}
                <br />
                {/* <ListItem chose={this.state.choose} searched={this.state.search} /> */}
                </div>
                <ListItem chose={this.state.choose} />
            </div>
        );
    }
}

export default Filter