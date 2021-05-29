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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "auto",
    marginBottom: 20,
    marginTop: 20
  },
  media: {
    height: 140,
    width: 250,
    margin: "auto",
    marginTop: 10
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
          title="User Shoe"
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
        {
          localStorage.getItem("user_id") == props.shoe.user.id ?
          <Button size="small" color="primary">
            Edit
          </Button> 
          :
          null
        } 
          <Link to={`/user_shoe/${props.shoe.id}`} className={classes.names} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              More Info
            </Button>
          </Link>
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
