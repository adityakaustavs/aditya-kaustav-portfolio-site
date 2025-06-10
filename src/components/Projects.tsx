
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Agriculture Rover',
      description: 'IoT-based autonomous navigation rover for smart agriculture with Arduino integration',
      image: '/lovable-uploads/90b06954-2838-4f5e-81c4-fdebfbf15a54.png',
      tech: ['IoT', 'Arduino', 'C++', 'Sensors'],
      showDemo: false,
      showGithub: false
    },
    {
      title: 'Simon Says Game',
      description: 'Interactive memory game built with modern web technologies',
      image: '/lovable-uploads/64358476-36b2-483a-a11e-3c72e4bc85ae.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://simon-says-game-smoky.vercel.app/',
      githubLink: 'https://github.com/adityakaustavs/Simons-Says-Game',
      showDemo: true,
      showGithub: true
    },
    {
      title: 'Green Stack',
      description: 'Full-stack e-commerce platform for fresh produce with modern UI/UX',
      image: '/lovable-uploads/96c99483-f396-4cb1-9237-1bef27be0f26.png',
      tech: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
      demoLink: 'https://greencart-deploy-vkqc.vercel.app/',
      githubLink: 'https://github.com/adityakaustavs/greencart-deploy',
      showDemo: true,
      showGithub: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.showDemo && (
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  )}
                  {project.showGithub && (
                    <Button 
                      className="bg-gray-800 hover:bg-gray-900 text-white flex items-center gap-2"
                      style={{ backgroundColor: '#333', color: '#f0f6ff' }}
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
