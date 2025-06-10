
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Databases & Analytics',
      skills: ['MongoDB', 'SQL', 'DBMS', 'Power BI', 'Excel'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Core Concepts',
      skills: ['Data Structures', 'Algorithms', 'MERN Stack'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg text-center font-medium hover:scale-105 transition-transform duration-200`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
