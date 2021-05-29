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

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "auto",
    marginBottom: 20,
    marginTop: 20
  },
  media: {
    height: 140,
    width: 260,
    margin: "auto",
    marginTop: 10
  },
  moreInfo: {
    margin: "auto",
    marginTop: -25,
    marginBottom: -20
  }
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
          {/* <Link to={`/user_shoe/${props.shoe.id}`} className={classes.names} style={{ textDecoration: 'none' }}>
            <Button size="small" color="primary">
              More Info
            </Button>
          </Link> */}
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
          color="primary"
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
            props.shoe.shoe.release_year && (
                  <Typography variant="subtitle2" >
                      Release Year: {props.shoe.shoe.release_year}
                  </Typography>
           )
          }
          {
            props.shoe.shoe.retail_price && (
                  <Typography variant="subtitle2" >
                      Retail Price: {props.shoe.shoe.retail_price}
                  </Typography>
           )
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



const mapDispatchToProps = (dispatch) => {
    return {
      deleteUserShoe: (user_shoe) => dispatch(deleteUserShoe(user_shoe))
    }
}

export default connect(null, mapDispatchToProps)(UserShoeCard);
