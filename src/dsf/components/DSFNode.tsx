import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AttachMoneyIcon from  '@material-ui/icons/AttachMoney';
import BubbleChartIcon from  '@material-ui/icons/BubbleChart';
import WidgetsIcon from  '@material-ui/icons/Widgets';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TransitionProps } from '@material-ui/core/transitions';
import { DSFStack } from '../types/DSFStack';
import { DSFLayer, initDSFLayerMap } from '../types/DSFLayer';
import { DSFChannel, initDSFChannelMap } from '../types/DSFChannel';
import { DSFEpic, initDSFEpicMap  } from '../types/DSFEpic';
import { DSFStory, DSFStoryType, initDSFStory } from '../types/DSFStory';
import { mockSchedule } from '../mock/dsf_actus_mock_schedule';
import { genesisEvents, knowledgeEvents, portfolioEvents, communicationEvents, salesEvents } from '../mock/dsf_mock_event_series';
import { DSFEventContainer } from '../types';

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabContainer(props:any) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  epicGrid: {
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
  epic: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    height: '4rem',
    display: 'flex',
    flexDirection: 'column',
  },
  epicContent: {
    width: '100%',
    flexGrow: 1,
  },
  event: {
    margin: theme.spacing(0.5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    flex: 1,
  },
  table: {
    minWidth: 650,
    overflowX: 'auto',
  },
  chainTool: {
    marginLeft: theme.spacing(8),
    padding: theme.spacing(8),
  },
}));

const eventStream:any = [];
eventStream.push(genesisEvents);
eventStream.push(knowledgeEvents);
eventStream.push(portfolioEvents);
eventStream.push(communicationEvents);
eventStream.push(salesEvents);

const epics: Array<DSFEpic> = initDSFEpicMap();
epics.forEach((e, i) => {
  // Create one story with four mock events
  const storyName:DSFStoryType = DSFStoryType.INIT;
  let story: DSFStory = initDSFStory(storyName);
  switch(i) {
    case 0 :
        story.storyType = DSFStoryType.INCORPORATE
      break;
    case 1 :
        story.storyType = DSFStoryType.INNOVATION
        break;
    case 2 :
        story.storyType = DSFStoryType.PORTFOLIO
      break;
    case 3 :
        story.storyType = DSFStoryType.CAMPAIGN
      break;
    case 4 :
        story.storyType = DSFStoryType.SALES
      break;
    default :
      break;
  }
  eventStream[i].forEach((e:any) => {
    story.eventMap.push(e);
  })
  e.storyMap.push(story);
});
const channels: Array<DSFChannel> = initDSFChannelMap();
const layers: Array<DSFLayer> = initDSFLayerMap();
const dsfStack: DSFStack = {
  layerMap: layers
};

// For each layer, add epics
dsfStack.layerMap.forEach(l => {
  // For each epic, add channels
  l.epicMap = epics;
  l.epicMap.forEach(e => {
    e.channelMap = channels;
  });
});

const actusTitles = [
  'Event Date', 
  'Event Type', 
  'Event Value', 
  'Nominal Value', 
  'Nominal Rate', 
  'Nominal Accrued',
];

export default function DSFNode() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [actusHeader, showActusHeader] = useState(false);
  const [chainHeader, showChainHeader] = useState(false);
  // eslint-disable-next-line
  const [actusSchedule, showActusSchedule] = useState(false);
  const [actusLoan, showActusLoan] = useState(false);
  const [chainTool, showChainTool] = useState(false);
  
  function handleActusClick() {
    setOpen(true);
    showActusHeader(true);
    showActusLoan(true);
  }

  function handleChainClick() {
    setOpen(true);
    showActusHeader(false);
    showChainHeader(true);
    showChainTool(true);
  }

  function handleClose() {
    showActusSchedule(false);
    showActusLoan(false);
    showChainHeader(false);
    showChainTool(false);
    setOpen(false);
  }

  // eslint-disable-next-line 
  function computeSchedule() {
    showActusSchedule(true);
    showActusLoan(true);
  }

  function handleChange(event:any, newValue:any) {
    setValue(newValue);
  };

  const displayEvent = (event:DSFEventContainer) => {
    alert(event.channel + ' EVENT : STREAM = ' + event.source);
  };
  
  const addDecimal = (s:string): string => {
    if(s[0] !== '0') {
      let p = '.';
      const pos = 2;
      s = [s.slice(0,pos), p, s.slice(pos)].join('');
    }
    return s;
  };

  const channelIcon = (event: DSFEventContainer): any => {
    let iconName:any;
    switch (event.channel) {
      case 'GOVERNANCE' :
        iconName = <AccountBalanceIcon/>;
        break;
      case 'FINANCE' :
          iconName = <AttachMoneyIcon/>;
        break;
      case 'MARKETING' :
          iconName = <BubbleChartIcon/>;
        break;
      case 'PRODUCTION' :
          iconName = <WidgetsIcon/>;
        break;
      default :
        break;
    }
    return iconName;
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <ButtonGroup size="small" color="primary" >
          <Button variant="outlined" onClick={handleActusClick}>
            Actus Tool
          </Button>
          <Button variant="outlined" onClick={handleChainClick}>
            Chain Tool
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Enterprise" />
              <Tab label="Technology" />
              <Tab label="Personal" />
            </Tabs>
              {value === 0 && 
              <Container className={classes.epicGrid} maxWidth="xl">
                <Grid container direction="column" spacing={0}>
                  {epics.map((epic, epicIndex) => (
                    <Grid item key={epicIndex} xs={12}>
                      <Paper className={classes.epic}>
                        <Typography variant="body1" color="textPrimary" align="left">
                          {epic.type} Epic - Story: {epic.storyMap[0].storyType}
                        </Typography>
                        <Grid container direction="column" justify="center">
                          {epic.storyMap[0].eventMap.map((event, eventIndex) => (
                            <Grid item key={eventIndex} xs={2} sm={1}>
                              <Fade in={true} timeout={event.delay}>
                               <Chip size="small"
                                  className={classes.event} 
                                  icon={channelIcon(event)}
                                  label={event.label}
                                  clickable
                                  onClick={() => displayEvent(event)}
                                  color="primary" 
                                />
                              </Fade>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            }
            {value === 1 && 
              <Container className={classes.epicGrid} maxWidth="xl">
                <Grid container direction="column" spacing={0}>
                  {epics.map((epic, epicIndex) => (
                    <Grid item key={epicIndex} xs={12}>
                      <Paper className={classes.epic}>
                        <Typography variant="body1" color="textPrimary" align="left">
                          {epic.type} Epic - Story: {epic.storyMap[0].storyType}
                        </Typography>
                        <Grid container direction="column" justify="center">
                          {epic.storyMap[0].eventMap.map((event, eventIndex) => (
                            <Grid item key={eventIndex} xs={2} sm={1}>
                              <Fade in={true} timeout={event.delay}>
                               <Chip size="small"
                                  className={classes.event}  
                                  icon={channelIcon(event)}
                                  label={event.label}
                                  clickable
                                  onClick={() => displayEvent(event)}
                                  color="primary" 
                                />
                              </Fade>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            }
            {value === 2 && 
              <Container className={classes.epicGrid} maxWidth="xl">
                <Grid container direction="column" spacing={0}>
                  {epics.map((epic, epicIndex) => (
                    <Grid item key={epicIndex} xs={12}>
                      <Paper className={classes.epic}>
                        <Typography variant="body1" color="textPrimary" align="left">
                          {epic.type} Epic - Story: {epic.storyMap[0].storyType}
                        </Typography>
                        <Grid container direction="column">
                          {epic.storyMap[0].eventMap.map((event, eventIndex) => (
                            <Grid item key={eventIndex} xs={2} sm={1}>
                              <Fade in={true} timeout={event.delay}>
                               <Chip size="small"
                                  className={classes.event}  
                                  icon={channelIcon(event)}
                                  label={event.label}
                                  clickable
                                  onClick={() => displayEvent(event)}
                                  color="primary" 
                                />
                              </Fade>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            }
        </Grid>
      </Grid>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            { actusHeader && (
              <div>
                <Typography variant="h6" className={classes.title}>
                  ACTUS Solidity Tool
                </Typography>
              </div>
            )}
              <Box display="flex" flexDirection="row" p={1} m={1}>
                {( actusLoan && 
                  <div>
                  <Button color="inherit" onClick={handleClose}>
                    Fund Loan
                  </Button>
                  </div>
                  )}
              </Box>    
            { chainHeader && (
              <div>
              <Typography variant="h6" className={classes.title}>
                DSF Chain Tool
              </Typography>
            </div>
            )}
            { chainHeader && (
              <Button color="inherit" onClick={handleClose}>
                Publish JSON Object to IPFS
              </Button>
            )}
          </Toolbar>
        </AppBar>
        { actusHeader && (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>{actusTitles[0]}</TableCell>
                <TableCell align="right">{actusTitles[1]}</TableCell>
                <TableCell align="right">{actusTitles[2]}</TableCell>
                <TableCell align="right">{actusTitles[3]}</TableCell>
                <TableCell align="right">{actusTitles[4]}</TableCell>
                <TableCell align="right">{actusTitles[5]}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {mockSchedule.map((s, i) => (
                  <TableRow key={i}>
                    <TableCell>{s.eventDate}</TableCell>
                    <TableCell align="right">{s.eventType}</TableCell>
                    <TableCell align="right">{
                      s.eventType === 'IED' ? 
                      s.eventValue.substring(0,5) : 
                      (s.eventType === 'IP' ? addDecimal(s.eventValue.substring(0,4)) : s.eventValue.substring(0,4))
                      }</TableCell>
                    <TableCell align="right">{s.nominalValue.substring(0,4)}</TableCell>
                    <TableCell align="right">{s.nominalRate}</TableCell>
                    <TableCell align="right">{s.nominalAccrued}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
          { chainTool && (
            <Grid container direction="column" spacing={4} justify="center" className={classes.chainTool}>
              {dsfStack.layerMap.map((layer, layerIndex) => (
                <Grid item key={layerIndex}>
                  Layer: {layer.type}
                  <Grid container  direction="column" spacing={1}>
                  {layer.epicMap.map((epic, epicIndex) => (
                    <Grid item key={epicIndex}>
                      Epic: {epic.type}
                      <Grid container  direction="column" spacing={1}>
                        {epic.storyMap.map((story, storyIndex) => (
                          <Grid item key={storyIndex}>
                            Story: {story.storyType}
                            <Grid container  direction="column" spacing={1}>
                              {story.eventMap.map((event, eventIndex) => (
                                <Grid item key={eventIndex}>
                                  Event: {event.channel} {event.source}
                                </Grid>
                              ))}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )}
      </Dialog>
    </div>
  );
}
