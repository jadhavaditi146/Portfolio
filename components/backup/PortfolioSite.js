import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, MapPin, Github, Linkedin, Twitter, ExternalLink, Code2, Database, BarChart3, Zap, Users, TrendingUp } from 'lucide-react';
import axios from 'axios';

const PortfolioSite = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Get backend URL from environment variable
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const API = `${BACKEND_URL}/api`;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, {
        name: formData.name,
        email: formData.email,
        project_type: formData.projectType,
        message: formData.message
      });
      
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">AJ</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('journey')} className="text-gray-700 hover:text-blue-600 transition-colors">Journey</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Aditi Jadhav</h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-white/90">Web Developer & Data Analyst</h2>
            <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
              Crafting digital experiences with data-driven insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Passionate web developer and data analyst with 4+ years of experience creating innovative digital solutions. 
                I specialize in building responsive web applications and extracting meaningful insights from complex datasets.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Code2 className="mr-2 text-blue-600" size={24} />
                    Web Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'TypeScript'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <BarChart3 className="mr-2 text-green-600" size={24} />
                    Data Analysis
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'SQL', 'Tableau'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInRight flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">AJ</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-sm text-gray-600">📍 India, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of my career progression and the impact I've made across various organizations
            </p>
          </div>

          <div className="space-y-12">
            {/* Senior Web Developer */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Web Developer</h3>
                  <p className="text-blue-600 font-semibold text-lg">TechVision Solutions</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 font-medium">2022 - Present</div>
                  <div className="text-gray-500">India, Maharashtra</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Led development of 15+ client websites using React and Next.js. Implemented responsive designs and 
                optimized performance, resulting in 40% faster load times.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">

                                      <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Faster Load Times</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Team Members Led</div>
                </div>
              </div>
            </div>

            {/* Data Analyst */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Analyst</h3>
                  <p className="text-green-600 font-semibold text-lg">DataInsight Corp</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 font-medium">2021 - 2022</div>
                  <div className="text-gray-500">Remote</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Analyzed complex datasets to drive business decisions. Created interactive dashboards and automated 
                reporting systems that saved 20+ hours weekly.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'SQL', 'Tableau', 'Power BI', 'Pandas'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">80%</div>
                  <div className="text-sm text-gray-600">Process Automation</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">$500K</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
                  <div className="text-sm text-gray-600">Model Accuracy</div>
                </div>
              </div>
            </div>

            {/* Full Stack Developer */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Developer</h3>
                  <p className="text-purple-600 font-semibold text-lg">StartupHub Inc</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 font-medium">2020 - 2021</div>
                  <div className="text-gray-500">India, Maharashtra</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Developed and maintained web applications for early-stage startups. Worked across the full technology 
                stack from database design to user interface.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">5</div>
                  <div className="text-sm text-gray-600">MVP Applications</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Auth Implementation</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Query Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my best work in web development and data analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* EcoTracker Dashboard */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Database className="text-white" size={32} />
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">Data Visualization</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">EcoTracker Dashboard</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Interactive dashboard tracking environmental impact metrics for sustainable businesses. 
                  Features real-time data updates and predictive analytics.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'D3.js', 'Python', 'MongoDB'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  <div>
                    <div className="font-bold text-green-600">10K+</div>
                    <div className="text-xs text-gray-500">users</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">94%</div>
                    <div className="text-xs text-gray-500">accuracy</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600">2.1s</div>
                    <div className="text-xs text-gray-500">load time</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Live Demo
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Code
                  </button>
                </div>
              </div>
            </div>

            {/* ArtistHub Platform */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Code2 className="text-white" size={32} />
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">Web Development</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ArtistHub Platform</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Social platform for artists to showcase work and connect with collectors. 
                  Built with modern React architecture and seamless user experience.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  <div>
                    <div className="font-bold text-green-600">5K+</div>
                    <div className="text-xs text-gray-500">users</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">85%</div>
                    <div className="text-xs text-gray-500">engagement</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600">12%</div>
                    <div className="text-xs text-gray-500">conversion</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Live Demo
                                      </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Code
                  </button>
                </div>
              </div>
            </div>

            {/* RetailFlow Analytics */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="text-white" size={32} />
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-sm">Data Analysis</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">RetailFlow Analytics</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Machine learning system predicting customer behavior and inventory optimization for retail chains. 
                  Reduced stockouts by 30%.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'Scikit-learn', 'Tableau', 'Apache Spark'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  <div>
                    <div className="font-bold text-green-600">91%</div>
                    <div className="text-xs text-gray-500">accuracy</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">$2M+</div>
                    <div className="text-xs text-gray-500">savings</div>
                  </div>
                  <div>
                    <div className="font-bold text-purple-600">30%</div>
                    <div className="text-xs text-gray-500">improvement</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Live Demo
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">jadhavaditi146@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">India, Maharashtra</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInRight">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-lg text-center ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="text-gray-400 mb-4">
      Made by Aditi Jadhav
    </div>
    <div className="text-gray-400">
      © 2024 Aditi Jadhav. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
};

export default PortfolioSite;










