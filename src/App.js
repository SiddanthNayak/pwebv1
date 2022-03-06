import * as React from 'react'
// import {Component} from 'react'
import Nav from './components/nav'
import {GlobalStyle} from './styles/global'
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <nav>
        <Nav />
      </nav>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
