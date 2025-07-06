import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
    { title: 'Collaborate on AI Projects', description: 'Let\'s build the future together' },
    { title: 'Educational Partnerships', description: 'Join Tech with Mano community' },
    { title: 'Speaking Engagements', description: 'Tech talks and workshops' },
    { title: 'Open Source Contributions', description: 'Contribute to my projects' }
  ];

  return (
    <section id="contact-section" className="section-padding bg-neural-mesh">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Find Me Online - on top */}
        <Card className="glass-morph hover-lift mb-12">
          <CardContent className="p-6 md:p-8 text-left">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center lg:text-left">Find Me Online</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {socialLinks.map(link => (
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

        {/* Two Columns: Form + Info */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="flex-1 lg:h-full">
            <Card className="glass-morph hover-lift h-full">
              <CardHeader className="text-center lg:text-left">
                <CardTitle className="text-2xl text-cyan-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="cyber-border bg-black/50 text-white placeholder:text-gray-400"
                      required
                    />
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
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="cyber-border bg-black/50 text-white placeholder:text-gray-400"
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="cyber-border bg-black/50 text-white placeholder:text-gray-400 resize-none"
                    required
                  />
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
          </div>

          {/* Info & Quick Actions */}
          <div className="flex-1 lg:h-full space-y-8">
            <Card className="glass-morph hover-lift">
              <CardContent className="p-6 md:p-8 text-left">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center lg:text-left">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: '📧', title: 'Email', value: 'officialtechwithmano@gmail.com' },
                    { icon: '📱', title: 'Phone', value: '+965 6556 0890' },
                    { icon: '📍', title: 'Location', value: 'Kuwait City' }
                  ].map(({ icon, title, value }) => (
                    <div key={title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyber-blue to-neon-purple flex items-center justify-center">
                        {icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{title}</p>
                        <p className="text-gray-400">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-morph hover-lift">
              <CardContent className="p-6 md:p-8 text-left">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center lg:text-left">Collaboration Opportunities</h3>
                <div className="space-y-4">
                  {quickActions.map((action) => (
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
          </div>
        </div>

        {/* CV Download - Centered */}
        <div className="flex justify-center mt-12">
          <Button 
            size="lg"
            className="w-full max-w-md text-center bg-gradient-to-r from-neural-orange to-plasma-pink hover:from-plasma-pink hover:to-cyber-blue text-white py-4"
            onClick={() => window.open('https://ugc.production.linktr.ee/06ed18ca-d9d6-4b7c-bd21-e9fd379a3c3c_Abdulrahman-Haramain-CV.pdf', '_blank')}
          >
            Download My CV
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
