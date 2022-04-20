import React, {useState} from 'react';
import OrderSummary from '../components/menu/OrderSummary/OrderSummary';
import ListItem from '../components/item/ListItem';
import '../Style/MainMenu.css';

const MainMenu = () => {

    const [ListFood, setListFood] = useState([]);

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
								<ListItem listorder_of_mainmemu={ListFood} setlistorder_of_mainmemu={setListFood}/>
							</section>
						</div>
						<div class='col-lg-4'>
							<div class='main-menu__order-summary'>
								<OrderSummary listFood={ListFood} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
