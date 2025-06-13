
import React from 'react';

export type ListSize = 10 | 25 | 50 | 100;

interface ListSizeSelectorProps {
  activeSize: ListSize;
  onSizeChange: (size: ListSize) => void;
}

const ListSizeSelector: React.FC<ListSizeSelectorProps> = ({ activeSize, onSizeChange }) => {
  const sizes: ListSize[] = [10, 25, 50, 100];

  return (
    <div className="flex justify-center gap-2 mb-6">
      <span className="text-sage-600 text-sm font-medium self-center mr-2">
        Visa:
      </span>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeChange(size)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium
            ${activeSize === size
              ? 'bg-sage-500 text-white shadow-md'
              : 'glass-card text-sage-700 hover:bg-sage-100 hover:scale-105'
            }
          `}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default ListSizeSelector;
