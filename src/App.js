import * as React from 'react'
// import {Component} from 'react'
import Nav from './components/nav'
import {GlobalStyle} from './styles/global'
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Hero from './sections/hero';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <nav>
        <Nav />
      </nav>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
