// components/AnimatedGradientText.js
"use client"
import React from 'react';

const AnimatedGradientText = ({ text, className = "" }) => {
  return (
    <div className={className}>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            to right,
            #ff6b6b,
            #4ecdc4,
            #45b649,
            #ff6b6b
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 8s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <span className="gradient-text">{text}</span>
    </div>
  );
};

export default AnimatedGradientText;