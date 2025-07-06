
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: 'Technical Skills',
      gradient: 'from-cyan-400 to-blue-600',
      skills: [
        { name: 'Python', level: 90, category: 'Programming' },
        { name: 'JavaScript', level: 85, category: 'Programming' },
        { name: 'TypeScript', level: 80, category: 'Programming' },
        { name: 'React.js', level: 90, category: 'Frontend' },
        { name: 'Next.js', level: 85, category: 'Frontend' },
        { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
        { name: 'Artificial Intelligence', level: 85, category: 'AI/ML' },
        { name: 'TensorFlow', level: 75, category: 'AI/ML' },
        { name: 'Firebase', level: 80, category: 'Backend' },
        { name: 'Node.js', level: 75, category: 'Backend' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      gradient: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Communication', level: 95, category: 'Leadership' },
        { name: 'Team Leadership', level: 90, category: 'Leadership' },
        { name: 'Teaching', level: 95, category: 'Education' },
        { name: 'Problem Solving', level: 90, category: 'Analytical' },
        { name: 'Time Management', level: 85, category: 'Organizational' },
        { name: 'Remote Teamwork', level: 85, category: 'Collaboration' },
        { name: 'Research Skills', level: 80, category: 'Analytical' },
        { name: 'Digital Photography', level: 75, category: 'Creative' }
      ]
    },
    certifications: {
      title: 'Certifications & Training',
      gradient: 'from-green-400 to-blue-500',
      skills: [
        { name: 'CS50: Introduction to Computer Science', level: 100, category: 'Harvard' },
        { name: 'Google IT Support Professional', level: 100, category: 'Google' },
        { name: 'ISO-IEC 27001 Security Management', level: 100, category: 'ISO' },
        { name: 'Future with AI Analytics Test', level: 100, category: 'Clevered' },
        { name: 'Python & Pygame Development', level: 100, category: 'Zexagon' },
        { name: 'Amateur Radio License', level: 100, category: 'Kuwait Amateur Radio' }
      ]
    }
  };

  const getTechIcon = (skillName: string) => {
    const icons: { [key: string]: string } = {
      'Python': '🐍',
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'React.js': '⚛️',
      'Next.js': '▲',
      'Tailwind CSS': '🎨',
      'Artificial Intelligence': '🤖',
      'TensorFlow': '🧠',
      'Firebase': '🔥',
      'Node.js': '🟢',
      'Communication': '💬',
      'Team Leadership': '👥',
      'Teaching': '📚',
      'Problem Solving': '🧩',
      'Time Management': '⏰',
      'CS50: Introduction to Computer Science': '🎓',
      'Google IT Support Professional': '🔧'
    };
    return icons[skillName] || '⭐';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <Button
              key={key}
              variant={activeCategory === key ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.gradient} text-white`
                  : 'cyber-border text-cyan-400 hover:bg-cyan-400/10'
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Skills Display */}
        <Card className="glass-morph">
          <CardContent className="p-12">
            <h3 className={`text-3xl font-bold mb-8 text-center bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].gradient} bg-clip-text text-transparent`}>
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {getTechIcon(skill.name)}
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <Badge 
                          variant="outline" 
                          className="text-xs text-gray-400 border-gray-600"
                        >
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].gradient} h-3 rounded-full transition-all duration-1000 hover:shadow-lg`}
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Tech Stack Visualization */}
            {activeCategory === 'technical' && (
              <div className="mt-16 p-8 glass-morph rounded-xl">
                <h4 className="text-2xl font-bold text-center text-cyan-400 mb-8">
                  Interactive Tech Stack
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {skillCategories.technical.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group relative cursor-pointer"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skillCategories.technical.gradient} flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 animate-neural-pulse`}
                           style={{ animationDelay: `${index * 0.2}s` }}>
                        {getTechIcon(skill.name)}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
