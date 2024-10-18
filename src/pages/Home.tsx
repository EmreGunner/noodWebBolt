import React from 'react'
import Hero from '../components/Hero'
import CourseShowcase from '../components/CourseShowcase'
import Community from '../components/Community'
import PhysicalOffice from '../components/PhysicalOffice'
import Testimonials from '../components/Testimonials'


const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Community />
      <PhysicalOffice />
    </div>
  )
}

export default Home
