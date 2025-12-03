import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const onChange = (e) => {
    const val = parseInt(e.target.value, 10) || 0;
    if (val <= 0) removeItem(item.id);
    else updateQuantity(item.id, val);
  };

  return (
    <div className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-sm">
      <img
        src={item.image || 'https://via.placeholder.com/200x160?text=Toy'}
        alt={item.name}
        className="w-28 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
        <p className="text-gray-500">{item.description}</p>
        <div className="mt-2 flex items-center gap-4">
          <div className="text-gray-900 font-bold">€{(item.price || 0).toFixed(2)}</div>
          <label className="text-sm text-gray-500">Qty</label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={onChange}
            className="w-20 border rounded px-2 py-1"
          />
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold">€{((item.price || 0) * item.quantity).toFixed(2)}</div>
        <button
          onClick={() => removeItem(item.id)}
          className="mt-2 text-sm text-red-600 hover:underline"
        >
          Entfernen
        </button>
      </div>
    </div>
  );
};

export default CartItem;
