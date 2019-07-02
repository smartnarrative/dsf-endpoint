import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

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
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  channelGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
}));

const cards = [
  { id: 0, 
    title: 'Consulting', 
    copy1: 'Enterprise strategy', 
    copy2: 'Knowledge management', 
    copy3: 'Competitive Analysis', 
    pricing: 'Fee based'  
  },
  { id: 1, 
    title: 'Solutions', 
    copy1: 'Full-stack platform', 
    copy2: 'API integration', 
    copy3: 'Event stream export', 
    pricing: 'Hourly, daily or weekly rates'   
  },
  { id: 2, 
    title: 'Network', 
    copy1: 'Membership: monthly charge', 
    copy2: 'Smart Contracts', 
    copy3: 'Tokenized strategy', 
    pricing: 'Hourly service charge'    
  },
];

const gitHub="https://github.com/smartnarrative";

const NetworkServices = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}> • </span>;

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
            Network Services
          </Typography>
      </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {bull}{card.copy1}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {bull}{card.copy2}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {bull}{card.copy3}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {bull}{card.pricing}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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

export default withRouter(NetworkServices);