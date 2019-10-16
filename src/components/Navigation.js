import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
	console.log(props)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
