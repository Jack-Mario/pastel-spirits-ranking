
import React from 'react';
import { AlcoholItem } from '../data/alcoholData';

interface AlcoholListProps {
  items: AlcoholItem[];
}

const AlcoholList: React.FC<AlcoholListProps> = ({ items }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vin':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'öl':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'sprit':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="glass-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage-400 to-mint-500 flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-sage-800 mb-1">{item.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <span className="text-sage-600 text-sm">
                    {item.origin} • {item.alcoholContent}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-2xl font-bold gradient-text">
                {item.rating}
              </div>
              <div className="text-sage-500 text-sm">/10</div>
            </div>
          </div>
          <p className="text-sage-700 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AlcoholList;
