
import React from 'react';

export const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 50% 0%, 
            rgba(156, 39, 176, 0.3) 0%, 
            rgba(233, 30, 99, 0.2) 30%, 
            rgba(63, 81, 181, 0.1) 60%, 
            rgba(0, 188, 212, 0.05) 90%
          ),
          linear-gradient(135deg, #120e1e 0%, #1f1133 50%, #2a1758 100%)
        `
      }}
    >
      {/* Static overlay gradients for aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-pink-500/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent"></div>
    </div>
  );
};

