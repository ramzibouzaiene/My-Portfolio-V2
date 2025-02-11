import java from '../assets/techIcons/icons8-java-96.png'
import keycloak from '../assets/techIcons/icons8-keycloak-96.png'
import postgres from '../assets/techIcons/icons8-postgres-96.png'
import spring from '../assets/techIcons/icons8-spring-boot-96.png'

import angluar from '../assets/techIcons/icons8-angular-96.png'
import react from '../assets/techIcons/icons8-react-js-96.png'
import redux from '../assets/techIcons/icons8-redux-96.png'
import html from '../assets/techIcons/icons8-html-96.png'
import css from '../assets/techIcons/icons8-css-96.png'
import javascript from '../assets/techIcons/icons8-javascript-96.png'
import typeScript from '../assets/techIcons/icons8-typescript-96 (1).png'
import graphql from '../assets/techIcons/icons8-graphql-96.png'
import vuejs from '../assets/techIcons/icons8-vue-js-96.png'
import git from '../assets/techIcons/icons8-git-96.png'
import gitlab from '../assets/techIcons/icons8-gitlab-96.png'
import devops from '../assets/techIcons/icons8-devops-60.png'

interface TechnologyIconsMapping {
  [key: string]: string
}

const technologyIcons: TechnologyIconsMapping = {
  Java: java,
  SpringBoot: spring,
  PostgreSQL: postgres,
  Keycloak: keycloak,
  Angular: angluar,
  React: react,
  Redux: redux,
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  TypeScript: typeScript,
  GraphQL: graphql,
  Vue: vuejs,
  Git: git,
  GitLab: gitlab,
  DevOps: devops,
}

interface TechnologyIconsProps {
  technologies: string[]
}

export const TechnologyIcons = ({ technologies }: TechnologyIconsProps) => {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {technologies.map((tech, index) => {
        const iconSrc = technologyIcons[tech]
        return (
          <div key={index}>
            {iconSrc ? (
              <img
                src={iconSrc}
                alt={tech}
                width={50}
                height={50}
                loading="lazy"
              />
            ) : (
              <span>{tech}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
