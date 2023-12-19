import styles from "./Logo.module.css";
function Logo() {
  return (
    <h1 className={styles.star}>
      STAR WARS <span className={styles.character}>Character </span>App
    </h1>
  );
}

export default Logo;
