import Hs from '../styles/Header.module.css';

const Header = ({ onToggleTheme, theme }) => {
  const restart = () => {
    window.dispatchEvent(new Event('restartGame'));
  };
  return (
    <header className={Hs.header}>
      <h1>WOR(2D)UEL</h1>
      <div className={Hs.controls}>
        <button className={Hs.restart} onClick={restart}>Restart</button>
        <button className={Hs.themeToggle} onClick={onToggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
};


export default Header;