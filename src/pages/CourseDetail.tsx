import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import courses from '../data/courses.json';
import { ArrowLeft } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { courseName } = useParams<{ courseName: string }>();
  const { t } = useTranslation();
  
  const course = courses.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === courseName);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{t('courseNotFound')}</h1>
        <p className="mb-4">{t('courseNotFoundDescription')}</p>
        <Link to="/academy" className="btn-primary inline-flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          {t('backToAcademy')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/academy" className="btn-secondary inline-flex items-center mb-4">
        <ArrowLeft className="mr-2" size={20} />
        {t('backToAcademy')}
      </Link>
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <img src={course.coursePhoto} alt={course.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('courseDescription')}</h2>
        <p>{course.description}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('courseDetails')}</h2>
        <ul className="list-disc list-inside">
          <li>{t('courseType')}: {course.courseType}</li>
          <li>{t('domain')}: {course.domain}</li>
          <li>{t('startDate')}: {new Date(course.startDate).toLocaleDateString()}</li>
          <li>{t('duration')}: {course.duration} {t('weeks')}</li>
          <li>{t('price')}: ${course.price}</li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('courseObjectives')}</h2>
        <p>{t('courseObjectivesDescription')}</p>
      </div>
      <button className="btn-primary w-full">{t('applyNow')}</button>
    </div>
  );
};

export default CourseDetail;
