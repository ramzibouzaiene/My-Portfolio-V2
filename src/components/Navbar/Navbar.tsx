import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul className={styles.navLinks}>
          <li>
            <a href="about" className={styles.navLink}>
              About Me
            </a>
          </li>
          <li>
            <a href="projects" className={styles.navLink}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="contact" className={styles.navLink}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
