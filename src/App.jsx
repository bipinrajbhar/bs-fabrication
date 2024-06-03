import React, { useState, useEffect } from 'react';

import { GlobalStyle } from './utils/Global';
import Header from './layouts/Header';
import Hero from './layouts/Hero';
import Projects from './layouts/Projects';
import About from './layouts/About';
import Footer from './layouts/Footer';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Header isScrolled={isScrolled} />
      <Hero />
      <Projects />
      <About />
      <Footer />
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
