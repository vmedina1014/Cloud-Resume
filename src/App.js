import logo from './logo.svg';
import './App.css';
import About from './components/about'
import Experience from './components/experience'
import Sidebar from './components/sidebar'
import Skills from './components/skills';

function App() {
  return (
    <div class="flex-container">

      
      <div id="sidebar">
      <About></About>
      <hr></hr>
      <Skills></Skills>
      <hr></hr>
      <Sidebar></Sidebar>
      </div>

      <Experience></Experience>
    </div>
  );
}

export default App;
