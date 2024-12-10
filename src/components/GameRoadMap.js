import React from 'react';

const GameRoadmap = () => {
  const phases = [
    {
      title: "Phase 1: Launch",
      subtitle: "Establishing Core Systems",
      features: [
        "Basic tower defense mechanics",
        "Initial unit types and upgrades",
        "Simple PvP matchmaking",
        "Basic token earning system"
      ],
      color: "border-blue-500 text-blue-500"
    },
    {
      title: "Phase 2: Expansion",
      subtitle: "Growing the Ecosystem",
      features: [
        "Advanced unit types",
        "Guild system implementation",
        "Tournament framework",
        "Marketplace launch"
      ],
      color: "border-purple-500 text-purple-500"
    },
    {
      title: "Phase 3: Evolution",
      subtitle: "Next-Level Gaming",
      features: [
        "Mobile app release",
        "Advanced battle mechanics",
        "Cross-platform play",
        "Enhanced reward systems"
      ],
      color: "border-orange-500 text-orange-500"
    }
  ];

  return (
    <div className="flex flex-col gap-8 py-16 bg-[#023020]" style={{fontFamily: "VeniteAdoremus, sans-serif"}}>
      <h2 className="text-5xl md:text-8xl font-bold text-gray-100 px-4 text-center">Roadmap</h2>
      
      <div className="overflow-x-auto px-8">
        <div className="flex gap-8 md:justify-center min-w-max md:min-w-0 pb-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`w-[calc(100vw-3rem)] md:w-80 rounded-xl border-2 ${phase.color} overflow-hidden relative group transition-all duration-300 p-8`}
            >
              <div>
                <div className="mb-6">
                  <h3 className="font-bold text-xl text-gray-100 mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-400">{phase.subtitle}</p>
                </div>
                
                <ul className="space-y-4">
                  {phase.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-gray-300 gap-3"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full border ${phase.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameRoadmap;