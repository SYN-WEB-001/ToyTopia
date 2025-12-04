import React, { useEffect, useState, useMemo } from "react";
import testimonials from "../../data/testimonialsData.json";

const gradientBg =
  "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)";

const itemsPerSlide = 3;

export default function TestimonialsSection() {
  // currentIndex = índice do PRIMEIRO card visível
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const total = testimonials.length;

  // Monta os 3 cards visíveis a partir do índice atual
  const visibleTestimonials = useMemo(() => {
    if (total === 0) return [];

    const result = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const idx = (currentIndex + i) % total;
      result.push({ ...testimonials[idx], _originalIndex: idx });
    }
    return result;
  }, [currentIndex, total]);

  // Auto-play: a cada 3s anda 1 posição para a direita (loop infinito)
  useEffect(() => {
    if (isHovered || total <= itemsPerSlide) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(id);
  }, [isHovered, total]);

  const handleArrowPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleArrowNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleCardEnter = (index) => {
    setIsHovered(true);
    setHoveredCardIndex(index); // 0, 1 ou 2 (posição dentro do slide)
  };

  const handleCardLeave = () => {
    setIsHovered(false);
    setHoveredCardIndex(null);
  };

  return (
    <section
      className="w-full py-20"
      style={{ backgroundImage: gradientBg }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-0 text-center">
        <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
          Was unsere Kunden sagen
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Hear from happy parents, educators, and gift-givers who trust ToyTopia
          for quality toys.
        </p>
      </div>

      {/* Área principal com setas externas e cards */}
      <div className="relative max-w-6xl mx-auto mt-10 flex items-center justify-center gap-8 px-4 lg:px-0">
        {/* Seta Esquerda (fora do carrossel) */}
        <button
          type="button"
          onClick={handleArrowPrev}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-50 transition-all absolute left-0 -translate-x-6 top-1/2 -translate-y-1/2"
        >
          <span className="text-xl">&#8592;</span>
        </button>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 w-full">
          {visibleTestimonials.map((t, index) => (
            <div
              key={t.name + t._originalIndex}
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={handleCardLeave}
              className="h-full transition-transform"
              style={{
                transform:
                  hoveredCardIndex === index ? "translateY(-4px)" : "none",
              }}
            >
              {/* Wrapper que vira borda gradiente quando hover */}
              <div
                className="rounded-2xl p-[2px] h-full transition-all"
                style={
                  hoveredCardIndex === index
                    ? { backgroundImage: gradientBg }
                    : { backgroundColor: "transparent" }
                }
              >
                {/* Card branco */}
                <div className="h-full rounded-2xl bg-white shadow-lg px-6 py-6 flex flex-col">
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 text-sm md:text-base">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-amber-400 text-sm">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>

                  <p className="mt-3 text-sm text-gray-700 text-left leading-relaxed">
                    {t.feedback}
                  </p>

                  <div className="mt-4 text-3xl text-emerald-400 text-left">
                    &ldquo;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seta Direita (fora do carrossel) */}
        <button
          type="button"
          onClick={handleArrowNext}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md hover:shadow-lg hover:bg-blue-700 transition-all absolute right-0 translate-x-6 top-1/2 -translate-y-1/2"
        >
          <span className="text-xl">&#8594;</span>
        </button>
      </div>

      {/* Dots – um por testimonial, marcando o primeiro visível */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? "w-7 bg-blue-500"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
