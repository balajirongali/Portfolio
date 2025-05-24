// import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="app-container" style={{
    marginLeft: '0px',
    marginTop: '0px',
    padding: '1rem',
    backgroundColor: '#f1f5f9',
  }}>
      <Sidebar></Sidebar>
      <main className="main-content container">
        <section id="home"><Home></Home></section>
        <section id="skills"><Skills></Skills></section>
        <section id="education"><Education></Education></section>
        <section id="projects"><Projects></Projects></section>
        <section id="experience"><Experience></Experience></section>
        <section id="contact"><Contact></Contact></section>
      </main>
    </div>
  );
}

export default App;
