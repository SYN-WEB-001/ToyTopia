import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductItemCard({ product, categorySlug }) {
  const { addItem } = useCart();

  if (!product) {
    return null;
  }

  const productImage = Array.isArray(product.image) 
    ? product.image[0] 
    : product.image;
  
  // translate slug to category folder name
  const getCategoryFolderName = (slug) => {
    const folderMap = {
      'books': 'Books',
      'lego': 'Lego',
      'hot-wheels': 'Hotwheels',
      'puzzles': 'Puzzles'
    };
    return folderMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  };
  
  const categoryFolder = getCategoryFolderName(categorySlug);
  
  // Form the image path
  const imagePath = `/src/assets/images/Category-Images/${categoryFolder}/${productImage}`;

  // Get product slug for navigation
  const productSlug = product.slug || product.index?.toString() || `${categorySlug}-${product.name}`;
  const productUrl = `/product/${categorySlug}/${productSlug}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Prepare product data for cart
    const cartProduct = {
      id: product.slug || product.index || `${categorySlug}-${product.name}`,
      name: product.name,
      price: product.price,
      image: imagePath,
      stock: product.stock,
      Altersempfehlung: product.Altersempfehlung
    };
    addItem(cartProduct, 1);
  };

  return (
    <Link to={productUrl} className="block h-full">
      <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        {/* Image Section - Fixed Height */}
        <div className="relative h-64 overflow-hidden shrink-0">
          <img
            src={imagePath}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {/* Age Recommendation Badge */}
          <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
           ab {product.Altersempfehlung} Jahren
          </div>
        </div>

        {/* Card Content - Flexible with fixed spacing */}
        <div className="flex flex-col grow p-6">
          {/* Product Name - Limited to 2 lines */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-14">
            {product.name}
          </h3>
          
          {/* Stock Info - Fixed height */}
          <div className="flex justify-start items-center mb-4 min-h-6">
            <span className={`text-sm ${product.stock > 0 ? 'text-gray-500' : 'text-red-500'}`}>
          {product.stock > 0 ? `Auf Lager: ${product.stock} Stück` : 'Nicht auf Lager'}
            </span>
          </div>
          
          {/* Button - Fixed at bottom */}
          <div className="mt-auto">
            <button 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full text-center px-4 py-2 font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
                product.stock === 0
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              In den Warenkorb 
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
