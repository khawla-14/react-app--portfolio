import React, { useState, useEffect } from 'react';
import './cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return <div className="custom-cursor" style={{ left: position.x, top: position.y }} />;
};

export default CustomCursor;