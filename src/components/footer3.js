import React from 'react';
import FooterCard from './cards/FooterCard';
const Footer3 = () => {
  return (
  <div id="footer3">
  <div style={styles.projectsContainer}>
      <FooterCard>
          <h5 >Ryerson University</h5>
          <p >350 Victoria St, Toronto, ON M5B 2K3</p>
      </FooterCard>
      <FooterCard>
          <h5 >
              Contacts
          </h5>
          <p >Email: daniel.gomez@ryerson.ca<br/>Phone: (647) 706 8563<br/><br/>
          </p>
      </FooterCard>
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

export default Footer3;
