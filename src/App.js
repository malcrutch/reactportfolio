import React from 'react';
import Nav from './components/nav.js';
import Resume from  "./components/resume.js";
import Skills from "./components/skills.js";
import Projects from "./components/projects.js";
import Education from "./components/education.js";

function App() {
  return (
  <div>
    <Nav />
   <Resume />
   <Skills />
   <Projects />
   <Education />
  </div>
   
  );
}

export default App;
