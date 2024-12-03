import styles from './Services.module.css'
import front from '../../assets/images/front.png'
import back from '../../assets/images/code.png'
import fullStack from '../../assets/images/image.png'
import devOps from '../../assets/images/devOps.png'
import image from '../../assets/images/maintain.png'
import training from '../../assets/images/support.png'

export const Services = () => {
  return (
    <>
      <h1 className={styles.serviceTitle} data-aos="slide-down">
        Services
      </h1>
      <div className={styles.mainContainer}>
        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={front} width={100} height={100} />
          <h2 className={styles.title}>Frontend Development</h2>
          <p className={styles.para}>
            Leveraging modern frameworks like React and Angular, I will craft a
            responsive, visually appealing frontend for your website or mobile
            app. Focus will be placed on performance optimization to ensure
            fast, smooth user experiences across all devices while aligning the
            design with your brand’s identity.
          </p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={back} width={100} height={100} />
          <h2 className={styles.title}>Backend Development</h2>
          <p className={styles.para}>
            Secure, scalable APIs will be developed to power your application's
            core functionality, ensuring efficient data flow. Robust databases
            will be designed for seamless storage and retrieval of data, while
            backend logic will be optimized to ensure performance, security, and
            reliability.
          </p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={fullStack} width={100} height={100} />
          <h2 className={styles.title}>Full-Stack Application</h2>
          <p className={styles.para}>
            A seamless full-stack solution will be created, integrating a
            dynamic frontend with a powerful backend. Real-time features like
            live notifications or chat systems will be added, while third-party
            services such as payment gateways and cloud storage will be
            integrated to extend your app’s functionality.
          </p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={devOps} width={100} height={100} />
          <h2 className={styles.title}>DevOps and Deployment</h2>
          <p className={styles.para}>
            Automated CI/CD pipelines will be implemented to streamline your
            development and deployment processes, ensuring faster, reliable
            releases. Your application will be deployed on scalable cloud
            platforms like AWS or Azure, while Docker and Kubernetes will be
            used for containerization and orchestration to improve management.
          </p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={image} width={100} height={100} />
          <h2 className={styles.title}>Maintenance and Support</h2>
          <p className={styles.para}>
            Ongoing support will ensure your application runs smoothly, with bug
            fixes and new features added as needed. Performance monitoring will
            identify and resolve bottlenecks, keeping your app fast and
            reliable, while regular updates will maintain the latest security
            standards and technologies.
          </p>
        </div>

        <div className={styles.serviceContainer} data-aos="slide-up">
          <img src={training} width={100} height={100} />
          <h2 className={styles.title}>Consulting and Training</h2>
          <p className={styles.para}>
            I will guide you in selecting the best tools and technologies to
            achieve your business objectives, mentor your development team to
            improve their skills and boost productivity, and deliver customized
            workshops to help you and your team master full-stack development.
          </p>
        </div>
      </div>
    </>
  )
}
