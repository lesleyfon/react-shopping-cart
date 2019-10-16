import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/ProductContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	//
	
	useEffect(()=>{}, [cart])
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const productsContextObject = {
			products: products,
			cart: cart,
			setCart: setCart,
			addItem : addItem
		}

	return (
		<ProductContext.Provider value = { productsContextObject }>
			<div className="App">
				<Navigation />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</div>
		</ProductContext.Provider>

	);
}

export default App;
