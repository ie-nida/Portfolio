import React, { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTurnEffectProps {
  children: ReactNode;
}

export const PageTurnEffect: React.FC<PageTurnEffectProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden">
      <div 
        className={`transition-transform duration-600 ${
          isAnimating ? 'page-turn-animation' : ''
        }`}
      >
        {children}
      </div>
      
      <style>{`
        @keyframes pageTurn {
          0% {
            transform: perspective(1200px) rotateY(0);
            transform-origin: left;
          }
          100% {
            transform: perspective(1200px) rotateY(-15deg);
            transform-origin: left;
          }
        }
        
        .page-turn-animation {
          animation: pageTurn 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};