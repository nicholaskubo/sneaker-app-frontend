import React, {useState } from 'react';
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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { addLike } from '../redux/actions/addLike';
import { deleteLike } from '../redux/actions/deleteLike';
import { addComment } from "../redux/actions/addComment";
import ProfileComment from "./ProfileComment";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "auto",
    marginTop: 20
  },
  media: {
    height: 140,
    width: 260,
    margin: "auto",
    marginTop: 28
  },
  moreInfo: {
    margin: "auto",
    marginTop: -25,
    marginBottom: -20
  },
  time: {
    fontSize: 10,
    float: "right",
    fontWeight: "bold"
  },
  buttons: {
    justifyContent:"center"
  },
  commentButton: {
    marginTop: 8
  }
});

const UserShoeCard = (props) => {
  const classes = useStyles();
  const comments = props.comments
  const [comment, setComment] = useState('');

  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " Years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " Months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " Days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " Hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " Minutes";
    }
    return Math.floor(seconds) + " Seconds";
};

let timeAgo = timeSince(new Date(props.shoe.created_at));

const submitAddLike = () => {
  let new_like = {
      user_shoe_id: props.shoe.id,
      user_id: localStorage.getItem("user_id"),
  }
  props.addLike(new_like)
}

const handleChange = (event, type) => {
  let stateMap = {
      comment: (event) => setComment(event.target.value)
  };
  stateMap[type](event);
}

const submitAddComment = () => {
  let new_comment = {
      user_shoe_id: props.shoe.id,
      user_id: localStorage.getItem("user_id"),
      content: comment
  }
  props.addComment(new_comment)
}

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardContent>
          <Typography className={classes.time} color="secondary" gutterBottom variant="h6" component="h2">
            {timeAgo} Ago
          </Typography>
      </CardContent>
        <CardMedia
          className={classes.media}
          image={props.shoe.shoe.image == null ? "https://t3.ftcdn.net/jpg/03/49/45/70/360_F_349457036_XWvovNpNk79ftVg4cIpBhJurdihVoJ2B.jpg" : `${props.shoe.shoe.image}`}
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
      <CardActions className={classes.buttons}>
        {props.likes.filter(l => l.user_id == localStorage.getItem("user_id")).find(l => l.user_shoe_id == props.shoe.id) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        
        <div> {props.likes.filter(l => l.user_shoe_id == props.shoe.id).length} </div>
        
        { localStorage.getItem("user_id") && (props.likes.filter(l => l.user_id == localStorage.getItem("user_id")).find(l => l.user_shoe_id == props.shoe.id) ?
        <Button size="small" color={"secondary"} onClick={(e) => props.deleteLike(props.likes.filter(l => l.user_id == localStorage.getItem("user_id")).find(l => l.user_shoe_id == props.shoe.id))}> Unlike</Button>
        :
        <Button size="small" color={"primary"}  onClick={(e) => submitAddLike()}> Like</Button>)
        }
        {
        localStorage.getItem("user_id") == props.shoe.user.id ?
         <DeleteIcon/>
         :
         null
        }
        {
           localStorage.getItem("user_id") == props.shoe.user.id ?
          <Button onClick={() => props.deleteUserShoe(props.shoe)} size="small" color="primary">
            Delete
          </Button>
          :
          null
        } 
      </CardActions>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>More Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CardContent className={classes.moreInfo}>
          {
            props.shoe.shoe.brand && (
                  <Typography variant="subtitle2">
                      Brand: {props.shoe.shoe.brand}
                  </Typography>
            )
          } 
          {
            props.shoe.shoe.silhouette && (
                  <Typography variant="subtitle2" >
                      Silhouette: {props.shoe.shoe.silhouette}
                  </Typography>
           )
          }
          {
            props.shoe.shoe.colorway && (
                  <Typography variant="subtitle2" >
                      Colorway: {props.shoe.shoe.colorway}
                  </Typography>
           )
          }
          {
            props.shoe.shoe.release_date && (
                  <Typography variant="subtitle2" >
                      Release Date: {props.shoe.shoe.release_date}
                  </Typography>
           )
          }
          {
            
              props.shoe.shoe.retail_price == "0" || props.shoe.shoe.retail_price == null  ? null :  <Typography variant="subtitle2" > Retail Price: ${props.shoe.shoe.retail_price}  </Typography>
           
          }
          {
            props.shoe.shoe.gender && (
                  <Typography variant="subtitle2" >
                      Gender: {props.shoe.shoe.gender}
                  </Typography>
           )
          }
          {
            props.shoe.shoe.sku && (
                  <Typography variant="subtitle2" >
                      SKU: {props.shoe.shoe.sku}
                  </Typography>
           )
          }
          
          </CardContent>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CardContent className={classes.moreInfo}>
        {props.comments.filter(l => l.user_shoe_id == props.shoe.id).map(c => <ProfileComment key={c.id} comment={c} comments={comments}/>)}
        { localStorage.getItem("user_id") ?
          <TextField
            className={classes.comment}
            id="outlined-multiline-flexible"
            label="Comment"
            multiline
            rowsMax={4}
            value={comment}
            onChange={(event) => handleChange(event, "comment")}
            variant="outlined"
            style={{ width: "100%" }}
          />
          :null}
         { localStorage.getItem("user_id") ?
           <Button size="small" className={classes.commentButton} color={"primary"} onClick={(e) => submitAddComment()}>Add Comment</Button> 
        : null }
          </CardContent>
        </AccordionDetails>
      </Accordion>
    </Card>
    
  );
}



const mapDispatchToProps = (dispatch) => {
    return {
      deleteUserShoe: (user_shoe) => dispatch(deleteUserShoe(user_shoe)),
      addLike: (like) => dispatch(addLike(like)),
      deleteLike: (like) => dispatch(deleteLike(like)),
      addComment: (comment) => dispatch(addComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(UserShoeCard);
