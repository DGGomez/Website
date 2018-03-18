import React from 'react';

import Card from './cards/Card';

const Compitions = () => {
  return (
    <div id="projects">
      <div>
        <h3>Competitive Coding</h3>
      </div>

      <div style={styles.projectsContainer}>
        <Card title="Kattis" url="https://github.com/DGGomez/kattis-solutions">
          {`open.kattis.com is an online plateform for coding contests that are open to anyone but mostly used by students. This records rankings
            of students and schools around the world. I am currently ranked 641 in the world. I code in Java and C.`}
        </Card>
        <Card title="Hackerrank" url="https://www.hackerrank.com/daniel_gomez1?hr_r=1">
          {`Another more known competitive programing website. Here I use Java and Javascript for compitions.`}
        </Card>
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

export default Compitions;
