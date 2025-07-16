import Hs from '../styles/Header.module.css';

const Header = () => {
  const restart = () => {
    window.dispatchEvent(new Event('restartGame'));
  };
  return (
    <header className={Hs.header}>
      <h1>WOR(2D)UEL</h1>
      <button className={Hs.restart} onClick={restart}>Restart</button>
    </header>
  );
};

export default Header;