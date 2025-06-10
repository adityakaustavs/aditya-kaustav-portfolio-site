
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Full-stack web applications using MERN Stack with modern UI/UX design',
      icon: '💻'
    },
    {
      title: 'Dashboarding with Power BI',
      description: 'Interactive dashboards and data visualizations for business intelligence',
      icon: '📊'
    },
    {
      title: 'SQL-Based Data Analysis',
      description: 'Comprehensive data analysis and insights using SQL and database management',
      icon: '🗄️'
    },
    {
      title: 'Automated Reporting Solutions',
      description: 'Streamlined reporting workflows and automated data processing systems',
      icon: '🤖'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
