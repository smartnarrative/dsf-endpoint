import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  inline: {
    display: 'inline'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: theme.spacing(4),  
  },
  copyLink: {
    textDecoration: 'none',
    marginRight: theme.spacing(1),  
  },
  channelGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));

const gitHub="https://github.com/smartnarrative";

const SmartGreenCapital = () => {
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
                <Link to="/" className={classes.link}>
                  Home
                </Link>
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
        <Container className={classes.channelGrid} maxWidth="lg">
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Smart Green Capital
            </Typography>
        </Container>
        <div>
          <Paper className={classes.root}>
            <Typography component="p">
            <a className={classes.copyLink} href="https://smartgreencapital.io" target="_blank" rel="noopener noreferrer">
              Smart Green Capital Inc.</a>(SGC) is the first member of the Smart Narrative Network.
              Focusing on the intersection of fintech and environmental, social and corporate governance (ESG),
              SGC will create smart narratives to provide governance and financing for projects that fit the
              narrative framework. 
            </Typography><br/>
          </Paper>
        </div>
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

export default withRouter(SmartGreenCapital);