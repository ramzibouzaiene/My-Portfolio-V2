import 'react-vertical-timeline-component/style.min.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { MdHomeWork } from 'react-icons/md'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      <div className={styles.timeline}>
        <VerticalTimeline
          lineColor="#fff"
          className={styles.timeline}
          layout="1-column-left"
        >
          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3d3e42', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3d3e42' }}
            date="Sep 2023 - Present"
            dateClassName={styles.dateStyle}
            iconStyle={{ background: '#f0bf6c', color: '#fff' }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Proxym-IT</h4>
            <ul>
              <li>
                Backend engineer contributing to banking and telecom projects
                with Java, Spring Boot, JSF, PostgreSQL, Maven, Keycloak,
                Flowable, and JUnit.
              </li>
              <li>
                Design and implement scalable backend solutions focusing on
                retail and corporate banking functionalities.
              </li>
              <li>
                Maintain a backoffice system using JSP and PrimeFaces for
                efficient administration.
              </li>
              <li>
                Developed scalable banking apps serving millions of users.
              </li>
              <li>
                Designed and implemented business processes using BPMN
                (Flowable).
              </li>
              <li>
                Built and deployed Java projects with Keycloak SPI for advanced
                authentication, integrated with Vasco (SOAP).
              </li>
              <li>Mentor interns, fostering growth and offering guidance.</li>
              <li>
                Collaborate with team members to deliver essential backend
                functionalities.
              </li>
              <li>
                Actively learn and seek opportunities for growth in backend
                development.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3d3e42', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3d3e42' }}
            date="Jan 2023 - Aug 2023"
            dateClassName={styles.dateStyle}
            iconStyle={{ background: '#f0bf6c', color: '#fff' }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sastec TN</h4>
            <ul>
              <li>
                Create reusable React components and export to Bit cloud for
                reuse.
              </li>
              <li>
                Develop and optimize real-time streaming applications (live
                meetings, video streaming).
              </li>
              <li>
                Maintain and enhance projects by adding features and fixing
                bugs.
              </li>
              <li>Write unit tests with React Testing Library and Jest.</li>
              <li>
                Deliver new features and ensure responsiveness in web design.
              </li>
              <li>
                Continuously learn best practices and improve performance.
              </li>
              <li>
                Maintain and enhance a video player project with Vue.js and
                Vuex.
              </li>
              <li>Migrate projects from REST APIs to GraphQL.</li>
              <li>Fix production issues.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position="right"
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3d3e42', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #3d3e42' }}
            date="Jul 2022 - Dec 2022"
            dateClassName={styles.dateStyle}
            iconStyle={{ background: '#f0bf6c', color: '#fff' }}
            icon={<MdHomeWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Siyou Technology
            </h4>
            <ul>
              <li>
                Development of new features and maintaining code of a large
                complete B2S2C (Business to Shop to Customer) solutions with
                Angular.
              </li>
              <li>Fixing production issues.</li>
              <li>
                Working on two Angular projects: B2S (Business to Shop), and S2C
                (Shop to Customer).
              </li>
              <li>
                Development of the new project of B2B (Business to Business)
                with React/TypeScript and Ant Design.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}
