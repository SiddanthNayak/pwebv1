import * as React from 'react'
// import {Component} from 'react'
import Nav from './components/nav'
import {GlobalStyle} from './styles/global'
import About from './sections/about';
import Projects from './sections/projects';

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
      </main>
    </div>
  );
}

export default App;
