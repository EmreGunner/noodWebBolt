import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Calendar, Search } from 'lucide-react'
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
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 nood-gradient-text">{t('academy.title')}</h1>
        <p className="text-xl text-text max-w-3xl mx-auto">
          {t('academy.subtitle')}
        </p>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
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
              className={`px-4 py-2 rounded-full ${selectedType === 'Physical' ? 'bg-primary text-white' : 'bg-gray-200 text-text'} hover:bg-opacity-80 transition duration-300`}
              onClick={() => setSelectedType('Physical')}
            >
              {t('physical')}
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder={t('searchCourses')}
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-6">{t('featuredCourses')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <Link 
              key={course.name} 
              to={`/academy/${course.name.toLowerCase().replace(/\s+/g, '-')}`} 
              className="nood-card group hover:shadow-xl transition duration-300"
            >
              <img src={course.coursePhoto} alt={course.name} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition duration-300">{course.name}</h3>
                <p className="text-text mb-2">{course.domain}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">${course.price}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${course.courseType === 'Virtual' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {course.courseType}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar size={16} className="mr-1" />
                  <span>{t('startDate')}: {new Date(course.startDate).toLocaleDateString()}</span>
                </div>
                <button 
                  className="btn-primary text-sm px-4 py-2 w-full block text-center group-hover:bg-secondary transition duration-300"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.location.href = `/academy/${course.name.toLowerCase().replace(/\s+/g, '-')}`;
                  }}
                >
                  {t('apply')}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-accent rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">{t('notSureWhere')}</h2>
        <p className="text-lg text-text mb-6">
          {t('takeAssessment')}
        </p>
        <button className="btn-secondary inline-flex items-center hover:bg-primary hover:text-white transition duration-300">
          {t('startAssessment')} <ArrowRight className="ml-2" size={20} />
        </button>
      </section>
    </div>
  )
}

export default Academy
