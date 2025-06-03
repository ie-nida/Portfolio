import React from 'react';
import { personalInfo } from '../data/personal';
import { Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';



const ContactPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-serif text-[#1A2238] mb-6 relative">
        <span className="relative inline-block">
          Contact
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F7B538]"></span>
        </span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out using any of the methods below.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-[#F0EAE2] p-3 rounded-full mr-4">
                <Mail size={20} className="text-[#1A2238]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1A2238] mb-1">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-gray-600 hover:text-[#F7B538] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F0EAE2] p-3 rounded-full mr-4">
                <Phone size={20} className="text-[#1A2238]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1A2238] mb-1">Phone</h3>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-gray-600 hover:text-[#F7B538] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F0EAE2] p-3 rounded-full mr-4">
                <MapPin size={20} className="text-[#1A2238]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#1A2238] mb-1">Location</h3>
                <p className="text-gray-600">{personalInfo.location}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#1A2238] mb-2">Connect with me</h3>
            
            <div className="flex space-x-4">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A2238] text-white p-3 rounded-full hover:bg-[#F7B538] hover:text-[#1A2238] transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A2238] text-white p-3 rounded-full hover:bg-[#F7B538] hover:text-[#1A2238] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="/CV.docx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A2238] text-white p-3 rounded-full hover:bg-[#F7B538] hover:text-[#1A2238] transition-colors"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-serif mb-6 text-[#1A2238] border-b border-gray-200 pb-2">Send a Message</h3>
          
          <form action="https://formsubmit.co/nida.nidashahzad@gmail.com" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7B538] focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7B538] focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7B538] focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-[#1A2238] text-white rounded-md hover:bg-[#2D3A5A] transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Prefer to view my resume?</p>
            <a 
              href="/CV.docx" 
              download
              className="inline-block px-6 py-3 bg-[#1A2238] text-white rounded-md hover:bg-[#2D3A5A] transition-colors text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;