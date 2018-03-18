import React from 'react';

import Skills from '../components/Skills';
import Compitions from '../components/compitions';
import Projects from '../components/Projects';

const Home = () => {
  return(
    <div id="home">
          <Skills />
      <Compitions/>
      <Projects />
    </div>
  );
};

export { Home };
