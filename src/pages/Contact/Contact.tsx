import styles from './Contact.module.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'

export const Contact = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <hr className={styles.line} data-aos="slide-right" />
        <h1 className={styles.title} data-aos="slide-down">
          Contact Me
        </h1>
        <hr className={styles.line} data-aos="slide-left" />
      </div>
      <div className={styles.container}>
        <p className={styles.contactText} data-aos="slide-right">
          <MdOutlineEmail style={{ color: '#fff' }} />
          ramzibouzaiene.dev@gmail.com
        </p>
        <p className={styles.contactText} data-aos="slide-left">
          <FiPhone style={{ color: '#fff' }} />
          +216 58 275 298
        </p>
        <p className={styles.contactText} data-aos="slide-up">
          <MdOutlineLocationOn style={{ color: '#fff' }} />
          Tunisia, Sousse
        </p>
      </div>
      <div className={styles.secondTitleContainer}>
        <hr className={styles.line} />
        <a href="https://github.com/ramzibouzaiene" target="_blank">
          <FaGithub
            style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
            className={styles.icons}
          />
        </a>

        <a href="https://www.linkedin.com/in/ramzibouzaiene/" target="_blank">
          <FaLinkedin
            style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
            className={styles.icons}
          />
        </a>

        <hr className={styles.line} />
      </div>
      <p className={styles.endTitle}>"Thanks for Scrolling"</p>
    </>
  )
}
