import React from 'react';

interface SaudiLogoProps {
  className?: string;
  size?: number;
}

const SaudiLogo: React.FC<SaudiLogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <style>
          {`.primary{fill:#00685E;} .secondary{fill:#8BAA99;}`}
        </style>
      </defs>
      <circle className="primary" cx="100" cy="100" r="90"/>
      <path className="secondary" d="M50,120 L150,120 L100,40 Z"/>
      <text x="50" y="170" fontFamily="DIN Next Lt Arabic Regular" fontSize="20" fill="#101820">
        وزارة النقل والخدمات اللوجستية
      </text>
    </svg>
  );
};

export default SaudiLogo; 