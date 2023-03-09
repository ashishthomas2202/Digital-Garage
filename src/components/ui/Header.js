import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.hamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2 className={styles.brand}>Digital Garage</h2>
        <div className={styles.greeting}>Hi Ash!</div>
      </nav>
    </header>
  );
}

export default Header;
