"use client";
import React, { useEffect, useState } from 'react';

const IOView: React.FC = () => {
  const [ioPorts, setIoPorts] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchIO = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/io');
        const data = await response.json();
        if (response.ok) {
          setIoPorts(data.ioPorts);
        } else {
          console.error('Error fetching I/O ports:', data.error);
        }
      } catch (error) {
        console.error('Error fetching I/O ports:', error);
      }
    };

    fetchIO();
  }, []);

  return (
    <div className="io-view p-4 border rounded-md bg-gray-800 text-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">I/O View</h2>
      <ul className="space-y-2">
        {Object.entries(ioPorts).map(([port, value]) => (
          <li key={port} className="flex justify-between">
            <span>Port {port}:</span>
            <span>{value.toString(16).toUpperCase().padStart(2, '0')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IOView;
