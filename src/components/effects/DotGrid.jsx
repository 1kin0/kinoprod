'use client';
import { useRef, useEffect } from 'react';

const StaticDotGrid = ({
  dotSize = 2,        // маленький размер точек
  gap = 40,           // расстояние между точками
  color = '#888',     // цвет точек
  className = '',
  style
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        drawGrid(ctx, rect.width, rect.height);
      }
    };

    const drawGrid = (ctx, width, height) => {
      ctx.fillStyle = color;
      
      // Рисуем сетку точек
      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [dotSize, gap, color]);

  return (
    <div className={`w-full h-full relative ${className}`} style={style}>
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default StaticDotGrid;
