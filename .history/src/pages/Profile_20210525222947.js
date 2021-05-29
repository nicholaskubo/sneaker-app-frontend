import React, { useEffect } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import Bio from "../components/Bio";
import UserShoeCardContainer from "../components/UserShoeCardContainer";

const Profile = (props) => {

    
    
    // let user= props.users.filter(user => user.username == props.location.pathname.split("/")[2])
    // let user_id = user.map(i => i.id)
    const user= props.location.pathname.split("/")[2]

 

    return (
        <div>
             <Bio user_shoes={props.user_shoes}></Bio>
             <UserShoeCardContainer user_shoes={props.user_shoes.filter(s => s.user.id == user)} ></UserShoeCardContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // user_shoes: state.shoes.user_shoes.filter(s => s.user.id ==1)
        user_shoes: state.shoes.user_shoes
        
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchMyUserShoes: (user_id) => dispatch(fetchMyUserShoes(user_id))
//     }
// }

export default connect(mapStateToProps)(withRouter(Profile));