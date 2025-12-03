import categoryData from '../../../data/categoryData.json';
import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoryCards = ({ showHeader = true, useNavigation = false, onCategoryClick }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categorySlug) => {
    if (onCategoryClick) {
      onCategoryClick(categorySlug);
    } else if (useNavigation) {
      navigate(`/products?category=${categorySlug}`);
    }
  };

  return (
    <section className={showHeader ? "py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" : ""}>
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our amazing collection of toys organized by category
            </p>
          </div>
        )}

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              useNavigation={useNavigation}
              handleCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
