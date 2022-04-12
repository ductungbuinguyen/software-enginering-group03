import React from 'react';
import '../../Style/Header.css';
import { Icon } from '@iconify/react'

const Header = () => {
	return (
		<header class='main-header sticky'>
			<a href='#menu' class='btn-mobile'>
				<div class='hamburger hamburger--spin' id='hamburger'>
					<div class='hamburger-box'>
						<div class='hamburger-inner'></div>
					</div>
				</div>
			</a>
			<div class='container'>
				<div class='row'>
					<div class='col-lg-3 col-6'>
						<div id='logo'>
							<h1>
								<a href='/' title='FoodBoard'>
									FoodBoard
								</a>
							</h1>
						</div>
					</div>
					<div class='col-lg-9 col-6'>
						<ul id='menuIcons'>
							<li>
								<a href='#'>
									<Icon icon="carbon:shopping-cart" width="35px" height="35px"></Icon>
								</a>
							</li>
							<li>
								<a href='#'>
                <Icon icon="bx:support" width="35px" height="35px"></Icon>
								</a>
							</li>
						</ul>
						<nav id='menu' class='main-menu'>
							<ul>
								<li>
									<a href='#'>Faq</a>
								</li>
								<li>
									<a href='#'>Contacts</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
