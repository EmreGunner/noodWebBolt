import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/runner/noodWebBolt/Home.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text readability */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="w-full lg:w-1/2">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create your Path to Digital Success
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Master digital skills for entrepreneurship with our expert-led courses and supportive community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/courses" 
              className="bg-white text-primary font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-opacity-90 transition duration-300"
            >
              Explore Courses <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
