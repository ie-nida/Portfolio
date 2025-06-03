import React from 'react';
import { FileText, Download } from 'lucide-react';

interface CVButtonProps {
  text?: string;
  downloadable?: boolean;
}

export const CVButton: React.FC<CVButtonProps> = ({ 
  text = "View CV",
  downloadable = false
}) => {
  return (
    <a
      href="/CV.docx"
      target="_blank"
      rel="noopener noreferrer"
      download={downloadable}
      className="inline-flex items-center px-6 py-3 bg-[#1A2238] text-white rounded-md hover:bg-[#2D3A5A] transition-colors group"
    >
      {downloadable ? (
        <Download 
          size={18} 
          className="mr-2 group-hover:animate-bounce" 
        />
      ) : (
        <FileText 
          size={18} 
          className="mr-2 group-hover:translate-x-1 transition-transform" 
        />
      )}
      {text}
    </a>
  );
};