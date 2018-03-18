import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="display-4">Daniel Gomez</h1>
        <p className="lead">Software Developer</p>
        <p className="email">Daniel.Gomez@ryerson.ca</p>
        </div>
        <div id="about">
          <div>
            <h3>About</h3>
          </div>
          <div style={styles.projectsContainer}>
            <p >
              I am a second year Computer Science Undergraduate student at Ryerson University.<br/>
      I am currently apart of the Ryerson competitive coding club and working on my own app in my spare time.

            </p>
            <hr/>
            </div>

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

export default Header;
