import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  year: 1 | 2 | 3;
  tags: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-[#1A2238] text-white px-3 py-1 rounded-bl-lg">
          Year {project.year}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-serif text-[#1A2238] mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-[#F0EAE2] text-[#1A2238] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between pt-2 border-t border-gray-200">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-[#1A2238] hover:text-[#F7B538]"
            >
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
          )}
          
          {project.repoLink && (
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-[#1A2238] hover:text-[#F7B538]"
            >
              <Github size={16} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};