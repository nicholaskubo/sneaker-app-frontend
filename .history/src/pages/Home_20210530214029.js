import React, { useEffect } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { fetchAllUserShoes } from "../redux/actions/fetchAllUserShoes";
import { fetchAllLikes } from "../redux/actions/fetchAllLikes";
import { fetchAllComments } from "../redux/actions/fetchAllComments";
import ShoeCardContainer from "../components/ShoeCardContainer";

const Home = (props) => {

    let {fetchAllUserShoes} = props


    useEffect(() => {
        fetchAllUserShoes();
        fetchAllLikes();
        fetchAllComments();
    }, [])

    return (
        <div>
             <ShoeCardContainer user_shoes={props.user_shoes}></ShoeCardContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user_shoes: state.shoes.user_shoes,
        likes: state.shoes.likes,
        comments: state.shoes.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUserShoes: () => dispatch(fetchAllUserShoes()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllComments: () => dispatch(fetchAllComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));