
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Junior Software Engineer | AI Project Developer | IGCSE ICT Tutor';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const badges = [
    'AI Developer', 
    'ICT Tutor', 
    'Scout Leader', 
    'Community Builder', 
    'Tech Innovator'
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden neural-grid">
      {/* Animated background particles */}
      <div className="particle-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto section-padding text-center relative z-10">
        <div className="glass-morph p-6 sm:p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
          {/* Name with glitch effect - Fixed responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 glitch leading-tight break-words px-2 sm:px-0">
            <span className="text-gradient block text-center">ABDULRAHMAN</span>
            <span className="text-white block text-center">HARAMAIN</span>
          </h1>


          {/* Typewriter effect for title */}
          <div className="mb-8 h-12 sm:h-16 flex items-center justify-center px-4">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-cyan-400 font-mono text-center">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Animated badges */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-12">
            {badges.map((badge, index) => (
              <Badge
                key={badge}
                variant="outline"
                className="glass-morph border-cyan-400/50 text-cyan-400 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm hover-lift animate-neural-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {badge}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyber-blue to-neon-purple hover:from-neon-purple hover:to-plasma-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover-lift animate-cyber-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cyber-border text-cyan-400 hover:bg-cyan-400/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover-lift"
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect with Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-cyan-400 w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        </div>
      </div>

      {/* Matrix rain effect */}
      <div className="matrix-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          >
            {Array.from({ length: 20 }, () => 
              String.fromCharCode(Math.random() * 94 + 33)
            ).join('')}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
