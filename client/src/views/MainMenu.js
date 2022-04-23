import React, { useState } from 'react';
import OrderSummary from '../components/menu/OrderSummary/OrderSummary';
import ListItem from '../components/item/ListItem';
import '../Style/MainMenu.css';

import Filter from '../components/filter/Filter';

const MainMenu = () => {
	
	const [ ListOrder, setListOrder]= useState([])

	const handleChangQtyElement = (index, value) => {
		setListOrder(pre => {
			let newArr=[...pre]
			newArr[index].qty=newArr[index].qty+value
			return newArr
		})
	}

	const handleAddToListOrder = (food) => {
		setListOrder(pre => {
			let newArr=[...pre,food]
			return newArr
		})
	}

	const handleRemoveFromListOrder = (index) => {
		setListOrder(pre => {
			let newArr=[...pre]
            newArr.splice(index,1)
            return newArr
		})
	}

	const handleClearListOrder = () => {
		setListOrder([])
	}

  const [ select, setSelect ] = useState('all');
  const [ search, setSearch ] = useState('');  

  const handleSelect = (selected) => {
    setSelect(selected)
  }

  const handleSearch = (searched) => {
    setSearch(searched)
  }

	

	return (
		<div id='main-menu'>
			<div class='sub-header'>
				<div class='container'>
					<h1>Pay online</h1>
				</div>
			</div>
			<div class='main-menu_container'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-8 main-menu__content'>
							
              <section class='content_filter'>
                <Filter handleSelect={handleSelect} handleSearch={handleSearch}/>
              </section>

							<section class='content_list-menu'>
								<ListItem handleAddToListOrder={handleAddToListOrder} selected={select} searched={search}/>
							</section>

						</div>
						<div class='col-lg-4'>
							<div class='main-menu__order-summary'>

								<OrderSummary 
									ListOrder={ListOrder} 
			  						handleRemoveFromListOrder={handleRemoveFromListOrder}
						 		    handleClearListOrder={handleClearListOrder}
									handleChangQtyElement={handleChangQtyElement}
								/>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
