import logo from './logo.svg';
import './App.css';
import About from './components/about'
import Experience from './components/experience'
import Sidebar from './components/sidebar'
function App() {
  return (
    <div class="flex-container">
      <Sidebar></Sidebar>
      <Experience></Experience>
    </div>
  );
}

export default App;
