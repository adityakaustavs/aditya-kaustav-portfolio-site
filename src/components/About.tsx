
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-700 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg text-gray-300 leading-relaxed">
              Aditya Kaustav S is a passionate software developer skilled in Data Structures & Algorithms, 
              MERN Stack Development, and Data Analytics. Currently studying Electronics and Communication 
              Engineering at NIE North, he interned at Avia Solutions Integrations, where he worked on 
              healthcare supply chain analysis and Power BI dashboards. His projects span IoT, web apps, 
              and games, including a smart agriculture rover and a full-stack e-commerce platform. He's 
              also a certified full-stack developer and an active volunteer with Youth for Seva, with a 
              love for motorsports like F1 and NASCAR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
