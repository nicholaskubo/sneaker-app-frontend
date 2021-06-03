import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from "react-router-dom";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { addLike } from '../redux/actions/addLike';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: "auto",
    marginBottom: 25,
    marginTop: 25
  },
  media: {
    height: 220,
    width: 380,
    margin: "auto",
    marginTop: 38
  },
  moreInfo: {
    margin: "auto",
    marginTop: -25,
    marginBottom: -20
  },
  time: {
    fontSize: 11,
    float: "right",
    fontWeight: "bold"
  }
});

const ShoeCard = (props) => {
  const classes = useStyles();
  let history = useHistory();


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
        // history.push(`/user/props.location.pathname.split("/")[2]`)
      }
        
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <CardContent>
          <Typography className={classes.time} color="secondary" gutterBottom variant="h6" component="h2">
            {timeAgo} Ago
          </Typography>
          <Avatar alt="Avatar" className={classes.avatar} src={`${props.shoe.user.image}`}/>
      </CardContent>
        <CardMedia
          className={classes.media}
          image={props.shoe.shoe.image == null ? "https://t3.ftcdn.net/jpg/03/49/45/70/360_F_349457036_XWvovNpNk79ftVg4cIpBhJurdihVoJ2B.jpg" : `${props.shoe.shoe.image}`}
          src="img"
          title="Shoe"
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
    
      {/* {props.shoe.likes.find(l => l.user_id == localStorage.getItem("user_id")) ? <FavoriteIcon/> : <FavoriteBorderIcon/>} */}

        {/* {
         console.log(props.likes.filter(l => l.user_id == localStorage.getItem("user_id")) )
        // ? <FavoriteIcon/> : <FavoriteBorderIcon/>
        
        } */}
         
        <Button size="small" color="primary" onClick={(e) => submitAddLike()}> Like</Button>
        {/* <Link to={`/user_shoe/${props.shoe.id}`} className={classes.names} style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            More Info
          </Button>
        </Link> */}
        <Link to={`/user/${props.shoe.user.id}`} className={classes.names} style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">
            {props.shoe.user.username}'s Closet
          </Button>
        </Link>
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
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
      
    likes: state.likes
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (like) => dispatch(addLike(like)),
  }
}


export default connect(null, mapDispatchToProps)(withRouter(ShoeCard));
