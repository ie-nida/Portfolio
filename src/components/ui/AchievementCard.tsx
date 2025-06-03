import React from 'react';
import { Award, Calendar } from 'lucide-react';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: 'award' | 'certificate' | 'trophy' | 'medal';
  certificate: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  onClick: () => void;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, onClick }) => {
  const getIcon = () => {
    switch (achievement.icon) {
      case 'award':
        return <Award size={32} className="text-[#F7B538]" />;
      case 'certificate':
        return <Award size={10} className="text-[#F7B538]" />;
      case 'trophy':
        return <Award size={32} className="text-[#F7B538]" />;
      case 'medal':
        return <Award size={32} className="text-[#F7B538]" />;
      default:
        return <Award size={32} className="text-[#F7B538]" />;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border-l-4 border-[#F7B538] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          {getIcon()}
        </div>
        
        <div>
          <h3 className="text-xl font-serif text-[#1A2238] mb-2">{achievement.title}</h3>
          <p className="text-gray-600 mb-3">{achievement.description}</p>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={14} className="mr-1" />
            <span>{achievement.date}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-[#F7B538] h-1.5 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};