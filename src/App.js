import './App.css';
import About from './components/about'
import Experience from './components/experience'
import Skills from './components/skills';
import Education from './components/education'
import Certifications from './components/certifications';
import Contact from './components/contact';
import ResumeDownload from './components/resume_download'
import Leadership from './components/leadership'
import Projects from './components/projects'
import Activities from './components/honors_activities'
import VisitorCount from './components/visitor_count';

function App() {
  return (
    <div class="flex-container">

      {/* FIXME:Fix Structural analysis engineering date range*/}
      {/* TODO:Update with Projects?*/}
      
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
        <ResumeDownload></ResumeDownload>
        
      </div>
      <div id='info-pages'>
      <div className='page'>
        <Experience></Experience>
        <Projects></Projects>
        <Leadership></Leadership>
        <Activities></Activities>
       
        </div>
        <VisitorCount></VisitorCount>
      </div>
      
    </div>
  );
}

export default App;
