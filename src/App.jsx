import React, { useState, useEffect } from 'react';

import { GlobalStyle } from './utils/Global';
import Header from './layouts/Header';
import Hero from './layouts/Hero';
import Projects from './layouts/Projects';
import About from './layouts/About';
import Footer from './layouts/Footer';
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader';

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

  useEffect(() => {
    tryLoadAndStartRecorder({
      recordingToken: 'QUpWL2zCQqvNRiHxJr5RErnvQ7gvc74GY1EHRQMY',
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
