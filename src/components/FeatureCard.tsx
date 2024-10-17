import React from 'react'
import { LucideIcon } from 'lucide-react'
import Card from './Card'

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="flex-grow flex flex-col items-center text-center p-6">
        <Icon className="text-primary mb-4" size={36} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text">{description}</p>
      </div>
    </Card>
  )
}

export default FeatureCard
