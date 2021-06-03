import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: "auto"
    },
  },
}));

export default function Comment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" />
    </div>
  );
}