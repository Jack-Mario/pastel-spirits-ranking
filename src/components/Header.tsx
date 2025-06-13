
import React from 'react';
import { Wine } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex justify-center items-center gap-4 mb-6">
        <Wine className="w-12 h-12 text-sage-600" />
        <h1 className="text-5xl font-bold gradient-text">
          Topp 10 Alkohol
        </h1>
        <Wine className="w-12 h-12 text-sage-600" />
      </div>
      <p className="text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed">
        Upptäck de finaste vinerna, ölerna och spriterna från hela världen. 
        Våra experter har valt ut det absolut bästa för din njutning.
      </p>
    </header>
  );
};

export default Header;
