import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styled from 'styled-components'
import Card from '../components/HeroCard';


const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#83b775] text-[#534b4e] overflow-hidden">
      <Container className="relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-['Scala_Sans_Bold_Italic'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#4e9350]">
              Empower Your
              <br />
              Digital Future
            </h1>
            <p className="font-['Scala_Sans_Roman'] text-lg sm:text-xl md:text-2xl mb-8 text-[#534b4e]">
              Develop skills, start side hustles, and launch businesses with NOOD's expert-led courses and supportive community.
            </p>
            <Link 
              to="/academy" 
              className="bg-[#4e9350] text-white font-['Scala_Sans_Bold_Italic'] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#83b775] transition duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Explore Courses <ArrowRight className="ml-2" size={24} />
            </Link>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card />
          </motion.div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#e0e5ba" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
