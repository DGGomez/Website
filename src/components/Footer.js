import React from 'react';

const Footer = () => {
  return (

    <div className="footer">

      <div className = "footer-icon">
        <a href="mailto:daniel.gomez@ryerson.ca" style={styles.iconStyle}><i className="fas fa-envelope"></i></a>
        <a href="https://github.com/DGGomez" style={styles.iconStyle}><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/dgomez1/" style={styles.iconStyle}><i className="fab fa-linkedin"></i></a>

      </div>
      </div>

  );
};

const styles = {
  iconStyle: {

    padding: "12px",
    color: 'white',
  },

};

export default Footer;
