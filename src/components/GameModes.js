import React from 'react';
import { Sword, Trophy } from 'lucide-react';

const GameModes = () => {
  const modes = [
    {
      title: "Tower Conquest",
      icon: <Sword className="w-8 h-8" />,
      description: "Strategically attack and conquer enemy towers",
      features: [
        "Challenge other players' towers",
        "Deploy strategic combinations of units",
        "Capture enemy resources",
        "Earn rewards for successful conquests"
      ],
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "Arena Battles",
      icon: <Trophy className="w-8 h-8" />,
      description: "Compete in high-stakes tournament battles",
      features: [
        "Weekly PvP tournaments",
        "Bracket-style elimination rounds",
        "Special tournament rewards",
        "Global ranking system"
      ],
      color: "from-red-500 to-orange-600"
    }
  ];

  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 py-32 bg-[#96DED1]" style={{fontFamily: "VeniteAdoremus, sans-serif"}}>
      <h2 className="text-5xl text-center font-bold text-neutral-800">Game Modes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modes.map((mode, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-900 rounded-xl border border-gray-800 group hover:border-gray-600 transition-all duration-300"
          >
            {/* Gradient background effect */}
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${mode.color}`} />
            
            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`bg-gradient-to-br ${mode.color} p-3 rounded-lg`}>
                  {mode.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{mode.title}</h3>
                  <p className="text-gray-400">{mode.description}</p>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-3">
                {mode.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-gray-300 gap-2"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${mode.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameModes;