import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Container from './Container'
import GlassCard from './GlassCard'

const PhysicalOffice: React.FC = () => {
  return (
    <Container className="py-16 bg-accent-green">
      <GlassCard>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Visit Our New Space</h2>
            <p className="text-white mb-4">
              We're excited to announce our new centrally-located office for consultations and co-working. Come visit us and experience the NOOD community in person!
            </p>
            <div className="flex items-center text-white">
              <MapPin className="mr-2" size={24} />
              <span>123 Main Street, Casablanca, Morocco</span>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://source.unsplash.com/random/800x600?coworking+space"
              alt="NOOD Office Space"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </GlassCard>
    </Container>
  )
}

export default PhysicalOffice
