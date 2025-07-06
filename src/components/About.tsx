
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

  const hobbies = [
    { name: 'Coding & Building Projects', icon: '💻' },
    { name: 'Photography (Scout Events)', icon: '📸' },
    { name: 'Cooking Delicious Meals', icon: '🍳' },
    { name: 'Playing Guitar', icon: '🎸' }
  ];

  return (
    <section id="about" className="section-padding bg-neural-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gradient">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            "Byte by byte, build your might" - Passionate about coding, teaching, and creating impactful solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Personal Photo Section */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden cyber-border hover-lift">
              <img 
                src="/lovable-uploads/84c61bd8-f0af-4df4-84a7-79c210e5c5fe.png" 
                alt="Abdulrahman Haramain - Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue via-neon-purple to-plasma-pink rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Bio & Languages */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="glass-morph hover-lift">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 mb-4 lg:mb-6">My Mission</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                  Passionate developer and ICT tutor dedicated to creating technology solutions 
                  that address real-world challenges. Founded <span className="text-cyan-400 font-semibold">Tech with Mano</span>, 
                  an initiative focused on empowering communities through education and healthcare innovation.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                  I believe in bridging gaps in tech literacy and healthcare accessibility through 
                  collaborative, community-driven projects. My goal is to partner with developers, 
                  educators, and health-tech professionals to design tools that inspire innovation 
                  and equitable access to technology.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  I enjoy blending my love for programming with other creative outlets like cooking, 
                  photography, and music, bringing creativity to both my personal and professional projects.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 mb-4 lg:mb-6">Languages</h3>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base text-white font-medium">{lang.name}</span>
                        <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 text-xs lg:text-sm">
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

            {/* Fun Facts & Hobbies */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-cyan-400 mb-4 lg:mb-6">Fun Facts & Hobbies</h3>
                <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                  {hobbies.map((hobby, index) => (
                    <div 
                      key={hobby.name}
                      className="flex items-center space-x-3 p-3 lg:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="text-xl lg:text-2xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        {hobby.icon}
                      </div>
                      <span className="text-xs sm:text-sm lg:text-base text-gray-300">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gradient mb-6 lg:mb-8">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="glass-morph hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="text-2xl lg:text-3xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-cyan-400 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Current Goals */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-4 sm:p-5 lg:p-6">
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-cyan-400 mb-3 lg:mb-4">
                  🚀 Current Goals
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm sm:text-base text-gray-300 flex items-start">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-cyan-400 rounded-full mr-2 lg:mr-3 mt-1.5 lg:mt-2 flex-shrink-0"></div>
                    Master full-stack development with AI-powered applications
                  </li>
                  <li className="text-sm sm:text-base text-gray-300 flex items-start">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-cyan-400 rounded-full mr-2 lg:mr-3 mt-1.5 lg:mt-2 flex-shrink-0"></div>
                    Expand educational content for tech learners worldwide
                  </li>
                  <li className="text-sm sm:text-base text-gray-300 flex items-start">
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-cyan-400 rounded-full mr-2 lg:mr-3 mt-1.5 lg:mt-2 flex-shrink-0"></div>
                    Grow the Tech with Mano community impact
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
