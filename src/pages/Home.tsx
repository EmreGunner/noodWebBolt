import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Container from '../components/Container'
import DesignCard from '../components/DesignCard'

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
      className="w-full"
    >
      <Hero />
      
      <Container>
        <section className="py-20 space-y-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-text">We help entrepreneurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DesignCard
                title="Form Community"
                description="Connect with like-minded entrepreneurs and build valuable relationships."
                icon={<Users className="text-primary" size={48} />}
                link="/community"
                linkText="Join Now"
              />
              <DesignCard
                title="Work Together"
                description="Collaborate on projects and learn from each other's experiences."
                icon={<BookOpen className="text-primary" size={48} />}
                link="/academy"
                linkText="Learn More"
              />
              <DesignCard
                title="Take Control"
                description="Gain the skills and knowledge to take control of your entrepreneurial journey."
                icon={<ArrowRight className="text-primary" size={48} />}
                link="/courses"
                linkText="Explore Courses"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-text">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-center">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">{testimonial.role}</p>
                  <p className="text-sm italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center bg-accent rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-8">Why NOOD?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Expert-Led Courses", description: "Learn from industry professionals" },
                { title: "Supportive Community", description: "Connect with like-minded entrepreneurs" },
                { title: "Practical Skills", description: "Gain real-world applicable knowledge" },
                { title: "Global Network", description: "Access opportunities worldwide" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-20 bg-primary rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn new skills, grow your business, or join a community of like-minded individuals, NOOD has something for you.
          </p>
          <Link 
            to="/consultation" 
            className="bg-white text-primary inline-flex items-center justify-center text-lg px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md"
          >
            Book a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </section>
      </Container>
    </motion.div>
  )
}

export default Home
