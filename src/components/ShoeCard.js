import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin: "auto",
      marginBottom: 20,
    },
    media: {
      height: 140,
    },
  });

export default function UserShoeCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${props.shoe.shoe.image}`}
          src="img"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.shoe.shoe.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Size: {props.shoe.size}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Condition: {props.shoe.condition}/10
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Description: {props.shoe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* { localStorage.getItem("user_id") == props.shoe.user_id ?
            <Button size="small" color="primary"> Like</Button>
            :null
        }        */}
        <Button size="small" color="primary"> Like</Button>
        <Button size="small" color="primary">
          More Info
        </Button>
        <Link to={`/user/${props.shoe.user.id}`} className={classes.names} style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            {props.shoe.user.username}'s Profile
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
