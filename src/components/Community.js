import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

const CommunitySection = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: <FaDiscord className="w-6 h-6" />,
      link: "https://discord.gg/yourdiscord"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      link: "https://twitter.com/youraccount"
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="w-6 h-6" />,
      link: "https://youtube.com/@yourchannel"
    }
  ];

  return (
    <div className="py-16 px-8 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Join the Community
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {socialLinks.map((platform, index) => (
          <Link
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <div className="text-gray-600 hover:text-blue-500">
              {platform.icon}
            </div>
            
            <h3 className="font-medium text-gray-800">
              {platform.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;