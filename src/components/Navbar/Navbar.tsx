import styles from './Navbar.module.css'
import { Link } from 'react-scroll'
import { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div
          className={`${styles.menuIcon} ${isMenuOpen ? styles.closeIcon : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </div>
        <ul
          className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}
        >
          <li>
            <Link
              to="about"
              className={styles.navLink}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className={styles.navLink}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className={styles.navLink}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Protfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={styles.navLink}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
