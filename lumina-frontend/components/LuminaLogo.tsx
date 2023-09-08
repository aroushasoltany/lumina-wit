import React from 'react';

interface LuminaLogoProps {
  size: number; // Define a size prop
}

const LuminaLogo: React.FC<LuminaLogoProps> = ({ size }) => {
  return (
    <img
      src="/images/lumina_logo.png"
      alt="Lumina logo"
      style={{ width: `${size}px` }}
    />
  );
};

export default LuminaLogo;
