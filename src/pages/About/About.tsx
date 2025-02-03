import { useTranslation } from 'react-i18next'
import styles from './About.module.css'
export const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1 data-aos="slide-down">{t('about.title')}</h1>
      <div className={styles.aboutContainer}>
        <p className={styles.aboutPara} data-aos="slide-up">
          {t('about.as')}
          <span style={{ color: '#ffc86b', fontFamily: 'MyFontAbout' }}>
            {t('about.highlight')}
          </span>{' '}
          {t('about.description')}
        </p>
        <div className={styles.imageContainer} data-aos="slide-up">
          <img
            src="/images/Developer activity-bro.png"
            alt="Developer Icon"
            className={styles.imageStyle}
          />
        </div>
      </div>
    </>
  )
}
