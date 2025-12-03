import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Warenkorb</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 mb-6">Dein Warenkorb ist leer.</p>
            <Link to="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md">Weiter einkaufen</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <aside className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">Bestellung Zusammenfassung</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Artikel</span>
                <span className="font-medium">{cartCount}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-600">Zwischensumme</span>
                <span className="font-bold">€{cartTotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-md mb-3">Zur Kasse</button>
              <button onClick={clearCart} className="w-full border border-gray-300 py-2 rounded-md text-gray-700">Warenkorb leeren</button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
