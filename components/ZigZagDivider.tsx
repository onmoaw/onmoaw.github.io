
import React from 'react';

interface ZigZagDividerProps {
  position?: 'top' | 'bottom';
  color?: string;
  className?: string;
  height?: number;
}

const ZigZagDivider: React.FC<ZigZagDividerProps> = ({
  position = 'bottom',
  color = 'fill-cream',
  className = '',
  height = 40,
}) => {
  const flip = position === 'top' ? 'rotate-180' : '';

  return (
    <div className={`w-full overflow-hidden leading-none ${flip} ${className}`}>
      <svg
        className={`block w-full ${color}`}
        style={{ height }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="opacity-0" />
        <path 
            d="M0,0l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60l30,60l30-60v120H0V0z" 
        />
      </svg>
    </div>
  );
};

export default ZigZagDivider;
