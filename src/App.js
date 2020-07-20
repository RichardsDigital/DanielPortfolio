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
  };
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />

        <Nav/>
        <Home/>
        {/* <About/> */}
        {/* <Work/> */}
        {/* <Contact/> */}
        {/* <Footer/> */}
    </div>
  );
}

export default App;
