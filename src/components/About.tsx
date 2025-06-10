
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm Aditya Kaustav S, a passionate software developer skilled in <span className="text-blue-400">Data Structures & Algorithms</span>, 
              <span className="text-blue-400"> MERN Stack Development</span>, and <span className="text-blue-400">Data Analytics</span>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently studying Electronics and Communication Engineering at NIE North, I recently completed an 
              internship at Avia Solutions Integrations, where I worked on healthcare supply chain analysis and 
              Power BI dashboards.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My projects span IoT, web applications, and games, including a smart agriculture rover and a full-stack e-commerce platform. I'm also a certified full-stack developer and an active volunteer with Youth for Seva.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me following motorsports like F1 and NASCAR!
            </p>
          </div>
          
          <div className="bg-blue-800/30 rounded-lg p-6 backdrop-blur-sm border border-blue-700/50">
            <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-1">Location</h4>
                <p className="text-gray-300">Mysuru, Karnataka</p>
              </div>
              
              <div>
                <h4 className="text-blue-400 font-medium mb-1">Education</h4>
                <p className="text-gray-300">NIE North</p>
              </div>
              
              <div>
                <h4 className="text-blue-400 font-medium mb-1">Focus</h4>
                <p className="text-gray-300">Full-Stack Development</p>
              </div>
              
              <div>
                <h4 className="text-blue-400 font-medium mb-1">Experience</h4>
                <p className="text-gray-300">Avia Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
