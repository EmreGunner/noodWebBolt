import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://img-b.udemycdn.com/notices/web_carousel_slide/image/dc2e45a0-867c-45bf-badb-ca6637f41ed6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-text">
            Your Gateway to <span className="text-primary">Digital Success</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text">
            Master digital skills for entrepreneurship with our expert-led courses
          </p>
          <Link 
            to="/programs" 
            className="btn-primary inline-flex items-center text-lg px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Explore Our Programs <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero