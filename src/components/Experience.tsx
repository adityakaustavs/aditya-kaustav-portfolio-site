
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-700 rounded-lg p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Junior Software Intern</h3>
              <span className="text-blue-400 font-medium">Feb 2025 – June 2025</span>
            </div>
            
            <h4 className="text-xl text-blue-300 mb-4">Avia Solutions Integrations</h4>
            
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Analyzed healthcare supply chain data to optimize operational efficiency
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Created comprehensive KPI dashboards using Power BI for data visualization
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Automated reporting workflows to streamline business processes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
