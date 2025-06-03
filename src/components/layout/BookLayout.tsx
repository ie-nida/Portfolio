import React, { useState, ReactNode } from 'react';
import { Navigation } from './Navigation';
import { BookCover } from './BookCover';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

interface BookLayoutProps {
  children: ReactNode;
}

export const BookLayout: React.FC<BookLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const routes = ['/', '/projects', '/achievements', '/contact'];
  
  return (
    <div className="min-h-screen bg-[#F0EAE2] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        {!isOpen ? (
          <BookCover onOpen={() => setIsOpen(true)} />
        ) : (
          <div className="relative book-open">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Spine/Navigation */}
                <div className="w-full md:w-1/6 bg-[#1A2238] text-white p-4">
                  <Navigation currentPage={routes.indexOf(location.pathname)} />
                </div>
                
                {/* Content Area */}
                <div className="w-full md:w-5/6 min-h-[70vh]">
                  <div className="p-8 bg-[#F8F1E9]">
                    {children}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}