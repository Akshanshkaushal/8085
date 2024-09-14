"use client";
import React from 'react';

interface ControlPanelProps {
  onRun: () => void;
  onStep: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onRun, onStep }) => {
  return (
    <div className="control-panel flex space-x-4">
      <button
        onClick={onRun}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Run
      </button>
      <button
        onClick={onStep}
        className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
      >
        Step
      </button>
    </div>
  );
};

export default ControlPanel;
