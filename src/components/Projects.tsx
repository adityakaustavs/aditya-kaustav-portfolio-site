
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Agriculture Rover',
      description: 'IoT-based autonomous navigation system for precision agriculture using Arduino and sensor integration.',
      image: '/lovable-uploads/90b06954-2838-4f5e-81c4-fdebfbf15a54.png',
      tech: ['Arduino', 'IoT', 'Sensors', 'Autonomous Navigation'],
      showDemo: false,
      showGithub: false
    },
    {
      title: 'Simon Says Game',
      description: 'Interactive memory game built with modern web technologies featuring smooth animations and responsive design.',
      image: '/lovable-uploads/64358476-36b2-483a-a11e-3c72e4bc85ae.png',
      tech: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
      demoLink: 'https://simon-says-game-smoky.vercel.app/',
      githubLink: 'https://github.com/adityakaustavs/Simons-Says-Game',
      showDemo: true,
      showGithub: true
    },
    {
      title: 'Green Stack',
      description: 'Full-stack e-commerce platform with modern UI/UX, secure payment integration, and real-time inventory management.',
      image: '/lovable-uploads/96c99483-f396-4cb1-9237-1bef27be0f26.png',
      tech: ['MERN Stack', 'MongoDB', 'React.js', 'Node.js'],
      demoLink: 'https://greencart-deploy-vkqc.vercel.app/',
      githubLink: 'https://github.com/adityakaustavs/greencart-deploy',
      showDemo: true,
      showGithub: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600/80 text-white px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.showDemo && (
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 text-sm px-4 py-2"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </Button>
                  )}
                  {project.showGithub && (
                    <Button 
                      className="text-white flex items-center gap-2 text-sm px-4 py-2 transition-colors duration-200"
                      style={{ backgroundColor: '#333', color: '#f0f6ff' }}
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={14} />
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
