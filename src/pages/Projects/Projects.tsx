import styles from './Projects.module.css'
import projects from '../../data/Projects.json'
import Marquee from 'react-fast-marquee'

interface Project {
  title: string
  description: string
  technologies: string[]
  role: string
  responsibilities: string[]
  features?: string[]
  challenges?: string
  outcome: string
  liveDemo?: string
  sourceCode?: string
  image: string
  mobile?: string
}

interface ProjectsProps {
  project: Project
}

const ProjectCard: React.FC<ProjectsProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
          {project?.mobile && (
            <a href={project?.mobile} target="_blank" rel="noopener noreferrer">
              Mobile App
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export const Project = () => {
  return (
    <section>
      <h1 className={styles.titleP} data-aos="slide-down">
        Portfolio
      </h1>
      <Marquee
        gradient={false}
        gradientColor="#31333b"
        pauseOnHover={true}
        autoFill={true}
        className={styles.mainPrjContainer}
      >
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Marquee>
    </section>
  )
}
