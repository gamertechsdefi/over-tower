// components/GameFeatures.js
'use client';

const featureData = [
  {
    title: "Strategic Tower Defense",
    items: [
      "Build and fortify your defensive positions",
      "Train diverse soldier units with unique abilities",
      "Research technological upgrades to strengthen your fortress",
      "Manage resources and deploy troops strategically"
    ]
  },
  {
    title: "Play-to-Earn Mechanics",
    items: [
      "Earn tokens through successful tower conquests",
      "Daily missions and objectives with token rewards",
      "Season-based leaderboards with prize pools",
      "Special events with enhanced earning opportunities"
    ]
  },
  {
    title: "PvP Combat System",
    items: [
      "Real-time battles against global opponents",
      "Strategic unit deployment and battlefield control",
      "Multiple attack patterns and defense formations",
      "Ranked matchmaking system"
    ]
  }
];

export default function GameFeatures() {
  return (
    <div className="flex flex-col gap-8 px-8 md:px-16 py-32 bg-green-100" style={{fontFamily: "VeniteAdoremus, sans-serif"}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureData.map((section, index) => (
          <div 
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-duration-300"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-4">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className="text-gray-200 flex items-start"
                >
                  <span className="text-blue-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}