import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import styled from 'styled-components'
import Card from '../components/HeroCard';

const StyledHero = styled.div`
  position: relative;
  background: linear-gradient(135deg, #83b775 0%, #4e9350 100%);
  overflow: hidden;

  .content {
    position: relative;
    z-index: 1;
  }

  h1 {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .card-container {
    perspective: 1500px;
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledHero>
      <Container className="relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-['Montserrat'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Empower Your
              <br />
              Digital Future
            </h1>
            <p className="font-['Open Sans'] text-lg sm:text-xl md:text-2xl mb-8 text-white">
              Develop skills, start side hustles, and launch businesses with NOOD's expert-led courses and supportive community.
            </p>
            <Link 
              to="/academy" 
              className="bg-white text-[#4e9350] font-['Montserrat'] py-3 px-8 rounded-full inline-flex items-center hover:bg-[#e0e5ba] transition duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Explore Courses <ArrowRight className="ml-2" size={24} />
            </Link>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center card-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           <Card />
          </motion.div>
        </div>
      </Container>
    </StyledHero>
  )
}

export default Hero
