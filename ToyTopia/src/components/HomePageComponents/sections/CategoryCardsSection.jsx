import categoryDataEn from '../../../data/categoryData.json';
import categoryDataDe from '../../../data/categoryData.de.json';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CategoryCard from './CategoryCard';
import { ThemeContext } from '../../../context/ThemeContext';
import { LanguageContext } from '../../../context/LanguageContext';

const CategoryCards = ({ showHeader = true, useNavigation = false, onCategoryClick }) => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  const categoryData = language === 'de' ? categoryDataDe : categoryDataEn;

  const handleCategoryClick = (categorySlug) => {
    if (onCategoryClick) {
      onCategoryClick(categorySlug);
    } else if (useNavigation) {
      navigate(`/products?category=${categorySlug}`);
    }
  };

  return (
    <section 
      style={showHeader ? {
        padding: '4rem 1rem',
        backgroundColor: darkMode ? '#1f2937' : '#f9fafb'
      } : {}}
    >
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: darkMode ? '#ffffff' : '#111827', marginBottom: '1rem' }}>
              {language === 'de' ? 'Nach Kategorie einkaufen' : 'Shop by Category'}
            </h2>
            <p style={{ fontSize: '1.125rem', color: darkMode ? '#d1d5db' : '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
              {language === 'de' ? 'Entdecke unsere großartige Spielzeugsammlung nach Kategorien organisiert' : 'Discover our amazing collection of toys organized by category'}
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
