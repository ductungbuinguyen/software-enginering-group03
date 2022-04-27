import React, { useState, useEffect } from 'react';

import products from '../../productItemTest/productData.js';
import ListItem from '../item/ListItem';
import '../../Style/Filter.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Filter(props) {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          const results = await axios('http://localhost:5000/api/products');
          setProducts(results.data?.products)
        }
        fetchProducts()
      },[]);

    const [select, setSelect] = useState('all');
    const [search, setSearch] = useState('');

    function handleChange(e) {
        props.handleSearch(e.target.value);
        setSearch(e.target.value);
    };

    function handleSelect(e) {
        props.handleSelect(e.target.value);
        setSelect(e.target.value);
    };

    function handleClick() {
        props.handleSearch('');
        props.handleSelect('all');
        setSelect('all');
        setSearch('');
    };

    const productsCategory = [...new Set(products.map(products => products.category))];
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item item1">Filter</div>
                <div className="grid-item item2"><button onClick={handleClick}>Reset Filters</button></div>
                <div className="grid-item item3">
                    <select className="select" onChange={handleSelect} value={select}>
                        <option value='all'>All</option>
                        {
                            productsCategory.map(
                                (product) => <option value={product}>{product}</option>
                            )
                        }
                    </select>
                </div>
                <div className="grid-item item4">
                    <input type='text' className="search" placeholder="Search..." onChange={handleChange} value={search} />
                </div>
            </div>
        </div>
    );
}

export default Filter;