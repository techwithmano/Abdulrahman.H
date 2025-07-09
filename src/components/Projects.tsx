
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'ManoMed AI',
      subtitle: 'AI-Powered Medical Diagnosis System',
      description: 'Intelligent medical symptom analysis tool that interprets symptoms and medical histories to generate actionable health insights with 85% accuracy.',
      longDescription: 'ManoMed AI leverages advanced machine learning algorithms to interpret user-reported symptoms and medical histories. The system provides condition suggestions, possible treatments, and guidance on professional consultation needs, improving access to preliminary healthcare in underserved regions.',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'Firebase', 'AI/ML'],
      features: [
        '85% diagnostic accuracy',
        'Interactive symptom assessment',
        'Multi-language support',
        'Treatment recommendations',
        'Professional referral system'
      ],
      status: 'Live',
      period: '11/2024 - Present',
      link: 'https://github.com/techwithmano/ManoMed-AI',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Hudhud',
      subtitle: 'Cross-Platform 2D Game',
      description: 'Engaging cross-platform 2D game featuring intuitive on-screen controls and smooth gameplay mechanics.',
      longDescription: 'Hudhud is a beautifully crafted 2D game that works seamlessly across different platforms. Built with focus on user experience, it features responsive controls, engaging gameplay, and optimized performance for both mobile and desktop platforms.',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Development', 'Cross-Platform'],
      features: [
        'Cross-platform compatibility',
        'Intuitive touch controls',
        'Smooth animations',
        'Responsive design',
        'Optimized performance'
      ],
      status: 'Live',
      period: '2024 - Present',
      link: 'https://github.com/techwithmano/hudhud',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'EduZone',
      subtitle: 'Full-Stack Educational Platform',
      description: 'Comprehensive educational platform with separate teacher and student dashboards, featuring real-time collaboration and progress tracking.',
      longDescription: 'EduZone is a modern learning management system designed for enhanced student-teacher interaction. It features dual dashboards, real-time collaboration tools, assignment management, and comprehensive analytics for educational institutions.',
      tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Socket.io', 'TypeScript'],
      features: [
        'Dual dashboard system',
        'Real-time collaboration',
        'Assignment management',
        'Progress analytics',
        'Video conferencing integration'
      ],
      status: 'Live',
      period: '2023 - Present',
      link: 'https://github.com/techwithmano/Eduzone',
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'SudanScout',
      subtitle: 'Scout Management & Photography Hub',
      description: 'Scout membership and dues tracking system that also serves as a photography showcase for Sudan Scout activities and events.',
      longDescription: 'SudanScout combines practical membership management with visual storytelling. It tracks scout activities, manages dues, and showcases the community impact through a curated photography gallery of scout events and initiatives.',
      tech: ['React', 'Firebase', 'JavaScript', 'CSS3', 'Photography Integration'],
      features: [
        'Membership tracking',
        'Dues management',
        'Photography gallery',
        'Event documentation',
        'Community showcase'
      ],
      status: 'Live',
      period: '2020 - Present',
      link: 'https://github.com/techwithmano/SUDANSCOUT',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gradient">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Innovative solutions that bridge technology with real-world impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`glass-morph hover-lift cursor-pointer transition-all duration-300 ${
                activeProject === index 
                  ? 'ring-2 ring-cyan-400 transform scale-105' 
                  : 'hover:ring-1 hover:ring-cyan-400/50'
              }`}
              onClick={() => setActiveProject(index)}
            >
              <CardHeader className="pb-3">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-3`}></div>
                <CardTitle className="text-base lg:text-xl text-cyan-400 leading-tight">{project.title}</CardTitle>
                <p className="text-xs lg:text-sm text-gray-400 leading-tight">{project.subtitle}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      project.status === 'Live' ? 'border-green-400 text-green-400' :
                      project.status === 'Active Development' ? 'border-yellow-400 text-yellow-400' :
                      'border-blue-400 text-blue-400'
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-cyan-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Project View */}
        <Card className="glass-morph">
          <CardContent className="p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className={`w-full h-1 bg-gradient-to-r ${projects[activeProject].gradient} rounded-full mb-4 lg:mb-6`}></div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-3 lg:mb-4">
                  {projects[activeProject].title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-400 mb-4 lg:mb-6">
                  {projects[activeProject].subtitle}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 lg:mb-8">
                  {projects[activeProject].longDescription}
                </p>
                
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 lg:mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="cyber-border text-cyan-400 text-xs lg:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 lg:mb-3">Key Features</h4>
                    <ul className="space-y-1 lg:space-y-2">
                      {projects[activeProject].features.map((feature) => (
                        <li key={feature} className="text-sm sm:text-base text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-cyan-400 rounded-full mr-2 lg:mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                {/* Project Stats */}
                <Card className="glass-morph">
                  <CardContent className="p-4 lg:p-6">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3 lg:mb-4">Project Details</h4>
                    <div className="space-y-2 lg:space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm lg:text-base text-gray-400">Status:</span>
                        <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 text-xs lg:text-sm">
                          {projects[activeProject].status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm lg:text-base text-gray-400">Timeline:</span>
                        <span className="text-sm lg:text-base text-white">{projects[activeProject].period}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Buttons */}
                <div className="space-y-3 lg:space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-cyber-blue to-neon-purple hover:from-neon-purple hover:to-plasma-pink text-white text-sm lg:text-base"
                    onClick={() => window.open(projects[activeProject].link, '_blank')}
                  >
                    View Project
                    <ArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full cyber-border text-cyan-400 hover:bg-cyan-400/10 text-sm lg:text-base"
                    onClick={() => window.open('https://github.com/techwithmano', '_blank')}
                  >
                    View on GitHub
                  </Button>
                </div>

                {/* Animated Visual Element */}
                <div className="relative h-32 lg:h-40 rounded-xl overflow-hidden glass-morph">
                  <div className="absolute inset-0 neural-grid opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 lg:border-4 border-cyan-400 animate-neural-pulse">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyber-blue to-neon-purple opacity-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
