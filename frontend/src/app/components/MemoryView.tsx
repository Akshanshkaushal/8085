"use client";
import React from 'react';

interface MemoryViewProps {
  memory: number[];
}

const MemoryView: React.FC<MemoryViewProps> = ({ memory }) => {
  return (
    <div className="memory-view p-4 border rounded-md bg-gray-800 text-white shadow-lg overflow-auto">
      <h2 className="text-lg font-bold mb-4">Memory View</h2>
      <div className="memory-grid grid grid-cols-8 gap-2">
        {memory.slice(0, 256).map((value, index) => (
          <div
            key={index}
            className="memory-cell p-2 text-center bg-gray-700 border border-gray-600 rounded-md"
          >
            <div className="text-xs text-gray-400">{index.toString(16).toUpperCase().padStart(4, '0')}</div>
            <div>{value.toString(16).toUpperCase().padStart(2, '0')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryView;
