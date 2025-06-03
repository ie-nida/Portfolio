import React from 'react';
import { CVButton } from '../ui/CVButton';
import { personalInfo } from '../data/personal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const getSkillLogo = (skillName: string) => {
  switch (skillName.toLowerCase()) {
    case 'javascript':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
    case 'react':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
    case 'node.js':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
    case 'typescript':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
    case 'html/css':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
    case 'mongodb':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
    case 'graphql':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg";
    case 'ui/ux design':
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
    default:
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
  }
};

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-[65vh]">
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#F7B538] opacity-10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
      
      <h1 className="text-4xl md:text-5xl font-serif text-[#1A2238] mb-6 relative">
        <span className="relative inline-block">
          Welcome
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F7B538]"></span>
        </span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif mb-4 text-[#1A2238] tracking-wide">{personalInfo.name}</h2>
          <div className="relative group">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Nida Shahzad"
              className="w-48 h-48 object-cover rounded-full border-4 border-[#F7B538] shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 w-48 h-48 rounded-full bg-[#F7B538] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-xl text-gray-600 mb-6 font-light tracking-wide">{personalInfo.title}</h3>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <CVButton />
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#1A2238] text-[#1A2238] rounded-md hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
            >
              Contact Me
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 backdrop-blur-sm bg-opacity-90 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-serif mb-6 text-[#1A2238] border-b border-gray-200 pb-2">Skills</h3>
          
          <div className="space-y-6">
            {personalInfo.skills.slice(0, 5).map((skill, index) => (
              <div key={index} className="transform hover:scale-102 transition-transform duration-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={getSkillLogo(skill.name)}
                      alt={skill.name}
                      className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
                    />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-[#F7B538] h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="h-full bg-gradient-to-r from-[#F7B538] to-[#FFD700] animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-[#1A2238] text-white p-8 rounded-lg shadow-lg relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7B538] opacity-20 rounded-full -mr-10 -mt-10 blur-xl"></div>
        
        <h3 className="text-xl font-serif mb-4 relative z-10">Looking for my complete profile?</h3>
        <p className="mb-6 text-gray-300 relative z-10">View my projects, achievements, and more by exploring the portfolio.</p>
        
        <div className="flex gap-4 relative z-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-[#F7B538] text-[#1A2238] rounded-md hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg group"
          >
            View Projects
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link 
            to="/achievements" 
            className="inline-flex items-center px-6 py-3 bg-white text-[#1A2238] rounded-md hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg group"
          >
            See Achievements
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;