import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import { AnimatePresence } from 'framer-motion';

const homeUrl = process.env.PUBLIC_URL;
function App() {
  return (
    // <AnimatePresence mode="wait" initial={false}>
    <Router>
      <Routes>
        <Route path={homeUrl} Component={About} />
        <Route path={homeUrl + '/about'} Component={About} />
        <Route path={homeUrl + '/skills'} Component={Skills} />
        <Route path={homeUrl + '/contact'} Component={Contact} />
      </Routes>
    </Router>
    // {/* </AnimatePresence> */}
  );
}

export default App;
