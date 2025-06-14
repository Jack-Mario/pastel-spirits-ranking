
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import FilterButtons, { FilterType } from '../components/FilterButtons';
import ListSizeSelector, { ListSize } from '../components/ListSizeSelector';
import AlcoholList from '../components/AlcoholList';
import { alcoholData } from '../data/alcoholData';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('alla');
  const [listSize, setListSize] = useState<ListSize>(10);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'alla') {
      return alcoholData.sort((a, b) => b.rating - a.rating).slice(0, listSize);
    }
    return alcoholData
      .filter(item => item.type === activeFilter)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, listSize);
  }, [activeFilter, listSize]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <FilterButtons 
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ListSizeSelector 
          activeSize={listSize}
          onSizeChange={setListSize}
        />

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-sage-800 mb-2">
            {activeFilter === 'alla' 
              ? `Topp ${listSize} - Alla Kategorier` 
              : `Topp ${listSize} - ${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}`
            }
          </h2>
          <p className="text-sage-600">
            {filteredItems.length} {filteredItems.length === 1 ? 'produkt' : 'produkter'} hittades
          </p>
        </div>

        <AlcoholList items={filteredItems} />

        <footer className="mt-16 text-center">
          <div className="glass-card rounded-xl p-6">
            <p className="text-sage-600 mb-2">
              Rankingen baseras på expertbedömningar och användarrecensioner
            </p>
            <p className="text-sm text-sage-500">
              Njut ansvarsfullt • Systembolaget för svenska produkter
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
