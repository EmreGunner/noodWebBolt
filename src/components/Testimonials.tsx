import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Sarah J.', role: 'Graphic Designer', content: 'NOOD\'s courses transformed my career. I landed my dream job thanks to the skills I learned!' },
  { name: 'Michael C.', role: 'E-commerce Entrepreneur', content: 'The e-commerce essentials course provided invaluable insights. My online store\'s sales have doubled!' },
  { name: 'Emily R.', role: 'Language Learner', content: 'I\'ve always struggled with learning new languages, but NOOD\'s approach made it enjoyable and effective.' },
]

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-heading">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white text-text p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="mb-4 italic">"{testimonial.content}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
