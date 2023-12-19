import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p>&copy; 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
