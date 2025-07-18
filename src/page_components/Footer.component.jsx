// Import CSS module containing scoped footer styles
import Fs from "../styles/Footer.module.css";


/**
 * Displays a simple footer for the application.
 *
 * The component uses a CSS module for styling to ensure that styles are scoped
 * locally. It simply renders a footer element with a copyright notice.
 */
const Footer = () => {
  return (
    <footer>
      <p className={Fs}>&copy; 2025 Andrea Sargiotto. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
