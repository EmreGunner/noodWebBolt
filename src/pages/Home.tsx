import React from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Community from '../components/Community'
import PhysicalOffice from '../components/PhysicalOffice'
import Footer from '../components/Footer'



const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <section className="py-20 bg-gray-100">
        <Testimonials />
      </section>
      <section className="py-20">
        <Community />
      </section>
      <section className="py-20 bg-gray-100">
        <PhysicalOffice />
      </section>
      <Footer />
    </div>
  )
}

export default Home
