import React, { useContext } from 'react';
import { useCart } from '../../context/CartContext';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { language } = useContext(LanguageContext);
  const t = translations[language].cartPage;
  
  const maxQuantity = item.stock || 0;
  const currentQuantity = item.quantity || 1;

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      updateQuantity(item.id, currentQuantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  const handleIncrement = () => {
    if (currentQuantity < maxQuantity) {
      updateQuantity(item.id, currentQuantity + 1);
    }
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
        <div className="mt-2 flex items-center gap-4">
          <div className="text-gray-900 font-bold">€{(item.price || 0).toFixed(2)}</div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500">{t.quantity}:</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={handleDecrement}
                disabled={currentQuantity <= 1}
                className="px-3 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label={language === 'de' ? 'Menge verringern' : 'Decrease quantity'}
              >
                −
              </button>
              <span className="px-4 py-1 min-w-12 text-center font-semibold text-gray-900 border-x border-gray-300">
                {currentQuantity}
              </span>
              <button
                onClick={handleIncrement}
                disabled={currentQuantity >= maxQuantity}
                className="px-3 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label={language === 'de' ? 'Menge erhöhen' : 'Increase quantity'}
              >
                +
              </button>
            </div>
            {maxQuantity < 999 && (
              <span className="text-xs text-gray-500">
                {language === 'de' ? `(max. ${maxQuantity} auf Lager)` : `(max. ${maxQuantity} in stock)`}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-lg">€{((item.price || 0) * currentQuantity).toFixed(2)}</div>
        <button
          onClick={() => removeItem(item.id)}
          className="mt-2 text-sm text-red-600 hover:underline"
        >
          {t.removeItem}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
