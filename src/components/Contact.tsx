
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_v09x4b7', // Service ID
        'template_xogv76q', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '697nTzC-EBRuXvSho' // Public Key
      );
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'adityakaustav829@gmail.com',
      link: 'mailto:adityakaustav829@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 95915 46172',
      link: 'tel:+919591546172'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/adityakaustavs',
      link: 'https://linkedin.com/in/adityakaustavs'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Mysuru, Karnataka',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
        <h3 className="text-2xl font-semibold text-center mb-12 text-white">Let's Connect!</h3>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and innovation. Feel free to reach out!
            </p>
            <p className="text-gray-300 mt-4">
              Whether you're looking for a developer to join your team, need help with a project, or want to explore potential collaborations, I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h4 className="text-white font-bold mb-2">{info.title}</h4>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 font-medium">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2 font-medium">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Subject *</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
