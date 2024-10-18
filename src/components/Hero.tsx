import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import GlassCard from './GlassCard'
import HeroCard from './HeroCard'


const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#83b775] text-[#534b4e] overflow-hidden py-20">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8">
              <h1 className="font-['Scala_Sans_Bold_Italic'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Empower Your
                <br />
                Digital Future
              </h1>
              <p className="font-['Scala_Sans_Roman'] text-lg sm:text-xl md:text-2xl mb-8 text-white">
                Develop skills, start side hustles, and launch businesses with NOOD's expert-led courses and supportive community.
              </p>
              <Link 
                to="/courses" 
                className="bg-white text-[#4e9350] font-['Scala_Sans_Bold_Italic'] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#e0e5ba] transition duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Explore Courses <ArrowRight className="ml-2" size={24} />
              </Link>
            </GlassCard>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroCard />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
