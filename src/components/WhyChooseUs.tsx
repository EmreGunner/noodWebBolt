import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Zap, Globe } from 'lucide-react'

const reasons = [
  { icon: Award, title: 'Expert-Led Courses', description: 'Learn from industry professionals' },
  { icon: Users, title: 'Supportive Community', description: 'Connect with like-minded learners' },
  { icon: Zap, title: 'Practical Skills', description: 'Gain real-world applicable knowledge' },
  { icon: Globe, title: 'Global Network', description: 'Access opportunities worldwide' },
]

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-heading">Why Choose NOOD?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <reason.icon className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
