import { useState } from 'react';
import categoryData from '../../../data/categoryData.json';
import ProductItemCard from '../../ProductPageComponents/ProductItemCard';

const AgeCardsSection = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

  // Age Categories Definition
  const ageCategories = [
    {
      id: 1,
      name: 'Babys (0-2 Jahre)',
      ageRange: '0-2 Jahre',
      description: 'Sichere, sensomotorische Spielzeuge für die Entwicklung',
      color: 'from-pink-100 to-rose-100',
      borderColor: 'border-pink-300',
      minAge: 0,
      maxAge: 2,
    },
    {
      id: 2,
      name: 'Kleinkinder (3-5 Jahre)',
      ageRange: '3-5 Jahre',
      description: 'Farbenfrohe Spielzeuge zur Kreativitätsentwicklung',
      color: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-300',
      minAge: 3,
      maxAge: 5,
    },
    {
      id: 3,
      name: 'Kinder (6-8 Jahre)',
      ageRange: '6-8 Jahre',
      description: 'Lernspiele und Bauspielzeuge für Geschicklichkeit',
      color: 'from-purple-100 to-violet-100',
      borderColor: 'border-purple-300',
      minAge: 6,
      maxAge: 8,
    },
    {
      id: 4,
      name: 'Schulkinder (9-12 Jahre)',
      ageRange: '9-12 Jahre',
      description: 'Herausfordernde Spiele und komplexe Konstruktionen',
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-300',
      minAge: 9,
      maxAge: 12,
    },
    {
      id: 5,
      name: 'Teenager (13+ Jahre)',
      ageRange: '13+ Jahre',
      description: 'Anspruchsvolle Hobbys und Sammlerartikel',
      color: 'from-orange-100 to-amber-100',
      borderColor: 'border-orange-300',
      minAge: 13,
      maxAge: 99,
    },
  ];

  // Count products in each age category from categoryData
  const countProductsByAge = (minAge, maxAge) => {
    let count = 0;
    categoryData.forEach((category) => {
      if (category.products) {
        category.products.forEach((product) => {
          const age = product.Altersempfehlung;
          if (age >= minAge && age <= maxAge) {
            count++;
          }
        });
      }
    });
    return count;
  };

  // Get all products for a specific age group
  const getProductsByAge = (minAge, maxAge) => {
    const products = [];
    categoryData.forEach((category) => {
      if (category.products) {
        category.products.forEach((product) => {
          const age = product.Altersempfehlung;
          if (age >= minAge && age <= maxAge) {
            products.push({
              ...product,
              categoryName: category.name,
              categorySlug: category.slug,
            });
          }
        });
      }
    });
    return products;
  };

  const handleAgeClick = (ageGroup) => {
    setSelectedAgeGroup(ageGroup);
  };

  const closeModal = () => {
    setSelectedAgeGroup(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Spielzeug nach Alter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finde das perfekte Spielzeug für jedes Alter
          </p>
        </div>

        {/* Age Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ageCategories.map((ageCategory) => {
            const productCount = countProductsByAge(ageCategory.minAge, ageCategory.maxAge);
            return (
              <button
                key={ageCategory.id}
                onClick={() =>
                  handleAgeClick(ageCategory)
                }
                className={`group bg-linear-to-br ${ageCategory.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${ageCategory.borderColor} cursor-pointer text-left`}
              >
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {ageCategory.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {ageCategory.name}
                </h3>

                {/* Age Range */}
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  {ageCategory.ageRange}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {ageCategory.description}
                </p>

                {/* Product Count Badge */}
                <div className="mb-4 inline-block bg-white bg-opacity-60 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-gray-800">
                    {productCount} Produkt{productCount !== 1 ? 'e' : ''}
                  </span>
                </div>

                {/* Arrow */}
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-2">
                  Entdecken
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-600">
          <div className="flex gap-4">
            <svg
              className="w-6 h-6 text-blue-600 shrink-0 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Altersgerechte Auswahl
              </h4>
              <p className="text-gray-600 text-sm">
                Unsere Spielzeuge sind speziell für jede Entwicklungsstufe
                ausgewählt. Die Altersangaben helfen dir, das perfekte Spielzeug
                für das Entwicklungsniveau deines Kindes zu finden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal für Produkte nach Alter */}
      {selectedAgeGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedAgeGroup.name}
                </h2>
                <p className="text-blue-100">
                  {getProductsByAge(selectedAgeGroup.minAge, selectedAgeGroup.maxAge).length} Produkte verfügbar
                </p>
              </div>
              <button
                onClick={closeModal}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content - Products Grid */}
            <div className="p-6">
              {getProductsByAge(selectedAgeGroup.minAge, selectedAgeGroup.maxAge).length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {getProductsByAge(selectedAgeGroup.minAge, selectedAgeGroup.maxAge).map((product) => (
                    <ProductItemCard
                      key={`${product.categorySlug}-${product.slug}`}
                      product={product}
                      categorySlug={product.categorySlug}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 text-gray-300 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg">
                    Keine Produkte für diese Altersgruppe verfügbar
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AgeCardsSection;
