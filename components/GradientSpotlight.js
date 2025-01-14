import React from 'react';

const GradientSpotlight = ({ 
  startColor = 'rgba(11, 101, 221, 0.8)', 
  midColor = 'rgba(59, 130, 246, 0.1)',
  endColor = 'transparent',
  opacity = 0.4,
  blur = 40
}) => {
  return (
    <div className="relative w-full h-full">
      {/* Left spotlight */}
      <div className="absolute left-0 top-0 bottom-0 w-[40vw] h-screen pointer-events-none">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            opacity,
            background: `linear-gradient(90deg, ${startColor} 0%, ${midColor} 50%, ${endColor} 100%)`,
            filter: `blur(${blur}px)`,
          }}
        />
      </div>

      {/* Right spotlight */}
      <div className="absolute right-0 top-0 bottom-0 w-[40vw] h-screen pointer-events-none">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            opacity,
            background: `linear-gradient(-90deg, ${startColor} 0%, ${midColor} 50%, ${endColor} 100%)`,
            filter: `blur(${blur}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default GradientSpotlight;