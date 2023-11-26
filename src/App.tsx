import './App.css'
import githubWhite from './assets/github-mark-white.svg';
import linkedin from './assets/icons8-linkedin.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <div className='footer'>
            <div className='footer-imgs'>
                <img src={githubWhite} alt='github link'/>
                <img src={linkedin} alt='linkedin link'/>
            </div>
            <p>© 2023 • Gilberto Sanchez. All Rights Reserved.</p>
        </div>
      </div>
    </Router>
  )
}

export default App
