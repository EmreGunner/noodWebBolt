import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Academy from './pages/Academy'
import Community from './pages/Community'
import Blog from './pages/Blog'
import CourseDetail from './pages/CourseDetail'
import Design from './pages/Design'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/:courseName" element={<CourseDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
