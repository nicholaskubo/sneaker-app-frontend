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
    const options =  props.shoes.map(s=> s.name)
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const [size, setSize] = useState();
    const [condition, setCondition] = useState()
    const [description, setDescription] = useState();
    let history = useHistory();

    // const handleChange = (event, type) => {
    //     let stateMap = {
    //         shoe: (event) => setShoe(event.target.value),
    //         size: (event) => setSize(event.target.value),
    //         condition: (event) => setCondition(event.target.value),
    //         description: (event) => setDescription(event.target.value)
    //     };
    //     stateMap[type](event);
    //  }

     const submitAdd = (e) => {
        e.preventDefault();

        let shoe_user_id = props.location.pathname.split("/")[2]

        let new_shoe = {
            shoe_id: props.shoes.filter(s=> s.name == value)[0].id,
            user_id: shoe_user_id,
            size: size,
            condition: condition,
            description: description,

        }
        props.addShoe(new_shoe)
        history.push(`/user/${shoe_user_id}`)
    }

    // console.log(props.shoes.filter(s=> s.name == value)[0].id)
    return (
        <div>
          <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
          <div>{`inputValue: '${inputValue}'`}</div>
          <br />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            style={{ width: 300 }}
           
          />
        </div>
      );
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