import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
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
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    [theme.breakpoints.up('md')]: {
      paddingTop: '0.8em'
    }
  },
  channelGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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

const FAQ = () => {
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
            FAQ
          </Typography>
      </Container>
        <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>What is a smart narrative?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>A smart narrative is a digital asset stored on a blockchain. 
              That asset has two components: <br/>1) A set of narrative objects that represent a DSF instance. 
              Those objects contain a hierarchy of references to events, stories and epics that depict the success of enterprise strategy, as measured by key performance indicators (KPIs) associated with each epic and its story set. The underlying data is stored off-chain on immutable resources like  IPFS. 
              Copies of that data may be stored in the cloud for backup and machine learning.
              <br/>2) A tranche that depicts the present financial state of the enterprise, 
              based on adherence to its KPIs, the predictive results of analyzing that adherence, 
              and consensus on the structure of financial instruments used to fund future state.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Why tokenize enterprise strategy?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              As the fintech world moves closer to a decentralized state, governance becomes more
              important, especially when new classes of investors rely on enterprise knowledge and
              information to help their decision making. Tokenized strategy will provide new levels
              of transparency, as well as the basis for more comprehensive reporting. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Why use the ACTUS protocol?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The ACTUS group has created the most comprehensive taxonomy of smart financial contracts. 
              By recording machine-readable information about secure digital assets, the process of
              enterprise finance enters a new phase of reliability and standardization. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Will decentralized strategy mean that enterprise leaders will lose control?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Not at all. Enterprise leaders will benefit from decentralized governance of critical
              enterprise initiatives. This is not about control, but consensus. As several large tech
              companies have recently discovered, leadership can no longer afford to ignore the
              personal narratives of enterprise constituents. Their authority remains the same, and
              their vision actually increases with the synergy.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Why store so much data on a blockchain?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Real-time events streaming from enterprise feeds will not be stored directly on any blockchain.
              Smart contracts will hold pointers to immutable file systems like IPFS, which have the capacity
              to hold large amounts of data. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Why is consensus so important?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              No enterprise exists in an isolated context. Narrative networks depict the
              growing patterns of interdependence, particularly in the world of finance.
              Centralized, autonomous patterns are not sustainable.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>What does the digital counter represent?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The demo smart narrative app shows a mock stream of four events occuring in
              a short period of time. The counter represents one scale of time measurement.
              The production interface will offer the ability to change that scale, beyond
              the one-second interval the timer represents.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>How will the final product differ from the demo app?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             The final product will be deployed on the Kaleido blockchain, with links to
             the Ethereum mainnet. The Smart Narrative Network will offer consulting
             services to help any enterprise that wants to join. 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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

export default withRouter(FAQ);