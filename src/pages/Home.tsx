import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users } from 'lucide-react'
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
    <div className="w-full">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-20 bg-gradient-to-b from-accent to-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">Our Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BookOpen className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-text">NOOD Academy</h3>
                <p className="text-text mb-4">Master digital skills for entrepreneurship. Courses in Graphic Design, E-commerce, Language Learning, and Creative Arts.</p>
                <Link to="/academy" className="text-primary hover:text-secondary inline-flex items-center">
                  Learn More <ArrowRight className="ml-1" size={16} />
                </Link>
              </motion.div>
              <motion.div
                className="card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="text-primary mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-text">NOOD Community</h3>
                <p className="text-text mb-4">Join our thriving Telegram-based community. Connect, learn, and grow with like-minded individuals.</p>
                <Link to="/community" className="text-primary hover:text-secondary inline-flex items-center">
                  Join Now <ArrowRight className="ml-1" size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                  <p className="text-text italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-text max-w-2xl mx-auto">
              Whether you're looking to learn new skills, grow your business, or join a community of like-minded individuals, Nood has something for you.
            </p>
            <Link to="/consultation" className="btn-secondary inline-flex items-center">
              Book a Free Consultation <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Home
