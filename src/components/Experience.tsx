
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Company Owner and Tutor',
      company: 'Tech with Mano',
      period: '07/2023 - Present',
      type: 'Founder',
      description: 'Tech with Mano offers IGCSE ICT learning and builds real-world tech projects like ManoMedAI.',
      achievements: [
        'Increased student engagement by 40%',
        'Grew YouTube channel by 300%',
        'Built comprehensive ICT curriculum',
        'Developed AI-powered educational tools'
      ],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Photographer and Tech Scout',
      company: 'Sudan Scouts',
      period: '07/2020 - 10/2024',
      type: 'Volunteer',
      description: 'Tech Scout and Photographer Scout with the Sudanese Scout in Kuwait, focusing on identifying new technologies and capturing key moments.',
      achievements: [
        'Led environmental cleanup initiatives',
        'Organized community service projects',
        'Mentored younger scouts in leadership',
        'Managed expedition logistics and safety'
      ],
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'Clevered.ma',
      period: '05/2021 - 10/2022',
      type: 'Internship',
      description: 'Working on AI projects, developing algorithms, and supporting research by analyzing data and creating models to solve real-world problems.',
      achievements: [
        'Developed machine learning models',
        'Analyzed complex datasets',
        'Contributed to AI research projects',
        'Gained expertise in neural networks'
      ],
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'Computer Programmer Intern',
      company: 'Zexagon',
      period: '06/2020 - 10/2022',
      type: 'Internship',
      description: 'Developed and implemented various coding projects that demonstrate strong problem solving skills and technical knowledge.',
      achievements: [
        'Completed 4 major coding projects',
        'Enhanced problem-solving skills',
        'Learned Python and game development',
        'Collaborated with development teams'
      ],
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  const volunteering = [
    {
      title: 'Scout Member',
      organization: 'Sudan Scouts and Guides in Kuwait',
      period: '2020 - 2024',
      activities: [
        'Organized and led environmental cleanups',
        'Managed logistics for scouting expeditions',
        'Assisted elderly residents with daily tasks',
        'Supported community events as photographer',
        'Mentored younger scouts in leadership',
        'Led service projects like food drives'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-neural-mesh">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Experience & Impact</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building innovative solutions while giving back to the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Professional Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Professional Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-neon-purple to-plasma-pink"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.company + exp.period}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'
                } lg:w-1/2 ml-12`}
              >
                {/* Timeline dot */}
                <div className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${exp.gradient} ${
                  index % 2 === 0 ? 'lg:-left-3' : 'lg:-right-3'
                } -left-9 top-8 animate-neural-pulse border-4 border-background`}></div>
                
                <Card className="glass-morph hover-lift">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <Badge 
                        variant="outline" 
                        className={`px-3 py-1 ${
                          exp.type === 'Founder' ? 'border-purple-400 text-purple-400' :
                          exp.type === 'Volunteer' ? 'border-green-400 text-green-400' :
                          'border-cyan-400 text-cyan-400'
                        }`}
                      >
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-2">{exp.title}</h4>
                    <h5 className="text-xl text-cyan-400 mb-4">{exp.company}</h5>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h6 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements</h6>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering Section */}
        <div>
          <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Community Involvement</h3>
          <Card className="glass-morph hover-lift max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {volunteering[0].title}
                </h4>
                <h5 className="text-xl text-cyan-400 mb-2">
                  {volunteering[0].organization}
                </h5>
                <Badge variant="outline" className="border-green-400 text-green-400">
                  {volunteering[0].period}
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {volunteering[0].activities.map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full mt-1 flex-shrink-0 animate-neural-pulse"></div>
                    <span className="text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
