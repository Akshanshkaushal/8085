import React from 'react';
import Emulator from './components/Emulator';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">8085 Microprocessor Emulator</h1>
      <Emulator />
    </div>
  );
};

export default HomePage;