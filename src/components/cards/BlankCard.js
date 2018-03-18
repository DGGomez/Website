import React from 'react';

const Card = (props) => {
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
    height: '230px',
    width: "800px",
    marginLeft: "5px",
    marginRight: "10px",
  },
  contentStyle: {
    height: "150px",
    flexDirection: 'column'
  }
};

export default Card;
