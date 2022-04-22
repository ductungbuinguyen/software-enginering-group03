import React, {useState} from 'react';
import OrderSummary from '../components/menu/OrderSummary/OrderSummary';
import ListItem from '../components/item/ListItem';
import '../Style/MainMenu.css';

const MainMenu = () => {

    const ListOrder = [];

    const updateListOrder = (neworder) => {
        ListOrder.push(neworder);
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
							<section class='content_filter'></section>
							<section class='content_list-menu'>
								<ListItem setlistfood={updateListOrder}/>
							</section>
						</div>
						<div class='col-lg-4'>
							<div class='main-menu__order-summary'>
								<OrderSummary listFood={ListOrder} />
							</div>
						</div>

                        <div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
