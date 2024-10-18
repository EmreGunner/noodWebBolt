import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, ShoppingBag, Palette, TrendingUp, Languages, Cake } from 'lucide-react'
import Container from './Container'
import GlassCard from './GlassCard'

const courses = [
  { icon: Briefcase, title: 'Fashion Business', description: 'Learn the ins and outs of the fashion industry.' },
  { icon: ShoppingBag, title: 'E-commerce', description: 'Build and scale your online business.' },
  { icon: Palette, title: 'Graphic Design', description: 'Master the art of visual communication.' },
  { icon: TrendingUp, title: 'Trading', description: 'Understand financial markets and trading strategies.' },
  { icon: Languages, title: 'Language Learning', description: 'Expand your linguistic horizons.' },
  { icon: Cake, title: 'Cake Design', description: 'Create stunning edible works of art.' },
]

const CourseShowcase: React.FC = () => {
  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-nood-green">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col items-center p-6 text-center">
              <course.icon className="text-white mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
              <p className="text-white">{course.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default CourseShowcase
