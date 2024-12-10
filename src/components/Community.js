import React from 'react';
import { MessageCircle, Share2, PlaySquare, Globe } from 'lucide-react';

const CommunitySection = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Join our active Discord community",
      color: "hover:text-indigo-500",
      members: "50K+ Members"
    },
    {
      name: "Twitter",
      icon: <Share2 className="w-6 h-6" />,
      description: "Follow us for latest updates",
      color: "hover:text-blue-500",
      members: "25K+ Followers"
    },
    {
      name: "YouTube",
      icon: <PlaySquare className="w-6 h-6" />,
      description: "Watch gameplay and tutorials",
      color: "hover:text-red-500",
      members: "30K+ Subscribers"
    },
  ];

  return (
    <div className="py-16 px-8 md:px-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the Community</h2>
        <p className="text-gray-600">Connect with players and stay updated with the latest news</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialLinks.map((platform, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300 cursor-pointer bg-white"
          >
            <div className={`flex justify-center mb-4 ${platform.color}`}>
              {platform.icon}
            </div>
            
            <h3 className="font-semibold text-gray-800 mb-2">
              {platform.name}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              {platform.description}
            </p>
            
            <p className="text-green-700 text-sm font-medium">
              {platform.members}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;