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


	useEffect(()=>{ 
		setLocalStorageItems() 
	}, [cart])

	const addItem = item => {
		setCart([...cart, item])
		setLocalStorageItems([...cart, item]) 
	}

	function removeItem(id){
		const newItems = cart.filter( item => item.id !== id )
		setCart(newItems)
	}
	function setLocalStorageItems (cartItem){
		console.log(cartItem)
		cartItem &&	window.localStorage.setItem('Cart Items', JSON.stringify(cartItem));
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
