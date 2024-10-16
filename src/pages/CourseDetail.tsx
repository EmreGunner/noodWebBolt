import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import courses from '../data/courses.json';

const CourseDetail: React.FC = () => {
  const { courseName } = useParams<{ courseName: string }>();
  const course = courses.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === courseName);

  if (!course) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the course you're looking for.</p>
        <Link to="/academy" className="btn-primary">
          <ArrowLeft className="inline mr-2" size={20} />
          Back to Academy
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Link to="/academy" className="btn-secondary mb-4 inline-flex items-center">
        <ArrowLeft className="mr-2" size={20} />
        Back to Academy
      </Link>
      <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
      <img src={course.coursePhoto} alt={course.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-xl mb-4">{course.domain}</p>
      <p className="text-2xl font-bold mb-4">${course.price}</p>
      <p className="mb-4">Course Type: {course.courseType}</p>
      <p className="mb-4">Start Date: {new Date(course.startDate).toLocaleDateString()}</p>
      <button className="btn-primary">Enroll Now</button>
    </motion.div>
  );
};

export default CourseDetail;
