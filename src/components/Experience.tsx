
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analysis',
      description: 'Analyzed healthcare supply chain data to identify trends and optimization opportunities.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'KPI Dashboards', 
      description: 'Created interactive Power BI dashboards for key performance indicators.',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Automation',
      description: 'Automated reporting workflows to streamline data processing tasks.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Junior Software Intern</h3>
                <h4 className="text-xl text-blue-400 mb-2">Avia Solutions Integrations</h4>
              </div>
              <span className="text-gray-300 font-medium bg-blue-600/20 px-4 py-2 rounded-lg">Feb 2025 – June 2025</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contributed to healthcare supply chain analysis projects, developing comprehensive data solutions and interactive 
              dashboards to improve operational efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <div key={index} className={`bg-gradient-to-r ${exp.color} p-4 rounded-lg`}>
                  <h5 className="text-white font-bold mb-2">{exp.title}</h5>
                  <p className="text-white/90 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
