import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/partials/Nav';
import Footer from './components/partials/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    :focus {
    outline: none;
    }
  };
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />

        <Nav/>
        <Footer/>
        
        <Home/>
        <About/>
        {/* <Work/> */}
        {/* <Contact/> */}
    </div>
  );
}

export default App;
