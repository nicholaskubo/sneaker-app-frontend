import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
    
      marginRight: 230,
      marginLeft: 5
  }
}));

const Comment = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.comment} variant="outlined">
      <Avatar alt="Avatar" className={classes.avatar} src={`${props.user.image}`}/>
        <div className={classes.userName}> {props.user.username}</div>
        <div className={classes.comment2}> {props.comment} </div> 
      </Paper>
    </div>
  );
}

// const mapStateToProps = (state) => {
//     return {
//         user_shoes: state.shoes.user_shoes,
//         likes: state.shoes.likes,
//         comments: state.shoes.comments
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchAllUserShoes: () => dispatch(fetchAllUserShoes()),
//         fetchAllLikes: () => dispatch(fetchAllLikes()),
//         fetchAllComments: () => dispatch(fetchAllComments())
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Comment));