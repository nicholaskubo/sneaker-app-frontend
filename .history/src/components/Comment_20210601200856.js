import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";
import { withRouter } from "react-router"
import { deleteComment } from "../redux/actions/deleteComment";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
   textAlign:"left"
  },
  comment: {
      marginTop: 5,
      width:430,
      marginBottom: 10
  },
  avatar: {
      height: 28,
      width: 28,
      marginBottom: -20
  },
  userName: {
      marginRight: 280,
      marginLeft: 35,
      color:"red", 
  },
  comment2: {
      marginTop: 1,
      marginLeft: 50,
      marginBottom: 2
  },
  button: {
      float: "right",
      marginBottom: 20
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
            {
           localStorage.getItem("user_id") == props.comment.user_id ?
          <Button className={classes.button} onClick={() => props.deleteComment(props.comment)} size="small" color="primary">
            Delete
          </Button>
          :
          null
        } 
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
        deleteComment: (comment) => dispatch(deleteComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comment));