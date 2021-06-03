import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: "auto",
    },
  },
  comment: {
      marginTop: 5
  }
}));

export default function Comment(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.comment} variant="outlined">
      <Avatar alt="Avatar" className={classes.avatar} src={`${props.shoe.user.image}`}/>
      {props.user.username}
          <Card>
              
              {props.comment}
          </Card>
      </Paper>
    </div>
  );
}