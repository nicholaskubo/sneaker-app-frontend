import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: -4,
    color: "#b30000",
    fontWeight: 550
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
      height: 100,
      width: 100,
      margin: "auto",
      marginBottom: 10
  }
});

export default function Bio(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {
          props.user_shoes[0] ?
          <Typography className={classes.title} gutterBottom>
          {props.user_shoes[0].user.username.toUpperCase()}'S
          </Typography>
          :
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          {localStorage.getItem("username")}'s
          </Typography>
        }
        <Typography variant="h5" component="h2">
          Sneakers Closet
        </Typography>
        {
          props.user_shoes[0] ?
          <Avatar alt="Avatar" className={classes.avatar} src={`${props.user_shoes[0].user.image}`} />
          :
          <Avatar alt="Avatar" className={classes.avatar} src={localStorage.getItem("image")} />
        }
        {
          props.user_shoes[0] ?
          <Typography variant="body2" component="p">
          {props.user_shoes[0].user.bio}
          </Typography>
          :
          <Typography variant="body2" component="p">
          {localStorage.getItem("bio")} 
          </Typography>
        }
      </CardContent>
     
    </Card>
  );
}

