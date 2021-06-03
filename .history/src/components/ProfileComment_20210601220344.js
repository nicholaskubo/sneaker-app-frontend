import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
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

});

const ProfileComment = (props) => {
  const classes = useStyles();
  const user = props.users.find(u=> u.id == props.comment.user_id)
  return (
    <div className={classes.root}>
        <Paper className={classes.comment} variant="outlined">
        <Avatar alt="Avatar" className={classes.avatar} src={`${user.image}`}/>
        <Typography className={classes.userName} > {user.username}</Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileComment));