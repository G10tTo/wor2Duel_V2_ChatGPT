import { useEffect } from 'react';
import LBs from '../styles/LetterButtons.module.css';

const LetterButtons = ({ onClick, disabled }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  /* D4_T1 ---> */
  const isSmallScreen = window.innerWidth <= 535;
  const radius = isSmallScreen ? 130 : 220;
  const centerX = isSmallScreen ? 150 : 250;
  const centerY = isSmallScreen ? 150 : 250;
  /* <--- */

  /* D4_T3 ---> */
  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (/^[a-zA-Z]$/.test(event.key)) {
        const letter = event.key.toUpperCase();
        onClick(letter);
        const idx = alphabet.indexOf(letter);
        if (idx !== -1) {
          buttonRefs.current[idx]?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [onClick]);
  /* <--- */

  return (
    <div className={LBs.letterButtons}>
      {alphabet.map((letter, index) => {
        const angle = (index / alphabet.length) * 2 * Math.PI - Math.PI / 2; // Start from the top
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);


        return (
          <button
            key={letter}
            onClick={() => onClick(letter)}
            disabled={disabled}
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default LetterButtons;