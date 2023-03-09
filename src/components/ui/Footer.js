import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>Digital Garage</div>
      </div>
    </footer>
  );
}

export default Footer;
