import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <div className="py-4 px-8 text-center text-sm text-gray-600">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1A2238]">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1A2238]">
          <Linkedin size={20} />
        </a>
        <a href="mailto:nida.nidashahzad@gmail.com" className="text-gray-700 hover:text-[#1A2238]">
          <Mail size={20} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Nida Shahzad. All rights reserved.</p>
    </div>
  );
};