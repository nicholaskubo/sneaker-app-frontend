import React, { useEffect} from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import Bio from "../components/Bio";
import AddShoe from "../components/AddShoe";
import UserShoeCardContainer from "../components/UserShoeCardContainer";
import { fetchAllShoes } from "../redux/actions/fetchAllShoes";
// import { useHistory } from "react-router-dom";

const Profile = (props) => {
 
    let {fetchAllShoes} = props

    const scrollToTop = () => {
        window.scrollTo(0,0);
      }

    useEffect(() => {
        scrollToTop();
        fetchAllShoes();
    }, [])
    
    const user_id= props.location.pathname.split("/")[2]

    return (
        <div>
            <Bio user_shoes={props.user_shoes.filter(s => s.user.id == user_id)}></Bio> 
             {localStorage.getItem("user_id") == user_id ? <AddShoe shoes={props.shoes}></AddShoe> : null }
            <UserShoeCardContainer user_shoes={props.user_shoes.filter(s => s.user.id == user_id)} ></UserShoeCardContainer>
        </div>
    )
}

    const mapStateToProps = (state) => {
        return {
            user_shoes: state.shoes.user_shoes,
            shoes: state.shoes.shoes
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchAllShoes: () => dispatch(fetchAllShoes())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));