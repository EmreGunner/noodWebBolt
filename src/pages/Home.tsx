import React from 'react'
import Hero from '../components/Hero'
import CourseShowcase from '../components/CourseShowcase'
import Community from '../components/Community'
import PhysicalOffice from '../components/PhysicalOffice'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <CourseShowcase />
      <Community />
      <PhysicalOffice />
    </div>
  )
}

export default Home
