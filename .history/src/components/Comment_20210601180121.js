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
   textAlign:"left"
  },
  comment: {
      marginTop: 5,
      width:430,
      marginLeft:20

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
  },
  comment2: {
      marginTop:-1
  }
});

const Comment = (props) => {
  const classes = useStyles();
  const user = props.users.find(u=> u.id == props.comment.user_id)
  return (
    <div className={classes.root}>
        <Paper className={classes.comment} variant="outlined">
        <Avatar alt="Avatar" className={classes.avatar} src={`${user.image}`}/>
            <div className={classes.userName} > {user.username}</div>
            <div className={classes.comment2}> {props.comment.content} </div> 
        </Paper>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        users: state.shoes.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => dispatch(addComment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comment));