import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <img 
              src="/Logo.png" 
              alt="ToyTopia Logo" 
              className="h-14 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 transition duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-green-600 transition duration-300 font-medium"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-green-600 transition duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#products"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-100 hover:text-green-600 transition duration-300 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
