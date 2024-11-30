import styles from './About.module.css'
export const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h1>About</h1>
        <div className={styles.paraAbout}>
          <hr className={styles.lineStyle} />
          <p className={styles.aboutPara}>
            As a Full Stack Software Engineer with +2 years of professional
            experience, I have a proven track record of building robust web
            applications from the ground up. My expertise spans from front-end
            technologies like React and Angular to back-end frameworks such as
            Java/Spring Boot, Node.js/Express.js and PHP/Laravel. Additionally,
            I bring strong DevOps capabilities to the table, leveraging Docker
            and Kubernetes for containerization and orchestration, along with
            GitLab CI/ and Jenkins to automate and streamline continuous
            integration and delivery processes.
          </p>
        </div>
      </div>
    </>
  )
}
