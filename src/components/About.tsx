
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    {
      title: 'Enhanced ICT Learning',
      description: 'Increased student engagement by 40% through tailored ICT tutorials on social media platforms.',
      icon: '🎓'
    },
    {
      title: 'Created ManoMed AI',
      description: 'Developed AI tool predicting health conditions with 85% accuracy.',
      icon: '🤖'
    },
    {
      title: 'Expanded Online Presence',
      description: 'Grew Tech with Mano YouTube channel by 300% in follower count.',
      icon: '📈'
    },
    {
      title: 'Successful Coding Projects',
      description: 'Completed 4 coding projects enhancing problem-solving skills at Zexagon internship.',
      icon: '💻'
    }
  ];

  const languages = [
    { name: 'Arabic', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Proficient', proficiency: 90 }
  ];

  return (
    <section id="about" className="section-padding bg-neural-mesh">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <Card className="glass-morph hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">My Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Passionate developer and ICT tutor dedicated to creating technology solutions 
                  that address real-world challenges. Founded <span className="text-cyan-400 font-semibold">Tech with Mano</span>, 
                  an initiative focused on empowering communities through education and healthcare innovation.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  I believe in bridging gaps in tech literacy and healthcare accessibility through 
                  collaborative, community-driven projects. My goal is to partner with developers, 
                  educators, and health-tech professionals to design tools that inspire innovation 
                  and equitable access to technology.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Languages</h3>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{lang.name}</span>
                        <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">
                          {lang.level}
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyber-blue to-neon-purple h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-center text-gradient mb-8">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="glass-morph hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
