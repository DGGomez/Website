import React from 'react';

const Card = (props) => {
  return (
    <div className="footercard" style={styles.containerStyle}>
      <div className="card-body">

        <p className="card-text"  style={styles.contentStyle}>{props.children}</p>
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    height: '150px',
    width: "250px",
    marginLeft: "5px",
    marginRight: "10px",
  },
  contentStyle: {
    height: "150px",
  }
};

export default Card;
