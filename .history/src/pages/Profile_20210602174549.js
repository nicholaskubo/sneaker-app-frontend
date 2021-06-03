import React, {useState, useEffect} from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import Bio from "../components/Bio";
import AddShoe from "../components/AddShoe";
import UserShoeCardContainer from "../components/UserShoeCardContainer";
import UserLikesCardContainer from "../components/UserLikesCardContainer";
import { fetchAllShoes } from "../redux/actions/fetchAllShoes";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttons: {
        marginTop: 10,
        float: "right"
        marginRight:  10
    }
  }));

const Profile = (props) => {
 
    let {fetchAllShoes} = props

    const scrollToTop = () => {
        window.scrollTo(0,0);
      }

    useEffect(() => {
        scrollToTop();
        fetchAllShoes();
    }, [])

    // const [favorites, setFavorites] = useState(false);

    const [toggleFav, setToggleFav] = useState(true)

    const buttonHandler = () => {
        setToggleFav(current => !current)
      }
   
    
    const user_id= props.location.pathname.split("/")[2]

    const user_likes = props.likes.filter(l => l.user_id == user_id).map(t => t.user_shoe_id)
    
    const classes = useStyles();

    return (
        <div>
            <Bio user_shoes={props.user_shoes.filter(s => s.user.id == user_id)}></Bio> 
             {localStorage.getItem("user_id") == user_id ? <AddShoe shoes={props.shoes}></AddShoe> : null }
             <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
                onClick={() => {
                  buttonHandler()
                }
                }
              >
                {toggleFav? "View My Likes" : "My Closet"}
              </Button>
              {toggleFav ?
            <UserShoeCardContainer user_shoes={props.user_shoes.filter(s => s.user.id == user_id)} likes={props.likes} comments={props.comments} ></UserShoeCardContainer>
                :
            <UserLikesCardContainer user_shoes={props.user_shoes} likes={props.likes} comments={props.comments} user_likes={user_likes} ></UserLikesCardContainer>
              }
        </div>
    )
}

    const mapStateToProps = (state) => {
        return {
            user_shoes: state.shoes.user_shoes,
            shoes: state.shoes.shoes,
            likes: state.shoes.likes,
            comments: state.shoes.comments
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchAllShoes: () => dispatch(fetchAllShoes())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));