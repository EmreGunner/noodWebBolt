import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Zap, Globe } from 'lucide-react'
import Hero from '../components/Hero'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Graphic Designer",
    content: "NOOD's Digital Illustration Mastery course transformed my career. The skills I learned helped me land my dream job!",
    image: "https://source.unsplash.com/random/100x100?woman"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Entrepreneur",
    content: "The E-commerce Essentials course provided invaluable insights. My online store's sales have doubled since implementing what I learned.",
    image: "https://source.unsplash.com/random/100x100?man"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Content Creator",
    content: "NOOD's community is incredibly supportive. The connections I've made have been instrumental in growing my personal brand.",
    image: "https://source.unsplash.com/random/100x100?woman-2"
  }
]

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <Hero />
      
      <div className="container mx-auto px-4 space-y-24 py-24">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-text">Embark on Your Digital Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-text">NOOD Academy</h3>
              <p className="text-text mb-4">Master digital skills for entrepreneurship with expert-led courses in Graphic Design, E-commerce, and more.</p>
              <Link to="/academy" className="text-primary hover:text-secondary inline-flex items-center">
                Explore Courses <ArrowRight className="ml-1" size={16} />
              </Link>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-text">NOOD Community</h3>
              <p className="text-text mb-4">Join our thriving Telegram-based community. Connect, learn, and grow with like-minded individuals.</p>
              <Link to="/community" className="text-primary hover:text-secondary inline-flex items-center">
                Join Now <ArrowRight className="ml-1" size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose NOOD section */}
        <motion.section
          className="bg-accent rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose NOOD?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Expert-Led Courses", description: "Learn from industry professionals" },
              { icon: Users, title: "Supportive Community", description: "Connect with like-minded entrepreneurs" },
              { icon: Zap, title: "Practical Skills", description: "Gain real-world applicable knowledge" },
              { icon: Globe, title: "Global Network", description: "Access opportunities worldwide" }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <feature.icon className="text-white mb-4 mx-auto" size={36} />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Stories section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-text">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-center">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{testimonial.role}</p>
                <p className="text-text italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action section */}
        <motion.section 
          className="bg-primary rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Whether you're looking to learn new skills, grow your business, or join a community of like-minded individuals, NOOD has something for you.
          </p>
          <Link to="/consultation" className="bg-white text-primary hover:bg-accent hover:text-white transition duration-300 inline-flex items-center px-6 py-3 rounded-full font-semibold">
            Book a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default Home
