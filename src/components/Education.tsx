
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Electronics & Communication',
      institution: 'NIE North',
      period: '2021 – Present',
      status: 'Current',
      description: 'Pursuing Bachelor\'s degree with focus on electronics, communication systems, and software development.'
    },
    {
      degree: 'PUC (Pre-University Course)',
      institution: 'Sadvidya Semi Residential PU College',
      period: '2021',
      status: 'Completed',
      description: 'Completed pre-university education with strong foundation in science and mathematics.'
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'CFTRI School',
      period: '2019',
      status: 'Completed',
      description: 'Completed secondary education with excellent academic performance.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-blue-400 text-lg mb-2">{edu.institution}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                </div>
                <div className="text-right mt-4 md:mt-0 md:ml-6">
                  <span className="text-gray-300 font-medium block">{edu.period}</span>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === 'Current' ? 'bg-green-600/20 text-green-400' : 'bg-blue-600/20 text-blue-400'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
