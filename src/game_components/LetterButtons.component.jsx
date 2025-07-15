import LBs from '../styles/LetterButtons.module.css';

const LetterButtons = ({ onClick, disabled }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const isSmallScreen = window.innerWidth <= 535;
  const radius = isSmallScreen ? 130 : 220;
  const centerX = isSmallScreen ? 150 : 250;
  const centerY = isSmallScreen ? 150 : 250;

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