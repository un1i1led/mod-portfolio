import './App.css'
import githubWhite from './assets/github-mark-white.svg';
import linkedin from './assets/icons8-linkedin.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <Router basename={import.meta.env.DEV ? '/' : '/mod-portfolio/'}>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path='/mod-portfolio' element={<Home/>}/>
          <Route path='/mod-portfolio/about' element={<About/>}/>
          <Route path='/mod-portfolio/projects' element={<Projects/>}/>
          <Route path='/mod-portfolio/contact' element={<Contact/>}/>
        </Routes>
        <div className='footer'>
            <div className='footer-imgs'>
                <a href='https://www.github.com/un1i1led' className='no-style'><img src={githubWhite} alt='github link'/></a>
                <a href='https://www.linkedin.com/in/gilsanquin/'><img src={linkedin} alt='linkedin link'/></a>
            </div>
            <p>© 2023 • Gilberto Sanchez. All Rights Reserved.</p>
        </div>
      </div>
    </Router>
  )
}

export default App
