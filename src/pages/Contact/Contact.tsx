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
        <hr className={styles.line} />
        <h1 className={styles.title}>Contact Me</h1>
        <hr className={styles.line} />
      </div>
      <div className={styles.container}>
        <p className={styles.contactText}>
          <MdOutlineEmail style={{ color: '#fff' }} />
          ramzibouzaiene00@gmail.com
        </p>
        <p className={styles.contactText}>
          <FiPhone style={{ color: '#fff' }} />
          +216 58 275 298
        </p>
        <p className={styles.contactText}>
          <MdOutlineLocationOn style={{ color: '#fff' }} />
          Tunisia, Sousse
        </p>
      </div>
      <div className={styles.titleContainer}>
        <hr className={styles.line} />
        <FaGithub
          style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
        />
        <FaLinkedin
          style={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
        />
        <hr className={styles.line} />
      </div>
      <p className={styles.endTitle}>"Thanks for Scrolling"</p>
    </>
  )
}
