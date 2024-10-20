import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Design: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Our Happy Clients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="John Doe"
          role="Software Engineer"
          testimonial="This product has completely transformed the way I work. It's intuitive, powerful, and a joy to use every day."
          rating={4}
          imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <TestimonialCard
          name="Jane Smith"
          role="Product Manager"
          testimonial="An essential tool for our team. It has streamlined our processes and improved productivity."
          rating={5}
          imageSrc="https://images.unsplash.com/photo-1502767089025-6572583495b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        {/* Add more TestimonialCards as needed */}
      </div>
    </div>
  );
};

export default Design;
