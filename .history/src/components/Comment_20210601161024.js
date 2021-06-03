import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: "auto",
      height: 60
    },
  },
}));

export default function Comment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
          <Card>
              {props.comment}
          </Card>
      </Paper>
    </div>
  );
}