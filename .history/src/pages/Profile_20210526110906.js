import React, { useEffect, useState } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import Bio from "../components/Bio";
import UserShoeCardContainer from "../components/UserShoeCardContainer";
import { fetchAllShoes } from "../redux/actions/fetchAllShoes";
import { useHistory } from "react-router-dom";

const Profile = (props) => {
    const [shoe, setShoe] = useState();
    const [size, setSize] = useState();
    const [condition, setCondition] = useState()
    const [description, setDescription] = useState();
    let history = useHistory();

    const handleChange = (event, type) => {
        let stateMap = {
            shoe: (event) => setShoe(event.target.value),
            size: (event) => setSize(event.target.value),
            condition: (event) => setCondition(event.target.value),
            description: (event) => setDescription(event.target.value)
        };
        stateMap[type](event);
     }

     const submitAdd = (e) => {
        e.preventDefault();

        let shoe_user_id = props.location.pathname.split("/")[2]

        let new_shoe = {
            shoe: shoe.id,
            size: size,
            condition: condition,
            description: description,
            user_id: shoe_user_id

        }
        props.addShoe(new_shoe)
        history.push(`/user/${user_id}`)
    }

    let {fetchAllShoes} = props

    useEffect(() => {
        fetchAllShoes();
    }, [])
    
    // let user= props.users.filter(user => user.username == props.location.pathname.split("/")[2])
    // let user_id = user.map(i => i.id)
    const user_id= props.location.pathname.split("/")[2]

    return (
        <div>
             <Bio user_shoes={props.user_shoes.filter(s => s.user.id == user_id)}></Bio>
             <UserShoeCardContainer user_shoes={props.user_shoes.filter(s => s.user.id == user_id)} ></UserShoeCardContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // user_shoes: state.shoes.user_shoes.filter(s => s.user.id ==1)
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