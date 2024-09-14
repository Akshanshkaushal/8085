"use client";
import React from 'react';

interface DebuggerPanelProps {
  registers: { [key: string]: number };
}

const DebuggerPanel: React.FC<DebuggerPanelProps> = ({ registers }) => {
  return (
    <div className="debugger-panel p-4 border rounded-md bg-gray-800 text-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">Registers</h2>
      <ul className="space-y-2">
        {Object.entries(registers).map(([reg, value]) => (
          <li key={reg} className="flex justify-between">
            <span>{reg}:</span>
            <span>{value.toString(16).toUpperCase().padStart(4, '0')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DebuggerPanel;
