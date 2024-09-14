"use client";
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import ControlPanel from './ControlPanel';
import DebuggerPanel from './DebuggerPanel';
import IOView from './IOView';
import MemoryView from './MemoryView';

const Emulator: React.FC = () => {
  const [assemblyCode, setAssemblyCode] = useState<string>('');
  const [executionResult, setExecutionResult] = useState<any>(null);
  const [memory, setMemory] = useState<number[]>(new Array(65536).fill(0)); // 64KB memory
  const [registers, setRegisters] = useState<{ [key: string]: number }>({
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    H: 0,
    L: 0,
    SP: 0,
    PC: 0,
    Flags: 0,
  });

  const handleRun = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: assemblyCode }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unknown error occurred');
      }
      setExecutionResult(data.output || 'No result returned');
      setMemory(data.memory ? data.memory.split('\n').map(Number) : new Array(65536).fill(0));
      setRegisters(data.registers || {});
    } catch (error) {
      console.error('Error running code:', error);
      // Display error to user (e.g., using a toast notification or error message component)
    }
  };

  const handleStep = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/step', { method: 'POST' });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unknown error occurred');
      }
      setExecutionResult(data.output || 'No result returned');
    } catch (error) {
      console.error('Error stepping through code:', error);
      // Display error to user (e.g., using a toast notification or error message component)
    }
  };

  return (
    <div className="emulator grid grid-cols-2 gap-6">
      <div className="editor-panel col-span-2">
        <CodeEditor code={assemblyCode} setCode={setAssemblyCode} />
      </div>
      <div className="control-panel col-span-2">
        <ControlPanel onRun={handleRun} onStep={handleStep} />
      </div>
      <div className="debugger-panel">
        <DebuggerPanel registers={registers} />
      </div>
      <div className="memory-view col-span-2">
        <MemoryView memory={memory} />
      </div>
      <div className="io-view col-span-2">
        <IOView />
      </div>
      {executionResult && (
        <div className="execution-result col-span-2 p-4 border rounded-md bg-gray-800 text-white shadow-lg">
          <h2>Execution Result</h2>
          <pre>{JSON.stringify(executionResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Emulator;
