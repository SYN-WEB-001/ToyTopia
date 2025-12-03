const CategoryCard = ({ category, useNavigation, handleCategoryClick }) => {
  const isClickable = useNavigation || handleCategoryClick;
  
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={isClickable ? () => handleCategoryClick && handleCategoryClick(category.slug) : undefined}
    >
      {/* Category Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {category.description}
        </p>
        {isClickable ? (
          <div className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
            Explore {category.name}
          </div>
        ) : (
          <a
            href={`#${category.slug}`}
            className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Explore {category.name}
          </a>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;

