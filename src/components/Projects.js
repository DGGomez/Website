import React from 'react';

import Card from './cards/Card';

const Projects = () => {
  return (
    <div id="projects">
      <div>
        <h3>Projects</h3>
      </div>
      <div style={styles.projectsContainer}>
        <Card title="City Reporting" url="https://github.com/DGGomez/City-Problems-Reporting-Program">
          {`Java GUI that reports problems around the city and then ranks them based on number of reports to give priority`}
        </Card>
        <Card title="Lifter" url="https://github.com/DGGomez/Lifter">
          {`Currently not working. App to find a gym partner based on gym address. Has base template RESTful api made in node js, express, and mongoose. Front end made with react-native.`}
        </Card>
      </div>
      <div style={styles.footerStyle}>
        <a href="https://github.com/dggomez" className="btn btn-primary">
          <span>More projects on Github <i class="fas fa-chevron-circle-right"></i></span>
        </a>
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

export default Projects;
