import React from 'react';

// This component creates a background hexagonal grid pattern
// Often used in tech/sci-fi interfaces
const HexGrid = ({ className = '' }) => {
  return (
    <div className={`${className} absolute inset-0`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern 
            id="hexagons" 
            width="56" 
            height="100" 
            patternUnits="userSpaceOnUse" 
            patternTransform="scale(3) rotate(0)"
          >
            <path 
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
            <path 
              d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
              strokeOpacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default HexGrid;