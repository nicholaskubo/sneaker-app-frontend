import React, { useEffect } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { fetchAllUserShoes } from "../redux/actions/fetchAllUserShoes";
import ShoeCardContainer from "../components/ShoeCardContainer";

const Home = (props) => {

    let {fetchAllUserShoes} = props


    useEffect(() => {
        fetchAllUserShoes();
    }, [])

    return (
        <div>
             <ShoeCardContainer user_shoes={props.user_shoes}></ShoeCardContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user_shoes: state.shoes.user_shoes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUserShoes: () => dispatch(fetchAllUserShoes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));