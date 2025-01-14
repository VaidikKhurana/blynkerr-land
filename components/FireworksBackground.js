import React from 'react';

const FireworksBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="fixed inset-0 bg-black">
        <style>
          {`
            @keyframes firework {
              0% { transform: translate(var(--x), 100vh) scale(0.5); opacity: 0; }
              5% { opacity: 1; }
              20% { transform: translate(var(--x), var(--y)) scale(0.5); opacity: 0; }
              21% { transform: translate(var(--x), var(--y)) scale(4); opacity: 0.3; }
              30%, 100% { transform: translate(var(--x), var(--y)) scale(0); opacity: 0; }
            }

            .firework {
              --x: 50%;
              --y: 50%;
              position: absolute;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              animation: firework 3s infinite;
            }

            .firework:nth-child(1) { --x: 20%; --y: 30%; animation-delay: 0s; }
            .firework:nth-child(2) { --x: 60%; --y: 40%; animation-delay: 0.5s; }
            .firework:nth-child(3) { --x: 80%; --y: 60%; animation-delay: 1s; }
            .firework:nth-child(4) { --x: 40%; --y: 50%; animation-delay: 1.5s; }
            .firework:nth-child(5) { --x: 70%; --y: 35%; animation-delay: 2s; }
          `}
        </style>
        
        {/* Fireworks */}
        <div className="firework bg-yellow-400" />
        <div className="firework bg-pink-400" />
        <div className="firework bg-green-400" />
        <div className="firework bg-blue-400" />
        <div className="firework bg-purple-400" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FireworksBackground;