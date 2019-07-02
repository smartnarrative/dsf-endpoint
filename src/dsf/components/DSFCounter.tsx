import React, { useState, useEffect, Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      padding: theme.spacing(2,0,0),
    },
  }),
);

export default function DSFCounter() {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  }
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });
  
  return (
    <Fragment>
      <Typography className={classes.root} color="primary" align="center" variant="h5">
        {date.toLocaleTimeString('EN-US')}
      </Typography>
    </Fragment>
  );
}