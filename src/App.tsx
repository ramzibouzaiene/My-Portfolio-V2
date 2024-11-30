import { About } from './pages/About/About'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import { Skills } from './pages/Skills/Skills'
import { Projects } from './pages/Projects/Projects'
import { Experience } from './pages/Experience/Experience'
import { Contact } from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Navbar /> <Home /> <About /> <Skills /> <Projects /> <Experience />{' '}
      <Contact />
    </>
  )
}

export default App
