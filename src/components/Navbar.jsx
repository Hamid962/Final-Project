import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
}

export default Navbar;
