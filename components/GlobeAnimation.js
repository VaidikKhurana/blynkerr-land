import React from 'react';

const GlobeAnimation = () => {
  return (
    <div className="relative w-[600px] h-[600px]">
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-white opacity-5 blur-xl" />
      
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full animate-spin"
        style={{ animationDuration: '30s', animationTimingFunction: 'linear' }}
      >
        {/* Globe outer ring with glow */}
        <circle
          cx="300"
          cy="300"
          r="290"
          fill="none"
          stroke="white"
          strokeWidth="1"
          className="opacity-40"
        />
        
        {/* Generate dot pattern for continents */}
        <g>
          {/* North America */}
          <path
            d="M150,200 C180,180 220,170 260,180 C300,190 320,200 340,220"
            fill="none"
            className="dots-path"
          />
          
          {/* South America */}
          <path
            d="M220,300 C240,320 250,350 245,380 C240,410 220,440 200,460"
            fill="none"
            className="dots-path"
          />
          
          {/* Add more continent paths as needed */}
        </g>

        {/* Generate dots programmatically */}
        <g>
          {Array.from({ length: 1000 }).map((_, i) => {
            const angle = (i * Math.PI * 2) / 1000;
            const radius = 290;
            const x = 300 + radius * Math.cos(angle);
            const y = 300 + radius * Math.sin(angle) * 0.4;
            
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1"
                fill="white"
                className="opacity-40"
              />
            );
          })}
        </g>
      </svg>

      {/* Add CSS for dot patterns and animation */}
      <style jsx>{`
        .dots-path {
          stroke: none;
          fill: none;
          filter: url(#glow);
        }

        @keyframes spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default GlobeAnimation;