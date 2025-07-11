import React, { useEffect, useState } from 'react';

export default function DharmaText() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span
      className={`text-amber-400 inline-block transform transition-all duration-700 ease-out
        ${visible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
    >
       dharma AI
    </span>
  );
}
