import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: '/academy', text: 'Academy' },
    { to: '/community', text: 'Community' },
    { to: '/dashboard', text: 'Dashboard' },
    { to: '/blog', text: 'Blog' },
  ]

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden md:flex space-x-4" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.to} 
              className="text-text hover:text-primary transition duration-300"
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button to="/consultation" variant="primary" ariaLabel="Book a consultation">
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
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden mt-4 pb-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.to} 
                  className="block px-4 py-2 text-text hover:bg-accent hover:text-white transition duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Button 
                to="/consultation" 
                variant="primary" 
                className="mx-4" 
                fullWidth 
                ariaLabel="Book a consultation"
              >
                Book Consultation
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
