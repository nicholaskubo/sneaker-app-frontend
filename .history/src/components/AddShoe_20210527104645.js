import React, { useEffect, useState } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import Bio from "../components/Bio";
import UserShoeCardContainer from "../components/UserShoeCardContainer";
import { fetchAllShoes } from "../redux/actions/fetchAllShoes";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const AddShoe = (props) => {
    const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
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
    
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddShoe));