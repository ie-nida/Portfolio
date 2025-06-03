import React, { useState } from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage: React.FC = () => {
  const [activeYear, setActiveYear] = useState<1 | 2 | 3 | null>(null);
  
  const filteredProjects = activeYear 
    ? projects.filter(project => project.year === activeYear)
    : projects;

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-serif text-[#1A2238] mb-6 relative">
        <span className="relative inline-block">
          Projects
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F7B538]"></span>
        </span>
      </h1>
      
      <p className="text-gray-700 mb-8 max-w-3xl">
        Explore my journey through various projects developed over the years. 
        Each project represents growth, learning, and the application of new skills and technologies.
      </p>
      
      <div className="flex gap-2 mb-8">
        <button 
          onClick={() => setActiveYear(null)}
          className={`px-4 py-2 rounded-md ${
            activeYear === null 
              ? 'bg-[#1A2238] text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition-colors`}
        >
          All Years
        </button>
        {[1, 2, 3].map((year) => (
          <button 
            key={year}
            onClick={() => setActiveYear(year as 1 | 2 | 3)}
            className={`px-4 py-2 rounded-md ${
              activeYear === year 
                ? 'bg-[#1A2238] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors`}
          >
            Year {year}
          </button>
        ))}
      </div>
      
      {activeYear !== null && (
        <div className="mb-8 p-4 bg-[#F0EAE2] rounded-lg">
          <h2 className="text-2xl font-serif text-[#1A2238] mb-2">Year {activeYear}</h2>
          <p className="text-gray-700">
            {activeYear === 1 && "My first year projects focused on building a strong foundation in web development fundamentals, digital visual designs, digital storytelling, Ideation and creative problem solving and expreience in UI/UX."}
            {activeYear === 2 && "During my second year, I delved deeper into advanced projects such as SmartPhone Apps, Indie Game Design using C# and created more complex applications forexample in building a website for a company (Creative Industry Challenge)."}
            {activeYear === 3 && "My final year represents my most advanced work, which were cybersecurity projects, machine learning, creative incubator, and tomorrows web."}
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;