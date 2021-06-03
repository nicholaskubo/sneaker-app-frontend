import React, { useEffect } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { fetchAllUserShoes } from "../redux/actions/fetchAllUserShoes";
import { fetchAllLikes } from "../redux/actions/fetchAllLikes";
import { fetchAllComments } from "../redux/actions/fetchAllComments";
import { fetchAllUsers } from "../redux/actions/fetchAllUsers";
import ShoeCardContainer from "../components/ShoeCardContainer";


const Home = (props) => {

    let {fetchAllUserShoes, fetchAllLikes, fetchAllComments, fetchAllUsers } = props


    useEffect(() => {
        fetchAllUserShoes();
        fetchAllLikes();
        fetchAllComments();
        fetchAllUsers();
    }, [])

    return (
        <div>
             <ShoeCardContainer user_shoes={props.user_shoes} likes={props.likes} comments={props.comments} users={props.users}></ShoeCardContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user_shoes: state.shoes.user_shoes,
        likes: state.shoes.likes,
        comments: state.shoes.comments,
        users: state.shoes.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUserShoes: () => dispatch(fetchAllUserShoes()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));