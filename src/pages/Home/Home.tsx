import styles from './Home.module.css'
import imdCode from '/images/ramzi.b.png'
import resume from '../../assets/files/CV_RAMZI_BOUZAIENE.pdf'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()

  const handleResumeClick = () => {
    window.open(resume, '_blank')
  }
  return (
    <>
      <div className={styles.meContainer}>
        <div className={styles.paraContainer}>
          <div className={styles.title}>
            <span>{t('home.iam')}</span> Ramzi Bouzaiene
          </div>
          <p className={styles.mainPara}>
            {t('home.description')} <br /> {t('home.secondDescription')}
          </p>
          <button className={styles.btnStyle} onClick={handleResumeClick}>
            {t('home.resume')}
          </button>
        </div>
        <img
          src={imdCode}
          className={styles.styleImage}
          alt="ramzi is photo"
          loading="eager"
        />
      </div>
    </>
  )
}
