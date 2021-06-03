import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";
import { withRouter } from "react-router"

import { addComment } from "../redux/actions/addComment";


const useStyles = makeStyles({
  root: {
    display: 'flex',
    '& > *': {
      margin: "auto",
    },
  },
  comment: {
      marginTop: 5,
      width:430,

  },
  avatar: {
      height: 30,
      width: 30,
      marginBottom: -20
  },
  userName: {
      marginRight: 280,
      marginLeft: 5,
      color:"red", 
  }
});

const Comment = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.comment} variant="outlined">
      <Avatar alt="Avatar" className={classes.avatar} src={`${props.user.image}`}/>
        <div className={classes.userName} > {props.user.username}</div>
        <div className={classes.comment2}> {props.comment} </div> 
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        user_shoes: state.shoes.user_shoes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => dispatch(addComment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comment));