import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';



const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Resume = lazy(() => import('./Pages/Resume'));
const Projects = lazy(() => import('./Pages/Projects'));
const Activities = lazy(() => import('./Pages/Activities'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    
      <Router>
        <div className="App">
          <Header/>
          <Suspense fallback={<div>Loading...</div>}>
            <div id="home" className="section"><Home /></div>
            <div id="about" className="section"><About /></div>
            <div id="resume" className="section"><Resume /></div>
            <div id="projects" className="section"><Projects /></div>
            <div id="activities" className="section"><Activities /></div>
            <div id="contact" className="section"><Contact /></div>
          </Suspense>
        </div>
      </Router>
   
  );
}

export default App;
