import { useState, useEffect } from 'react'
import { About } from './pages/About/About'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Skills } from './pages/Skills/Skills'
import { Project } from './pages/Projects/Projects'
import { Experience } from './pages/Experience/Experience'
import { Contact } from './pages/Contact/Contact'
import { Services } from './pages/Services/Services'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Navbar /> <Home />
      <div>
        <section id="about" style={{ minHeight: '100vh', padding: '50px' }}>
          <About />
        </section>
        <section id="services" style={{ minHeight: '100vh', padding: '50px' }}>
          <Services />
        </section>
        <section id="skills" style={{ minHeight: '100vh', padding: '50px' }}>
          <Skills />
        </section>
        <section id="projects" style={{ minHeight: '100vh', padding: '50px' }}>
          <Project />
        </section>
        <section
          id="experience"
          style={{ minHeight: '100vh', padding: '50px' }}
        >
          <Experience />
        </section>
        <section id="contact" style={{ minHeight: '100vh', padding: '50px' }}>
          <Contact />
        </section>
      </div>
      {isVisible && (
        <button onClick={scrollToTop} className="scrollBtn">
          ↑
        </button>
      )}
    </>
  )
}

export default App
