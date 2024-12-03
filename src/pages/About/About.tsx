import styles from './About.module.css'
//<hr className={styles.lineStyle} />
import devIcon from '../../assets/Developer activity-bro.png'
export const About = () => {
  return (
    <>
      <h1 data-aos="slide-down">About</h1>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutPara} data-aos="fade-right">
          As a{' '}
          <span style={{ color: '#ffc86b', fontFamily: 'MyFontAbout' }}>
            Full Stack Software Engineer{' '}
          </span>{' '}
          with +2 years of professional experience, I have a proven track record
          of building robust web applications from the ground up. My expertise
          spans from front-end technologies like React and Angular to back-end
          frameworks such as Java/Spring Boot, Node.js/Express.js and
          PHP/Laravel. Additionally, I bring strong DevOps capabilities to the
          table, leveraging Docker and Kubernetes for containerization and
          orchestration, along with GitLab CI/ and Jenkins to automate and
          streamline continuous integration and delivery processes.
        </p>
        <div className={styles.imageContainer} data-aos="fade-left">
          <img
            src={devIcon}
            alt="Developer Icon"
            className={styles.imageStyle}
          />
        </div>
      </div>
    </>
  )
}
