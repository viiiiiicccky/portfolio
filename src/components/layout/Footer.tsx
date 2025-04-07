import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            <Link 
              href="https://github.com/viiiiiicccky" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/vicky-chen-6b1237227/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 