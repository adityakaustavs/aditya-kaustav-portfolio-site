
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Electronics & Communication',
      institution: 'NIE North',
      period: '2021 – Present',
      status: 'Pursuing'
    },
    {
      degree: 'PUC',
      institution: 'Sadvidya Semi Residential PU College',
      period: '2021',
      status: 'Completed'
    },
    {
      degree: 'SSLC',
      institution: 'CFTRI School',
      period: '2019',
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-300 text-lg">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-gray-300 font-medium">{edu.period}</span>
                    <span className={`block text-sm mt-1 ${edu.status === 'Pursuing' ? 'text-yellow-400' : 'text-green-400'}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
