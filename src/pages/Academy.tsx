import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Calendar, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import courses from '../data/courses.json'

const Academy: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const { t } = useTranslation()

  const filteredCourses = courses.filter(course => 
    (selectedType ? course.courseType === selectedType : true) &&
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 nood-gradient-text">{t('academy.title')}</h1>
        <p className="text-xl text-text max-w-3xl mx-auto">
          {t('academy.subtitle')}
        </p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button
              className={`px-4 py-2 rounded-full ${selectedType === null ? 'bg-primary text-white' : 'bg-gray-200 text-text'} hover:bg-opacity-80 transition duration-300`}
              onClick={() => setSelectedType(null)}
            >
              {t('all')}
            </button>
            <button
              className={`px-4 py-2 rounded-full ${selectedType === 'Virtual' ? 'bg-primary text-white' : 'bg-gray-200 text-text'} hover:bg-opacity-80 transition duration-300`}
              onClick={() => setSelectedType('Virtual')}
            >
              {t('virtual')}
            </button>
            <button
              className={`px-4 py-2 rounded-full ${selectedType === 'In-Person' ? 'bg-primary text-white' : 'bg-gray-200 text-text'} hover:bg-opacity-80 transition duration-300`}
              onClick={() => setSelectedType('In-Person')}
            >
              {t('inPerson')}
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder={t('searchCourses')}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <img src={course.coursePhoto} alt={course.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-text">{course.name}</h3>
                <p className="text-text mb-2">{course.domain}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-lg text-primary">${course.price}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${course.courseType === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {course.courseType}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{t('startDate')}: {new Date(course.startDate).toLocaleDateString()}</span>
                </div>
                <Link 
                  to={`/academy/${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn-primary text-sm px-4 py-2 w-full block text-center"
                >
                  {t('apply')}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section 
        className="text-center py-12 bg-accent rounded-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">{t('notSureWhere')}</h2>
        <p className="text-lg text-white mb-6">
          {t('takeAssessment')}
        </p>
        <button className="btn-secondary inline-flex items-center hover:bg-primary hover:text-white transition duration-300">
          {t('startAssessment')} <ArrowRight className="ml-2" size={20} />
        </button>
      </motion.section>
    </motion.div>
  )
}

export default Academy
