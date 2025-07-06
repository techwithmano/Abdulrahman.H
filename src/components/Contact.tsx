
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:officialtechwithmano@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdulrahman-haramain-19539b332', color: 'from-blue-500 to-blue-600' },
    { name: 'GitHub', url: 'https://github.com/techwithmano', color: 'from-gray-600 to-gray-700' },
    { name: 'YouTube', url: 'https://youtube.com/@tech_with_mano', color: 'from-red-500 to-red-600' },
    { name: 'Instagram', url: 'https://www.instagram.com/tech_with_mano', color: 'from-pink-500 to-purple-600' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@tech_with_mano', color: 'from-black to-gray-800' },
    { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029Vb5tsejJUM2cSrHsRw0c', color: 'from-green-500 to-green-600' }
  ];

  const quickActions = [
    { title: 'Collaborate on AI Projects', description: 'Let\'s build the future together', action: 'collaboration' },
    { title: 'Educational Partnerships', description: 'Join Tech with Mano community', action: 'education' },
    { title: 'Speaking Engagements', description: 'Tech talks and workshops', action: 'speaking' },
    { title: 'Open Source Contributions', description: 'Contribute to my projects', action: 'opensource' }
  ];

  return (
    <section id="contact-section" className="section-padding bg-neural-mesh">
      <div className="container mx-auto text-center">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-morph hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="cyber-border bg-black/50 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="cyber-border bg-black/50 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="cyber-border bg-black/50 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="cyber-border bg-black/50 text-white placeholder:text-gray-400 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyber-blue to-neon-purple hover:from-neon-purple hover:to-plasma-pink text-white"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Actions */}
          <div className="space-y-8">
            {/* Quick Contact Info */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyber-blue to-neon-purple flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-400">officialtechwithmano@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-plasma-pink flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-400">+965 6556 0890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-plasma-pink to-neural-orange flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-gray-400">Kuwait City</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Find Me Online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      className={`cyber-border hover:bg-gradient-to-r hover:${link.color} hover:text-white transition-all duration-300`}
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      {link.name}
                    </Button>
                  ))}
                  <Button
                    key="Linktree"
                    variant="outline"
                    className="cyber-border hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://linktr.ee/techwithmano', '_blank')}
                  >
                    Linktree
                  </Button>

                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-morph hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Collaboration Opportunities</h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div 
                      key={action.title}
                      className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {action.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{action.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download CV Button */}
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-neural-orange to-plasma-pink hover:from-plasma-pink hover:to-cyber-blue text-white py-4"
              onClick={() => window.open('https://ugc.production.linktr.ee/06ed18ca-d9d6-4b7c-bd21-e9fd379a3c3c_Abdulrahman-Haramain-CV.pdf', '_blank')}
            >
              Download My CV
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
