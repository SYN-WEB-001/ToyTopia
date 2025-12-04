import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import CategoryCards from '../components/HomePageComponents/sections/CategoryCardsSection.jsx';
import ProductItemCard from '../components/ProductPageComponents/ProductItemCard.jsx';
import categoryDataEn from '../data/categoryData.json';
import categoryDataDe from '../data/categoryData.de.json';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  const categoryData = language === 'de' ? categoryDataDe : categoryDataEn;
  const t = translations[language].productsPage;

  const categorySlug = searchParams.get('category');

  useEffect(() => {
    if (categorySlug) {
      const category = categoryData.find(cat => cat.slug === categorySlug);
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
  }, [categorySlug, categoryData]);

  const handleBackToCategories = () => {
    setSearchParams({});
    setSelectedCategory(null);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 1rem', backgroundColor: darkMode ? '#111827' : '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        {selectedCategory ? (
          <>
            <div className="mb-8">
              <button
                onClick={handleBackToCategories}
                style={{ marginBottom: '1rem', color: darkMode ? '#4ade80' : '#16a34a', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => e.target.style.color = darkMode ? '#22c55e' : '#15803d'}
                onMouseLeave={(e) => e.target.style.color = darkMode ? '#4ade80' : '#16a34a'}>
                {t.backButton}
              </button>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: darkMode ? '#ffffff' : '#111827', marginBottom: '0.5rem' }}>
                {selectedCategory.name}
              </h1>
              <p style={{ fontSize: '1.125rem', color: darkMode ? '#d1d5db' : '#4b5563' }}>
                {selectedCategory.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedCategory.products && selectedCategory.products.length > 0 ? (
                selectedCategory.products.map((product) => (
                  <ProductItemCard
                    key={product.slug || product.index}
                    product={product}
                    categorySlug={selectedCategory.slug}/>
                ))
              ) : (
                <p className="text-gray-600">{language === 'de' ? 'Keine Produkte in dieser Kategorie verfügbar.' : 'No products available in this category.'}</p>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: darkMode ? '#ffffff' : '#111827', marginBottom: '2rem' }}>{t.title}</h1>
            <p style={{ fontSize: '1.125rem', color: darkMode ? '#d1d5db' : '#4b5563', marginBottom: '2rem' }}>
              {language === 'de' ? 'Wähle eine Kategorie aus, um die Produkte in dieser Kategorie anzusehen.' : 'Choose a category to view the products in that category.'}
            </p>
            <CategoryCards showHeader={false} useNavigation={true} />
          </>
        )}
      </div>
    </div>
  );
}

