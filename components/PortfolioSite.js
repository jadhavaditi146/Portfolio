import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Code2, Database, BarChart3 } from 'lucide-react';
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
      await axios.post(`${API}/contact`, {
        name: formData.name,
        email: formData.email,
        project_type: formData.projectType,
        message: formData.message
      });
      
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

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
                Passionate web developer and data analyst with experience creating innovative digital solutions. 
                Skilled in responsive web applications, data-driven projects, and designing accessible interfaces.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Code2 className="mr-2 text-blue-600" size={24} />
                    Web Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
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
                    {['Python', 'SQL', 'R', 'Tableau'].map((skill) => (
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

      {/* Internships Section */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on learning experiences where I applied my skills and gained real-world insights.
            </p>
          </div>

          <div className="space-y-12">
            {/* Torchit Internship */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Frontend Web Developer Intern</h3>
                  <p className="text-blue-600 font-semibold text-lg">Torchit | NGO / Social Services</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 font-medium">Jan 2025 - May 2025</div>
                  <div className="text-gray-500">Remote</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Improved the digital presence of Torchit by enhancing accessibility for visually impaired users. 
                Updated and maintained the official website, optimized UI/UX, and ensured WCAG compliance. 
                Collaborated with teams to showcase assistive products (Saarthi, Jyoti AI Pro) through interactive product pages.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Web Accessibility'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* KBTL Foundation Internship */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fadeInUp">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Management Intern</h3>
                  <p className="text-green-600 font-semibold text-lg">KBTL Foundation | NGO / Social Services</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-600 font-medium">Jul 2023 - Aug 2023</div>
                  <div className="text-gray-500">Pune, India</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Learned project planning, coordination, and leadership. 
                Contributed to project execution and team management, gaining valuable exposure to project lifecycle workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Project Planning', 'Team Coordination', 'Leadership'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my academic and internship projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Torchit Foundation Website */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Torchit Foundation Website</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Built a responsive foundation website with a small team to highlight products and donation workflows. 
                  Focused on accessibility and modern UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Frontend Development', 'UI Design', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/adityakumar68/Torchit-Foundation.git" target="_blank" className="text-blue-600 hover:underline text-sm">View Code</a>
              </div>
            </div>

            {/* Jyoti Website */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Jyoti Website</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Developed a website to showcase Jyoti AI Pro with interactive sections. 
                  Enhanced UI/UX design and front-end functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Web Development', 'UI Design', 'Frontend'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://jyoti-ai.com/" target="_blank" className="text-blue-600 hover:underline text-sm">View Code</a>
              </div>
            </div>

            {/* Doctor Appointment Website */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Doctor Appointment Website</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Designed and implemented a doctor appointment registration system with SQL database integration and user-friendly forms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Web Development', 'SQL Database', 'Frontend Design'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/jadhavaditi146/Frontend-Appointment-registeration-page.git" target="_blank" className="text-blue-600 hover:underline text-sm">View Code</a>
              </div>
            </div>

            {/* E-Commerce Website */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden animate-fadeInUp">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Website</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  A React-based e-commerce website with product pages and cart features. 
                  Focused on modern design and usability.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Frontend Development', 'UI Design'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://github.com/jadhavaditi146/E-commerce-Website-Frontend.git" target="_blank" className="text-blue-600 hover:underline text-sm">View Code</a>
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
                  <a href="https://github.com/jadhavaditi146" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/aditi-jadhav-61841028b" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
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
