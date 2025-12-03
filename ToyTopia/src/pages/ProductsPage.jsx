import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryCards from '../components/HomePageComponents/sections/CategoryCardsSection.jsx';
import ProductItemCard from '../components/ProductPageComponents/ProductItemCard.jsx';
import categoryData from '../data/categoryData.json';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categorySlug = searchParams.get('category');

  useEffect(() => {
    if (categorySlug) {
      const category = categoryData.find(cat => cat.slug === categorySlug);
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
  }, [categorySlug]);

  const handleBackToCategories = () => {
    setSearchParams({});
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {selectedCategory ? (
          <>
            <div className="mb-8">
              <button
                onClick={handleBackToCategories}
                className="mb-4 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2">
                ← Zurück zur Übersicht
              </button>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {selectedCategory.name}
              </h1>
              <p className="text-lg text-gray-600">
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
                <p className="text-gray-600">Keine Produkte in dieser Kategorie verfügbar.</p>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Products</h1>
            <p className="text-lg text-gray-600 mb-8">
              Wähle eine Kategorie aus, um die Produkte in dieser Kategorie anzusehen.
            </p>
            <CategoryCards showHeader={false} useNavigation={true} />
          </>
        )}
      </div>
    </div>
  );
}

