import React, { useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './context/ProductContext'
import { CartContext } from './context/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	useEffect(()=>{}, [cart])
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};
	function removeItem(id){
		const newItems = cart.filter( item => item.id !== id )
		setCart(newItems)
	}
	const productsContextObject = {
			products: products,
			cart: cart,
			setCart: setCart,
			addItem : addItem,
			removeItem: removeItem
		}

	return (
		<ProductContext.Provider value = { productsContextObject } >
			<CartContext.Provider value = { productsContextObject }>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						render={() => (
							<Products />
						)}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>

	);
}

export default App;
