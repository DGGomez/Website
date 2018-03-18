import React from 'react';

const AboutCard = (props) => {
  return (
    <div className="card" style={styles.containerStyle}>
      <div className="card-body">

        <p className="card-text"  style={styles.contentStyle}>{props.children}</p>
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    height: '200px',
    width: "400px",
    marginLeft: "5px",
    marginRight: "10px",
  },
  contentStyle: {
    height: "150px",
    flexDirection: 'column',
    fontSize: "20px"
  }
};

export default AboutCard;
