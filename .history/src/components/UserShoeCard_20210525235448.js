import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { deleteUserShoe } from '../redux/actions/deleteUserShoe';

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

const UserShoeCard = (props) => {
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
        <Button size="small" color="primary">
          Edit
        </Button>
        {
          localStorage.getItem("user_id") == props.shoe.user.id ?
          <Button size="small" color="primary">
            More Info
          </Button> 
          :
          null
        } 
        {
           localStorage.getItem("user_id") == props.shoe.user.id ?
          <Button onClick={() => props.delete_user_shoe(props.shoe)} size="small" color="primary">
            Delete
          </Button>
          :
          null
        } 
      </CardActions>
    </Card>
  );
}



const mapDispatchToProps = (dispatch) => {
    return {
        delete_user_shoe: (user_shoe) => dispatch(deleteUserShoe(user_shoe))
    }
}

export default connect(null, mapDispatchToProps)(UserShoeCard);
