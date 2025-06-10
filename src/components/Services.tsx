
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Full-stack web applications using MERN stack with modern UI/UX design and responsive layouts.',
      icon: '🌐',
      features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'Responsive Design']
    },
    {
      title: 'Dashboarding with Power BI',
      description: 'Interactive dashboards and data visualizations for business intelligence and analytics.',
      icon: '📊',
      features: ['KPI Dashboards', 'Data Visualization', 'Business Intelligence', 'Real-time Analytics']
    },
    {
      title: 'SQL-Based Data Analysis',
      description: 'Comprehensive data analysis and database management solutions using SQL and DBMS.',
      icon: '🗄️',
      features: ['Database Design', 'Query Optimization', 'Data Mining', 'Performance Tuning']
    },
    {
      title: 'Automated Reporting Solutions',
      description: 'Streamlined reporting workflows and automated data processing systems.',
      icon: '⚡',
      features: ['Workflow Automation', 'Report Generation', 'Data Processing', 'System Integration']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-blue-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
