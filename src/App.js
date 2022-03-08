import * as React from 'react'
// import {Component} from 'react'
import Nav from './components/nav'
import {GlobalStyle} from './styles/global'
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Hero from './sections/hero';
import Burger from './components/burger';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <nav>
        <Burger open={open} setOpen={setOpen} />
        <Nav open={open} setOpen={setOpen} />
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
