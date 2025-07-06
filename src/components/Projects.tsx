
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
      subtitle: 'Intelligent Medical Symptom Analysis',
      description: 'An AI-powered medical tool that analyzes symptoms and medical history to provide health insights with 85% accuracy. Designed to improve access to preliminary healthcare in underserved regions.',
      longDescription: 'ManoMed AI leverages advanced machine learning algorithms to interpret user-reported symptoms and medical histories. The system provides condition suggestions, possible treatments, and guidance on professional consultation needs.',
      tech: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
      features: [
        '85% diagnostic accuracy',
        'Interactive symptom assessment',
        'Multi-language support',
        'Treatment recommendations',
        'Professional referral system'
      ],
      status: 'Active Development',
      period: '11/2024 - 06/2025',
      link: 'https://manomedai.com/contact',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Tech with Mano Platform',
      subtitle: 'Educational Technology Initiative',
      description: 'A comprehensive IGCSE ICT learning platform that increased student engagement by 40% through innovative social media tutorials and interactive content.',
      longDescription: 'Built a scalable online education platform delivering practical ICT content through social media, prioritizing hands-on learning strategies to enhance student engagement and outcomes.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      features: [
        'Interactive tutorials',
        'Progress tracking',
        'Social media integration',
        'Mobile-responsive design',
        'Community features'
      ],
      status: 'Live',
      period: '07/2023 - Present',
      link: 'https://linktr.ee/techwithmano',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'EduZone Learning System',
      subtitle: 'Advanced Learning Management',
      description: 'A modern LMS designed for enhanced student-teacher interaction with real-time collaboration tools and AI-powered content recommendations.',
      longDescription: 'Comprehensive learning management system featuring real-time collaboration, AI-powered content curation, and advanced analytics for educational institutions.',
      tech: ['React', 'Express.js', 'PostgreSQL', 'Socket.io', 'AWS'],
      features: [
        'Real-time collaboration',
        'AI content recommendations',
        'Advanced analytics',
        'Multi-media support',
        'Mobile application'
      ],
      status: 'Completed',
      period: '06/2023 - 12/2023',
      link: '#',
      gradient: 'from-cyan-400 to-blue-600'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that bridge technology with real-world impact
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
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
              <CardHeader>
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                <CardTitle className="text-xl text-cyan-400">{project.title}</CardTitle>
                <p className="text-sm text-gray-400">{project.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-4">
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
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Project View */}
        <Card className="glass-morph">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className={`w-full h-1 bg-gradient-to-r ${projects[activeProject].gradient} rounded-full mb-6`}></div>
                <h3 className="text-4xl font-bold text-gradient mb-4">
                  {projects[activeProject].title}
                </h3>
                <p className="text-xl text-gray-400 mb-6">
                  {projects[activeProject].subtitle}
                </p>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {projects[activeProject].longDescription}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="cyber-border text-cyan-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {projects[activeProject].features.map((feature) => (
                        <li key={feature} className="text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Project Stats */}
                <Card className="glass-morph">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status:</span>
                        <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">
                          {projects[activeProject].status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-white">{projects[activeProject].period}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-cyber-blue to-neon-purple hover:from-neon-purple hover:to-plasma-pink text-white"
                    onClick={() => window.open(projects[activeProject].link, '_blank')}
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full cyber-border text-cyan-400 hover:bg-cyan-400/10"
                    onClick={() => window.open('https://github.com/techwithmano', '_blank')}
                  >
                    View on GitHub
                  </Button>
                </div>

                {/* Animated Visual Element */}
                <div className="relative h-40 rounded-xl overflow-hidden glass-morph">
                  <div className="absolute inset-0 neural-grid opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-cyan-400 animate-neural-pulse">
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
