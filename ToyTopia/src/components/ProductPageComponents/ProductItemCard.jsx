import handleAddToCart from './handleAddToCart.jsx';

export default function ProductItemCard({ product, categorySlug }) {
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

  return (
    <div className=" flex justify-between flex-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-58 overflow-hidden">
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

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <div className="flex justify-start items-center mb-4">
          <span className={`text-sm ${product.stock > 0 ? 'text-gray-500' : 'text-red-500'}`}>
        {product.stock > 0 ? `Auf Lager: ${product.stock} Stück` : 'Nicht auf Lager'}
          </span>
        </div>
        <button onClick={() => handleAddToCart(product)}
          disabled={product.stock === 0}
          className="w-full text-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            In den Warenkorb 
        </button>
      </div>
    </div>
  );
}
