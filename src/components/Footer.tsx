import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NOOD</h3>
            <p className="text-sm">Empowering entrepreneurs and freelancers with targeted skills and expert guidance for digital business success.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/academy" className="hover:text-accent transition duration-300">Academy</Link></li>
              <li><Link to="/agency" className="hover:text-accent transition duration-300">Agency</Link></li>
              <li><Link to="/community" className="hover:text-accent transition duration-300">Community</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition duration-300">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: info@nood.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition duration-300">Facebook</a></li>
              <li><a href="#" className="hover:text-accent transition duration-300">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
