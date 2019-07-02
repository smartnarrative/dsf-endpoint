import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import DSFCounter from './DSFCounter';
import DSFNode from './DSFNode';

const useStyles = makeStyles((theme: Theme) => ({
  inline: {
    display: 'inline'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(2),  
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: theme.spacing(2),  
  },
  stackGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));

const gitHub="https://github.com/smartnarrative";

const DSFBackPlane = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static"> 
        <Toolbar>
        <div className={classes.inline}>
          <Typography variant="h5" color="inherit" noWrap>
            <Link to="/" className={classes.link}>
              Smart Narrative™
            </Link>
          </Typography>
        </div>
        </Toolbar>
      </AppBar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <div className={classes.inline}>
            <Typography variant="body1" color="primary" noWrap>
                <Link to="/faq" className={classes.link}>
                  FAQ
                </Link>
                <a className={classes.link} href={gitHub} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Typography>
          </div>
        </Toolbar>
      <main>      
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Real-time enterprise strategy
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <Link to="/services" className={classes.link}>
                      Network Services
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                  <Link to="/smartgreencapital" className={classes.link}>
                    Smart Green Capital
                  </Link>
                  </Button>
                </Grid>
              </Grid>
              <DSFCounter />
            </div>
          </Container>
        </div>
        <Container className={classes.stackGrid} maxWidth="lg">
          <DSFNode />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          ©2019 Smart Narrative Inc. All Rights Reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Smart Narrative is a trademark of WL Solutions LLC
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default withRouter(DSFBackPlane);