import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: "/academy", icon: "BookOpen", text: "Academy" },
    { to: "/community", icon: "Users", text: "Community" },
    { to: "/dashboard", icon: "User", text: "Dashboard" },
    { to: "/blog", icon: "FileText", text: "Blog" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.to} 
                className="text-text hover:text-primary transition duration-300 flex items-center border-b-2 border-transparent hover:border-primary"
              >
                <Icon name={item.icon as any} size={18} className="mr-1" />
                {item.text}
              </Link>
            ))}
            <Link to="/consultation" className="btn-primary">
              Book Consultation
            </Link>
          </nav>
          <button 
            className="md:hidden text-text" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="text-text hover:text-primary transition duration-300 flex items-center py-2 border-b border-accent" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name={item.icon as any} size={18} className="mr-2" />
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/consultation" className="btn-primary block text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
