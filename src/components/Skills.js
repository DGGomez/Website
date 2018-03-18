import React from 'react';

import BlankCard from './cards/BlankCard';
const Skills = () => {
  return (
    <div id="skills">
      <div>
        <h3>Skills</h3>
      </div>
      <div style={styles.projectsContainer}>
      <BlankCard>
        <ul>
        <li>Main Languages:</li>
        <li>Back-end languages:</li>
        <li>Front-end languages:</li>
        <li>Front-end stacks:</li>
        <li>Databases:</li>
        <li>OS:</li>
        <li>Development Environments:</li>
        <li>Utilities/Misc:</li>
        </ul>
        <ul className="ul-none">
        <li>Java, C</li>
        <li>JavaScript (Node.js, Express.js)</li>
        <li>HTML5, JavaScript(ES6), CSS3</li>
        <li>React, React-native, Redux</li>
        <li>MongoDB, Firebase, SQL</li>
        <li>Linux/UNIX, MS Windows</li>
        <li>Eclipse, Atom, Terminal/PowerShell</li>
        <li>Bash, PROLOG, Git, JSON, Expo XDE, Assembly, python</li>
        </ul>
      </BlankCard>
      </div>
      <div style={styles.footerStyle}>
          <a href="assets/Daniel Gomez.pdf" className="btn btn-primary">
            <span>Download Resume <i class="fas fa-arrow-circle-down"></i></span>
          </a>
        </div>
        <hr/>
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

export default Skills;
