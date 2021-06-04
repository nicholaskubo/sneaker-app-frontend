import React, { useState } from 'react';
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { editUser } from "../redux/actions/editUser";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    marginTop: 6,
    marginBottom: -4,
    color: "#b30000",
    fontWeight: 600
  },
  pos: {
    marginBottom: 12,
  },
  closet: {
    marginBottom: 18,
  },
  avatar: {
      height: 100,
      width: 100,
      margin: "auto",
      marginBottom: 21
  },
  editButton: {
    marginTop: 12,
    height: 20
  },
  bio: {
    fontSize:16
  },
  form: {
    marginTop: 10
  },
  addButton: {
    
  }
});

const Bio = (props) => {
  const userX = props.users.find(u=> u.id == props.location.pathname.split("/")[2])
  
  const classes = useStyles();
  const [bio, setBio] = useState(userX.bio);
  const [image, setImage] = useState(userX.image);
 

  const [toggleEdit, setToggleEdit] = useState(true)

  const buttonHandler = () => {
      setToggleEdit(current => !current)
    }

  const handleChange = (event, type) => {
    let stateMap = {
        bio: (event) => setBio(event.target.value),
        image: (event) => setImage(event.target.value)
    };
    stateMap[type](event);
 }

 const submitEdit = (e) => {
  e.preventDefault();

  let user_id = props.location.pathname.split("/")[2]

  let user = {
      id: user_id,
      bio: bio,
      image: image,

  }
  props.editUser(user)
}
// const user = props.users.find(u=> u.id == props.user_shoes[0].user.id)
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {
          props.user_shoes[0] ?
          <Typography className={classes.title} gutterBottom>
          {props.users.find(u=> u.id == props.user_shoes[0].user.id).username.toUpperCase()}'S
          </Typography>
          :
          <Typography className={classes.title} gutterBottom>
          {userX.username.toUpperCase()}'S
          </Typography>
        }
        <Typography variant="h5" className={classes.closet} component="h2">
          Sneakers Closet
        </Typography>
        {
          props.user_shoes[0] ?
          <Avatar alt="Avatar" className={classes.avatar} src={props.users.find(u=> u.id == props.user_shoes[0].user.id).image } />
          :
          <Avatar alt="Avatar" className={classes.avatar} src={localStorage.getItem("image")} />
        }
        {
          props.user_shoes[0] ?
          <Typography variant="body2" component="p" className={classes.bio}>
          {props.users.find(u=> u.id == props.user_shoes[0].user.id).bio} 
          </Typography>
          :
          <Typography variant="body2" component="p" className={classes.bio}>
          {localStorage.getItem("bio")} 
          </Typography>
        } 
        {localStorage.getItem("user_id") == props.location.pathname.split("/")[2]?
          <Button
            className={classes.editButton}
            variant="contained"
            color="primary"
            onClick={() => {
              buttonHandler()
            }
            }
          >
            {toggleEdit ? "Edit Bio" : "Close"}
          </Button>
          :
          null}
          
          {toggleEdit ? null :
            <Grid className={classes.form} container spacing={3}>
                <Grid item xs={6}>
                <TextField
                  className={classes.bio}
                  id="outlined-multiline-flexible"
                  label="Bio"
                  multiline
                  rowsMax={4}
                  value={bio}
                  onChange={(event) => handleChange(event, "bio")}
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                  className={classes.image}
                  id="outlined-multiline-flexible"
                  label="Image"
                  multiline
                  rowsMax={4}
                  value={image}
                  onChange={(event) => handleChange(event, "image")}
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                </Grid>
              
                <Button
                  className={classes.addButton}
                  variant="contained"
                  style={{ marginLeft: 240 }}
                  color="secondary"
                  startIcon={<ArrowUpwardIcon />}
                  type="submit"
                  onClick={(e) => submitEdit(e)}
                  >
                  Save Changes
              </Button>
              </Grid>
            
           }
      </CardContent>
     
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
      // user_shoes: state.shoes.user_shoes.filter(s => s.user.id ==1)
      users: state.shoes.users
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      editUser: (user) => dispatch(editUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Bio));

