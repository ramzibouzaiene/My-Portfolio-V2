import styles from './Home.module.css'
import imdCode from './../../assets/images/ME3.png'
import resume from '../../assets/files/CV_RAMZI_BOUZAIENE.pdf'

export const Home = () => {
  return (
    <>
      <div className={styles.meContainer}>
        <div className={styles.paraContainer}>
          <div className={styles.title}>
            <span>I'AM</span> Ramzi Bouzaiene
          </div>
          <p className={styles.mainPara}>
            Full Stack Engineer Passionate About <br />
            Crafting Innovative Solutions Through Code.
          </p>
          <button className={styles.btnStyle}>
            <a href={resume} target="_blank" className={styles.linkStyle}>
              Resume
            </a>
          </button>
        </div>
        <img src={imdCode} className={styles.styleImage} />
      </div>
    </>
  )
}
