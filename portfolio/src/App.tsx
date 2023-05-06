import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    // <AnimatePresence mode="wait" initial={false}>
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
    // {/* </AnimatePresence> */}
  );
}

export default App;
