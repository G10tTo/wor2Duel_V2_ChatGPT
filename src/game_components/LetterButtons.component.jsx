import { useRef } from 'react';
import LBs from '../styles/LetterButtons.module.css';

const LetterButtons = ({ onClick, disabled }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const buttonRefs = useRef([]);

  const isSmallScreen = window.innerWidth <= 535;
  const radius = isSmallScreen ? 130 : 220;
  const centerX = isSmallScreen ? 150 : 250;
  const centerY = isSmallScreen ? 150 : 250;

  const handleKeyDown = (event, index) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = (index + 1) % alphabet.length;
      buttonRefs.current[next]?.focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prev = (index - 1 + alphabet.length) % alphabet.length;
      buttonRefs.current[prev]?.focus();
    } else if (/^[a-zA-Z]$/.test(event.key)) {
      const letter = event.key.toUpperCase();
      onClick(letter);
      const idx = alphabet.indexOf(letter);
      if (idx !== -1) {
        buttonRefs.current[idx]?.focus();
      }
    }
  };

  return (
    <div className={LBs.letterButtons}>
      {alphabet.map((letter, index) => {
        const angle = (index / alphabet.length) * 2 * Math.PI - Math.PI / 2; // Start from the top
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <button
            key={letter}
            ref={el => { buttonRefs.current[index] = el; }}
            onClick={() => onClick(letter)}
            disabled={disabled}
            onKeyDown={e => handleKeyDown(e, index)}
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