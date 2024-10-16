import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo variant="dark" />
            <p className="mt-4 text-sm text-white">
              Empowering creators and entrepreneurs with expert-led courses and personalized guidance.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Icon name="Linkedin" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/academy" className="text-white hover:text-accent transition-colors">Academy</Link></li>
              <li><Link to="/community" className="text-white hover:text-accent transition-colors">Community</Link></li>
              <li><Link to="/blog" className="text-white hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-white hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="text-white mr-2" />
                <a href="mailto:info@nood.com" className="text-white hover:text-accent transition-colors">info@nood.com</a>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="text-white mr-2" />
                <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" size={16} className="text-white mr-2" />
                <span className="text-white">123 Nood Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Nood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
