import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const MainRoutes = () => {
  return (
    <Routes>
          <Route path="/" Component={Home} />
             <Route path="/about" Component={About} />
             <Route path="/skills" Component={Skills} />
             <Route path="/projects" Component={Projects} />
             <Route path="/contact" Component={Contact} />
           </Routes> 
  )
}

export default MainRoutes