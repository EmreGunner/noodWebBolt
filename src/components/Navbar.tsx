import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/academy', text: 'Academy' },
    { to: '/community', text: 'Community' },
    { to: '/blog', text: 'Blog' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" aria-label="Home">
          <Logo />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="text-text hover:text-primary transition duration-300"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Button to="/consultation" variant="primary" className="rounded-full">
            Book Consultation
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button to="/consultation" variant="primary" className="w-full rounded-full">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
