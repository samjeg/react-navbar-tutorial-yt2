import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';


function Navbar() {
    let [clicked, setClicked] = useState(false);


    const handleClick = () => {
	    clicked = !clicked;
	    setClicked(clicked);
    };

	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">
				React 
				<i className="fab fa-react"></i>
			</h1>
			<div className="menu-icon" onClick={handleClick}>
				<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
			    {MenuItems.map((item) => {
			    	return (
						<li key={item.title}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
			    })}
			</ul>
			<Button>Sign Up</Button>
		</nav>
	);
	
}

export default Navbar;