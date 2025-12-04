import { useState, useContext } from 'react';
import testimonialsDataEn from '../../data/testimonialsData.json';
import testimonialsDataDe from '../../data/testimonialsData.de.json';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  const testimonialsData = language === 'de' ? testimonialsDataDe : testimonialsDataEn;
  const t = translations[language].homepage;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonialsData.length - testimonialsPerPage) : prevIndex - testimonialsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonialsData.length ? 0 : prevIndex + testimonialsPerPage
    );
  };

  const visibleTestimonials = testimonialsData.slice(currentIndex, currentIndex + testimonialsPerPage);

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      style={{
        padding: '5rem 1rem',
        background: darkMode 
          ? 'linear-gradient(to bottom right, #1f2937, #111827, #1f2937)' 
          : 'linear-gradient(to bottom right, #faf5ff, #fce7f3, #eff6ff)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: darkMode ? '#ffffff' : '#111827', marginBottom: '1rem' }}>
            {t.testimonials}
          </h2>
          <p style={{ fontSize: '1.125rem', color: darkMode ? '#d1d5db' : '#4b5563', maxWidth: '42rem', margin: '0 auto' }}>
            {language === 'de' ? 'Höre von glücklichen Eltern, Pädagogen und Schenkenden, die ToyTopia für Qualitätsspielzeug vertrauen' : 'Hear from happy parents, educators, and gift-givers who trust ToyTopia for quality toys'}
          </p>
        </div>

        {/* Testimonials Grid with Navigation */}
        <div className="relative flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            aria-label="Previous testimonials"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 max-w-6xl px-16">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                style={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  borderRadius: '1rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-0.5rem)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: `4px solid ${darkMode ? '#1e3a8a' : '#dbeafe'}` }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400?text=Avatar';
                    }}
                  />
                  <div className="ml-4">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: darkMode ? '#ffffff' : '#111827' }}>
                      {testimonial.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: darkMode ? '#9ca3af' : '#6b7280' }}>{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                {renderStars(testimonial.rating)}

                {/* Feedback */}
                <p style={{ color: darkMode ? '#d1d5db' : '#374151', lineHeight: '1.625', fontStyle: 'italic', flexGrow: 1 }}>
                  "{testimonial.feedback}"
                </p>

                {/* Quote Icon */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-8 h-8 text-blue-200 dark:text-blue-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex + testimonialsPerPage >= testimonialsData.length}
            className="absolute right-0 z-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            aria-label="Next testimonials"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonialsData.length / testimonialsPerPage))].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / testimonialsPerPage) === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-md">
            <svg
              className="w-8 h-8 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {language === 'de' ? 'Vertraut von über 10.000 glücklichen Familien' : 'Trusted by 10,000+ Happy Families'}
              </p>
              <p className="text-xs text-gray-500">
                {language === 'de' ? '4,9/5 Durchschnittsbewertung' : '4.9/5 Average Rating'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
