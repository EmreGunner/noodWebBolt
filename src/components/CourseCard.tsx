import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import FocusWrapper from './FocusWrapper';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, duration, level, image }) => {
  return (
    <FocusWrapper>
      <Link to={`/course/${id}`} className="block">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-accent hover:border-primary">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-text mb-4">{description}</p>
            <div className="flex justify-between items-center text-sm text-text">
              <span className="flex items-center">
                <Icon name="Clock" size={16} className="mr-1" />
                {duration}
              </span>
              <span className="flex items-center">
                <Icon name="BarChart" size={16} className="mr-1" />
                {level}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </FocusWrapper>
  );
};

export default CourseCard;
