import React, { useEffect, useState } from "react";
import { withRouter } from "react-router"
import { connect } from "react-redux";
import { fetchAllShoes } from "../redux/actions/fetchAllShoes";
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { addUserShoe } from '../redux/actions/addUserShoe';
import { fetchAllUserShoes } from "../redux/actions/fetchAllUserShoes";


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));



const AddShoe = (props) => {
    const options =  props.shoes.map(s=> s.name)
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');
    const [size, setSize] = useState();
    const [condition, setCondition] = useState()
    const [description, setDescription] = useState();
    let history = useHistory();
    const classes = useStyles();
    const [age, setAge] = useState('');
    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };

    const handleChange = (event, type) => {
        let stateMap = {
            // shoe: (event) => setShoe(event.target.value),
            size: (event) => setSize(event.target.value),
            condition: (event) => setCondition(event.target.value),
            description: (event) => setDescription(event.target.value)
        };
        stateMap[type](event);
     }
    useEffect(() => {
      fetchAllShoes();
  }, [])

     const submitAdd = (e) => {
        e.preventDefault();

        let shoe_user_id = props.location.pathname.split("/")[2]

        let new_shoe = {
            shoe_id: props.shoes.filter(s=> s.name == value)[0].id,
            // user_id: shoe_user_id,
            size: size,
            condition: condition,
            description: description,

        }
        props.addUserShoe(new_shoe)
        history.push(`/user/${shoe_user_id}`)
    }

    // console.log(props.shoes.filter(s=> s.name == value)[0].id)
    return (
        <div>
          <br />
          <form onSubmit={(e) => submitAdd(e)}>
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
              renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
            />
                 <FormControl className={classes.margin}>
                  <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={size}
                    onChange={(event) => handleChange(event, "size")}
                    input={<BootstrapInput />}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
                <Button
                  variant="contained"
                  color="default"
                  // className={classes.button}
                  startIcon={<ArrowUpwardIcon />}
                  type="submit"
                  >
                  Add Shoe
              </Button>
           </form>
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
            fetchAllShoes: () => dispatch(fetchAllShoes()),
            addUserShoe: (user_shoe) => dispatch(addUserShoe(user_shoe)),
            fetchAllUserShoes: () => dispatch(fetchAllUserShoes())
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddShoe));