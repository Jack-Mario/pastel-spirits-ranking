
import React from 'react';
import { Wine, Beer } from 'lucide-react';

export type FilterType = 'alla' | 'vin' | 'öl' | 'sprit';

interface FilterButtonsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeFilter, onFilterChange }) => {
  const filters: { key: FilterType; label: string; icon?: React.ReactNode }[] = [
    { key: 'alla', label: 'Alla' },
    { key: 'vin', label: 'Vin', icon: <Wine className="w-4 h-4" /> },
    { key: 'öl', label: 'Öl', icon: <Beer className="w-4 h-4" /> },
    { key: 'sprit', label: 'Sprit' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`
            px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium
            ${activeFilter === filter.key
              ? 'bg-sage-500 text-white shadow-lg scale-105'
              : 'glass-card hover:bg-sage-100 text-sage-700 hover:scale-102 hover:shadow-md'
            }
          `}
        >
          {filter.icon}
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
