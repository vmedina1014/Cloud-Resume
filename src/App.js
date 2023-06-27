import logo from './logo.svg';
import './App.css';
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills';
import Education from './components/education'
import Certifications from './components/certifications';
import Contact from './components/contact';
import Resume_Download from './components/resume_download'

function App() {
  return (
    <div class="flex-container">


      <div id="sidebar">
        <About></About>
        <hr></hr>
        <Skills></Skills>
        <hr></hr>
        <Education></Education>
        <hr></hr>
        <Certifications></Certifications>
        <hr></hr>
        <Contact></Contact>
        <hr></hr>
        <Resume_Download></Resume_Download>
      </div>


      <Experience></Experience>
    </div>
  );
}

export default App;
