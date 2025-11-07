'use client';

import { useEffect } from 'react';

const Protection = function GlobalProteProtectionction({ children }) {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      if (e.key === 'F12') { e.preventDefault(); }
      if (isCtrlOrMeta && e.key === 'r') { e.preventDefault(); } 
      if (isCtrlOrMeta && e.key === 'u') { e.preventDefault(); } 
      if (isCtrlOrMeta && e.key === 's') { e.preventDefault(); } 
      if (isCtrlOrMeta && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '_')) { e.preventDefault(); } 
      if (isCtrlOrMeta && e.shiftKey && (e.key === 'I' || e.key === 'i')) { e.preventDefault(); } 
      if (isCtrlOrMeta && e.shiftKey && (e.key === 'J' || e.key === 'j')) { e.preventDefault(); } 
      if (isCtrlOrMeta && e.shiftKey && (e.key === 'C' || e.key === 'c')) { e.preventDefault(); }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return <>{children}</>;
}

export default Protection;