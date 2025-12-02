const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Gradient Background - 3 colors inspired by logo (green, yellow, purple/pink) with low opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-yellow-300/30 to-pink-400/30"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive" }}>
          <span className="text-blue-600">TOY</span>
          <span className="text-green-600">TOPIA</span>
        </h1>
        
        {/* Slogan */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-12 text-black">
          TOYTOPIA makes your kids
          <br />smarter and more creative!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#products"
            className="px-10 py-5 bg-white text-green-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:bg-green-50"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="px-10 py-5 bg-green-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:bg-green-700"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
