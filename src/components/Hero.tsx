import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Home.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
      <Container className="relative z-10 h-full flex items-center">
        <div className="w-full lg:w-1/2 text-white mt-24 lg:mt-0">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create your Path 
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90"
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
              className="bg-white text-primary font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-opacity-90 transition duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Explore Courses <ArrowRight className="ml-2" size={24} />
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
