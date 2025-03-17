// src/pages/Cart.jsx

import React, { useContext } from 'react';
import { CartContext } from '../components/Context/CartContext'; 

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <img src={item.img} alt={item.title} className="rounded-md w-60 h-[300px]" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-500">Rating: {item.rating}</p>
              <p className="text-gray-500">Color: {item.color}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
