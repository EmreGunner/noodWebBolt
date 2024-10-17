import React from 'react';

interface CourseProgressProps {
  title: string;
  progress: number;
}

const CourseProgress: React.FC<CourseProgressProps> = ({ title, progress }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold">{title}</h3>
      <div className="w-full bg-accent rounded-full h-2.5 mt-2">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-text mt-1">{progress}% complete</p>
    </div>
  );
};

export default CourseProgress;
