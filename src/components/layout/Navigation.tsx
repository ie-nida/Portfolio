import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FolderKanban, Award, User } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const navItems = [
    { label: 'Home', icon: <Home size={20} />, to: '/' },
    { label: 'Projects', icon: <FolderKanban size={20} />, to: '/projects' },
    { label: 'Achievements', icon: <Award size={20} />, to: '/achievements' },
    { label: 'Contact', icon: <User size={20} />, to: '/contact' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-8 border-b border-[#F7B538] pb-4">
        <h2 className="text-xl font-serif">Nida Shahzad</h2>
        <p className="text-sm text-gray-300">Portfolio</p>
      </div>
      
      <nav className="flex flex-col space-y-6">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.to}
            className={`flex items-center space-x-3 p-2 rounded transition-colors ${
              currentPage === index 
                ? 'bg-[#F7B538] text-[#1A2238]' 
                : 'hover:bg-[#2D3A5A]'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};