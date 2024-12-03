import styles from './Skills.module.css'
import html from '../../assets/programming-logo/html.png'
import css from '../../assets/programming-logo/css.png'
import javascript from '../../assets/programming-logo/javascript.png'
import reactjs from '../../assets/programming-logo/react.png'
import angular from '../../assets/programming-logo/icons8-angular-96.png'
import java from '../../assets/programming-logo/java.png'
import springboot from '../../assets/programming-logo/spring-boot.png'
import kubernetes from '../../assets/programming-logo/kubernetes.png'
import docker from '../../assets/programming-logo/docker.png'
import postgres from '../../assets/programming-logo/icons8-postgres-96.png'
import laravel from '../../assets/programming-logo/pngwing.com.png'
import golang from '../../assets/programming-logo/Go-Logo_Blue.png'

export const Skills = () => {
  return (
    <>
      <h1 className={styles.aboutTitle} data-aos="slide-down">
        My Skills
      </h1>
      <div className={styles.mainContainer}>
        <div className={styles.techContainer} data-aos="fade-right">
          <img src={html} width={100} height={100} />
          <h5>HTML</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-right">
          <img src={css} width={100} height={100} />
          <h5>CSS</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-left">
          <img src={javascript} width={100} height={100} />
          <h5>JAVASCRIPT</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-left">
          <img src={reactjs} width={100} height={100} />
          <h5>REACT JS</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-right">
          <img src={angular} width={100} height={100} />
          <h5>ANGULAR</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-right">
          <img src={java} width={100} height={100} />
          <h5>JAVA</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-left">
          <img src={springboot} width={100} height={100} />
          <h5>SPRING BOOT</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-left">
          <img src={laravel} width={100} height={100} />
          <h5>LARAVEL</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-right">
          <img src={golang} width={100} height={100} />
          <h5>GO LANG</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-right">
          <img src={kubernetes} width={100} height={100} />
          <h5>KUBERNETES</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-left">
          <img src={docker} width={100} height={100} />
          <h5>DOCKER</h5>
        </div>
        <div className={styles.techContainer} data-aos="fade-left">
          <img src={postgres} width={100} height={100} />
          <h5>POSTGRES</h5>
        </div>
      </div>
    </>
  )
}
