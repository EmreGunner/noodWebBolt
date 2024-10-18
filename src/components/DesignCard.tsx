import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface DesignCardProps {
  title: string
  description: string
  icon: ReactNode
  link: string
  linkText: string
}

const DesignCard: React.FC<DesignCardProps> = ({ title, description, icon, link, linkText }) => {
  return (
    <div className="card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-text">{title}</h3>
      <p className="text-text mb-4">{description}</p>
      <Link to={link} className="text-primary hover:text-secondary inline-flex items-center">
        {linkText} <ArrowRight className="ml-1" size={16} />
      </Link>
    </div>
  )
}

export default DesignCard
