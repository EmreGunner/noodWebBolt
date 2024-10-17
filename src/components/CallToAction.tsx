import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './Button'

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <motion.section 
      className="text-center py-12 bg-accent rounded-3xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-lg text-white mb-6">{description}</p>
      <Button to={buttonLink} variant="secondary" className="px-8 bg-white text-accent hover:bg-gray-100">
        {buttonText} <ArrowRight className="ml-2" size={20} />
      </Button>
    </motion.section>
  )
}

export default CallToAction
