import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ShoppingBag, Globe, Pen } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  { icon: BookOpen, title: 'Graphic Design', link: '/courses/graphic-design' },
  { icon: ShoppingBag, title: 'E-commerce', link: '/courses/e-commerce' },
  { icon: Globe, title: 'Language Learning', link: '/courses/language' },
  { icon: Pen, title: 'Creative Arts', link: '/courses/creative-arts' },
]

const CourseCategories: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-heading">Our Course Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <category.icon className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <Link to={category.link} className="text-accent hover:underline">
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCategories
