import React from 'react';

import AboutCard from './cards/AboutCard';
const About = () => {
  return (
    <div id="about">
      <div>
        <h3>About</h3>
      </div>
      <div style={styles.projectsContainer}>
        <AboutCard >
          {` I am a second year Computer Science Undergraduate student at Ryerson University.
  I am currently apart of the Ryerson competitive coding club and working on my own app in my spare time.
         `}
        </AboutCard>
        <hr/>
        </div>

    </div>
  );
};

const styles = {
  projectsContainer: {
    width: "100%",
    display: 'flex',
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  footerStyle: {
    marginTop: "10px"
  }
};

export default About;
