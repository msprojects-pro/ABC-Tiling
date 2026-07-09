import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function Logo({ className = '', size = 48, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} id="abc-logo-container">
      <span 
        className={`font-sans font-black tracking-tight leading-none uppercase ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
        style={{ fontSize: size ? `${size * 0.45}px` : '22px' }}
        id="logo-brand-text"
      >
        ABC<span className="text-[#A07048] font-semibold">Tiling</span>
      </span>
    </div>
  );
}
