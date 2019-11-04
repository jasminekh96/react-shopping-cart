import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [ products ] = useState(data);
	const [ cart, setCart ] = useState([]);

	const addItem = (item) => {
		// add the given item to the cart
		setCart([ ...cart, item ]);
		//[...cart] is saying take all the values in the array and put them out, so needs to be in an array.
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart }}>
				<div className='App'>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path='/' component={Products} />
					<Route path='/cart' render={() => <ShoppingCart cart={cart} />} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
