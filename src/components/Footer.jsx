import React from 'react';
import { FiLinkedin, FiGithub, FiTwitter,FiMail,FiInstagram } from 'react-icons/fi';
import socialLinks from '../data/socialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-400 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <p className="text-lg font-semibold text-gray-900">Connect with me</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.icon}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-gray-900"
              >
                {link.icon === 'linkedin' && <FiLinkedin className="text-2xl" />}
                {link.icon === 'github' && <FiGithub className="text-2xl" />}
                {link.icon === 'instagram' && <FiInstagram className="text-2xl" />}
                
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
