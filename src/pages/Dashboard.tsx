import React from 'react'
import { BookOpen, TrendingUp, Users, Calendar } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import { enrolledCourses } from '../data/enrolledCourses';
import { upcomingEvents } from '../data/upcomingEvents';
import CourseProgress from '../components/CourseProgress';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const enrolledCourses = [
    { id: 1, title: 'Graphic Design Mastery', progress: 60 },
    { id: 2, title: 'E-commerce Fundamentals', progress: 30 },
  ]

  const upcomingEvents = [
    { id: 1, title: 'Q&A Session: Digital Marketing', date: '2023-06-15' },
    { id: 2, title: 'Workshop: Building Your Brand', date: '2023-06-20' },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Welcome back, User!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <BookOpen className="text-primary mb-2" size={24} />
          <h2 className="text-lg font-semibold">Courses in Progress</h2>
          <p className="text-3xl font-bold">{enrolledCourses.length}</p>
        </Card>
        <Card>
          <TrendingUp className="text-primary mb-2" size={24} />
          <h2 className="text-lg font-semibold">Overall Progress</h2>
          <p className="text-3xl font-bold">45%</p>
        </Card>
        <Card>
          <Users className="text-primary mb-2" size={24} />
          <h2 className="text-lg font-semibold">Community Posts</h2>
          <p className="text-3xl font-bold">12</p>
        </Card>
        <Card>
          <Calendar className="text-primary mb-2" size={24} />
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-3xl font-bold">{upcomingEvents.length}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          {enrolledCourses.map(course => (
            <CourseProgress key={course.id} title={course.title} progress={course.progress} />
          ))}
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {upcomingEvents.map(event => (
            <div key={event.id} className="mb-4">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-text">{event.date}</p>
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <h2 className="text-2xl font-bold mb-4">Recommended Next Steps</h2>
        <ul className="list-disc list-inside space-y-2 text-text">
          <li>Complete the next module in "Graphic Design Mastery"</li>
          <li>Join the upcoming Q&A session on Digital Marketing</li>
          <li>Participate in the community discussion on e-commerce trends</li>
          <li>Book a 1-on-1 consultation with a NOOD mentor</li>
        </ul>
      </Card>
    </div>
  )
}

export default Dashboard
