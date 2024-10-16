import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, BookOpen, Users, Zap, Target, Globe } from 'lucide-react'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95])

  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <Hero />
      
      <motion.div
        style={{ y: smoothY, opacity, scale }}
        className="relative z-10 bg-white"
      >
        <section className="py-20 bg-gradient-to-b from-accent to-background">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title mb-12"
            >
              Embark on Your Digital Journey
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="text-primary mb-4" size={48} />}
                title="NOOD Academy"
                description="Master digital skills for entrepreneurship. Courses in Graphic Design, E-commerce, Language Learning, and Creative Arts."
                link="/academy"
                linkText="Explore Courses"
              />
              <FeatureCard
                icon={<Users className="text-primary mb-4" size={48} />}
                title="NOOD Community"
                description="Join our thriving Telegram-based community. Connect, learn, and grow with like-minded individuals."
                link="/community"
                linkText="Join Community"
              />
              <FeatureCard
                icon={<Zap className="text-primary mb-4" size={48} />}
                title="NOOD Agency"
                description="Supercharge your business with our expert digital marketing services. From strategy to execution, we've got you covered."
                link="/agency"
                linkText="Learn More"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-background relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://source.unsplash.com/random/1920x1080?abstract')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title mb-12 text-white"
            >
              Success Stories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <p className="text-xl mb-8 text-text max-w-2xl mx-auto">
              Whether you're looking to learn new skills, grow your business, or join a community of like-minded individuals, NOOD has something for you.
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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  linkText: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, linkText }) => (
  <motion.div 
    className="card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
    <h3 className="text-2xl font-bold mb-4 text-text">{title}</h3>
    <p className="text-text mb-4">{description}</p>
    <Link to={link} className="text-primary hover:text-secondary inline-flex items-center">
      {linkText} <ArrowRight className="ml-1" size={16} />
    </Link>
  </motion.div>
)

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  image: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, image }) => (
  <motion.div
    className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4" />
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-4">{role}</p>
    <p className="text-text italic">"{content}"</p>
  </motion.div>
)

export default Home
