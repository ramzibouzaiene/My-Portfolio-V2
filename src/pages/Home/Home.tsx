import styles from './Home.module.css'
//import imdCode from './../../assets/images/ME1.png'
import imdCode from './../../assets/images/ME3.png'
import { Button } from '@mui/material'

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
          <button className={styles.btnStyle}>Resume</button>
        </div>
        <div>
          <img src={imdCode} className={styles.styleImage} />
        </div>
      </div>
    </>
  )
}
