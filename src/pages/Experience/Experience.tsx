import 'react-vertical-timeline-component/style.min.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { MdHomeWork } from 'react-icons/md'
import styles from './Experience.module.css'
import { useTranslation } from 'react-i18next'

export const Experience = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.mainContainer}>
      <h1 data-aos="slide-down">{t('experience.title')}</h1>
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
              {t('experience.backendEngineer')}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Proxym-IT</h4>
            <ul style={{ fontSize: '17px' }}>
              <li>{t('experience.backendEngineerTasks.1')}</li>
              <li>{t('experience.backendEngineerTasks.2')}</li>
              <li>{t('experience.backendEngineerTasks.3')}</li>
              <li>{t('experience.backendEngineerTasks.4')}</li>
              <li>{t('experience.backendEngineerTasks.5')}</li>
              <li>{t('experience.backendEngineerTasks.6')}</li>
              <li>{t('experience.backendEngineerTasks.7')}</li>
              <li>{t('experience.backendEngineerTasks.8')}</li>
              <li>{t('experience.backendEngineerTasks.9')}</li>
              <div className={styles.spanStyle}>
                <span>#Finance</span>
                <span>#DigitalBanking</span>
                <span>#FinTech</span>
                <span>#Telecommunication</span>
              </div>
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
              {t('experience.frontendDeveloper')}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sastec TN</h4>
            <ul style={{ fontSize: '17px' }}>
              <li>{t('experience.frontendDeveloperTasks.1')}</li>
              <li>{t('experience.frontendDeveloperTasks.2')}</li>
              <li>{t('experience.frontendDeveloperTasks.3')}</li>
              <li>{t('experience.frontendDeveloperTasks.4')}</li>
              <li>{t('experience.frontendDeveloperTasks.5')}</li>
              <li>{t('experience.frontendDeveloperTasks.6')}</li>
              <li>{t('experience.frontendDeveloperTasks.7')}</li>
              <li>{t('experience.frontendDeveloperTasks.8')}</li>
              <li>{t('experience.frontendDeveloperTasks.9')}</li>
              <div className={styles.spanStyle}>
                <span>#VideoStreaming</span>
                <span>#Multimedia</span>
                <span>#WebTV</span>
              </div>
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
              {t('experience.frontendDeveloper')}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Siyou Technology
            </h4>
            <ul style={{ fontSize: '17px' }}>
              <li>{t('experience.frontendDeveloperTasks.10')}</li>
              <li>{t('experience.frontendDeveloperTasks.11')}</li>
              <li>{t('experience.frontendDeveloperTasks.12')}</li>
              <li>{t('experience.frontendDeveloperTasks.13')}</li>
              <li>{t('experience.frontendDeveloperTasks.14')}</li>
              <li>{t('experience.frontendDeveloperTasks.15')}</li>
              <div className={styles.spanStyle}>
                <span>#E-commerce</span>
              </div>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
