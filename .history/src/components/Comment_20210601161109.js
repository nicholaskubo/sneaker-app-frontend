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

export default function Comment(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
          <Card>
              {props.comment}
          </Card>
   
    </div>
  );
}