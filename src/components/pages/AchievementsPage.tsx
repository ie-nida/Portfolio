import React, { useState } from 'react';
import { AchievementCard } from '../ui/AchievementCard';
import { Modal } from '../ui/Modal';
import { achievements } from '../data/achievements';
import { Sparkles } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  const handleClose = () => setSelectedAchievement(null);

  const achievement = achievements.find(a => a.id === selectedAchievement);

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-serif text-[#1A2238] mb-6 relative">
        <span className="relative inline-block">
          Achievements
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F7B538]"></span>
        </span>
      </h1>
      
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 p-6 bg-[#1A2238] text-white rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#F7B538] opacity-20 rounded-full -mr-20 -mt-20"></div>
        
        <div className="md:w-1/4 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#F7B538] flex items-center justify-center">
              <Sparkles size={48} className="text-[#1A2238]" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1A2238] font-bold">
              {achievements.length}
            </div>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <h2 className="text-2xl font-serif mb-2">Recognition & Milestones</h2>
          <p>
            A collection of awards, certifications, and key achievements throughout my academic and professional journey. 
            Each achievement represents dedication, hard work, and a commitment to excellence.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        {achievements.map((achievement) => (
          <AchievementCard 
            key={achievement.id} 
            achievement={achievement}
            onClick={() => setSelectedAchievement(achievement.id)}
          />
        ))}
      </div>

      <Modal isOpen={!!selectedAchievement} onClose={handleClose}>
        {achievement && (
          <div>
            <h2 className="text-2xl font-serif text-[#1A2238] mb-4">{achievement.title}</h2>
            <div className="relative aspect-[3/2] w-full mb-4">
              <img 
                src={achievement.certificate} 
                alt={`${achievement.title} Certificate`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-600">{achievement.description}</p>
            <p className="text-sm text-gray-500 mt-2">Awarded on {achievement.date}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AchievementsPage;