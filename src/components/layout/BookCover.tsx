import React from 'react';
import { BookOpen } from 'lucide-react';

interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ onOpen }) => {
  return (
    <div 
      className="relative w-full aspect-[2/3] max-w-2xl mx-auto rounded-lg overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105"
      onClick={onOpen}
    >
      <div className="absolute inset-0 bg-[#1A2238] shadow-2xl rounded-r-lg rounded-b-lg">
        <div className="absolute inset-0 border-8 border-[#F7B538] m-6 rounded-sm">
          <div className="h-full flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif text-center mb-6">Portfolio</h1>
            <p className="text-xl md:text-2xl text-center font-light mb-12">Nida Shahzad</p>
            <BookOpen size={64} className="text-[#F7B538] animate-pulse mb-8" />
            <p className="text-sm uppercase tracking-widest">Click to open</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-16 h-full bg-[#0F1627] shadow-inner"></div>
    </div>
  );
};