'use strict';

import React from 'react';
import NavBar from 'components/navbar';
import Paper from 'material-ui/Paper';

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    maxWidth: '800px',
    padding: '25px',
    borderRadius: '10px',
    marginTop: '20px'
  }
};

const PaperLayout = ({title, children}) => (
  <div>
    <NavBar title={title}/>
    <div style={styles.wrapper}>
      <Paper style={styles.container} zDepth={1}>
        {children}
      </Paper>
    </div>
  </div>
);

export default PaperLayout;
