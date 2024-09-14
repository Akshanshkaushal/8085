"use client";
import React from 'react';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor border rounded-md bg-gray-800 text-white p-4 shadow-lg">
      <textarea
        value={code}
        onChange={handleChange}
        placeholder="Write your 8085 assembly code here..."
        className="w-full h-64 p-4 bg-gray-900 text-sm font-mono border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
};

export default CodeEditor;
