import styles from './skills.module.css'
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
export const Skills = () => {
  return (
    <>
      <h1 className={styles.aboutTitle}>My Skills</h1>
      <div className={styles.mainContainer}>
        <div className={styles.techContainer}>
          <img src={html} width={100} height={100} />
          <h5>HTML</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={css} width={100} height={100} />
          <h5>CSS</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={javascript} width={100} height={100} />
          <h5>JAVASCRIPT</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={reactjs} width={100} height={100} />
          <h5>REACT JS</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={angular} width={100} height={100} />
          <h5>ANGULAR</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={java} width={100} height={100} />
          <h5>JAVA</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={springboot} width={100} height={100} />
          <h5>SPRING BOOT</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={kubernetes} width={100} height={100} />
          <h5>KUBERNETES</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={docker} width={100} height={100} />
          <h5>DOCKER</h5>
        </div>
        <div className={styles.techContainer}>
          <img src={postgres} width={100} height={100} />
          <h5>POSTGRES</h5>
        </div>
      </div>
    </>
  )
}