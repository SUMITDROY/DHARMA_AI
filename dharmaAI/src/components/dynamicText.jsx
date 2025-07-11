import React, { useEffect, useState } from 'react';

export default function DharmaText() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span
      className={`inline-block transform transition-all duration-700 ease-out bg-gradient-to-r from-red-500 via-yellow-200 to-red-200 bg-clip-text text-transparent ${
        visible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}
      style={{
        textShadow: `
          0 0 3px rgba(255, 255, 255, 0.3),
          0 0 6px rgba(255, 255, 255, 0.2)
        `,
      }}
    >
      Dharma AI
    </span>
  );
}
