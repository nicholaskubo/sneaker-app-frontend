import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import { withRouter } from "react-router"
import { deleteComment } from "../redux/actions/deleteComment";
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  root: {
   textAlign:"left"
  },
  comment: {
      marginTop: 5,
      width:240,
      marginBottom: 10
  },
  avatar: {
      height: 28,
      width: 28,
      marginBottom: -20
  },
  userName: {
      marginLeft: 35,
      marginTop: -23.3,
      color:"red", 
      fontSize: 13,
  },
  comment2: {
      marginTop: 1,
      marginLeft: 44,
      marginBottom: 2
  },
  button: {
      float: "right",
      marginTop: -28
  }
});

const ProfileComment = (props) => {
  const classes = useStyles();
  const user = props.users.find(u=> u.id == props.comment.user_id)
  return (
    <div className={classes.root}>
        <Paper className={classes.comment} variant="outlined">
        <Avatar alt="Avatar" className={classes.avatar} src={`${user.image}`}/>
        <Link to={`/user/${props.comment.user_id}`}  style={{ textDecoration: 'none' }}>
            <Typography className={classes.userName} > {user.username}</Typography>
        </Link>
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