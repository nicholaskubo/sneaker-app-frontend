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

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';





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
   heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const AddShoe = (props) => {
    const options =  props.shoes.map(s=> s.name)
    const [shoeValue, setShoeValue] = useState(options[0]);
    const [shoeInputValue, setShoeInputValue] = useState('');
    const [size, setSize] = useState();
    const [condition, setCondition] = useState()
    const [description, setDescription] = useState('');
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
            shoe_id: props.shoes.filter(s=> s.name == shoeValue)[0].id,
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
          <Grid container spacing={3}>
          <Grid item xs>
            <Autocomplete
              shoeValue={shoeValue}
              onChange={(event, newShoeValue) => {
                setShoeValue(newShoeValue);
              }}
              shoeInputValue={shoeInputValue}
              onInputChange={(event, newShoeInputValue) => {
                setShoeInputValue(newShoeInputValue);
              }}
              id="controllable-states-demo"
              options={options}
           
              renderInput={(params) => <TextField {...params} label="Shoe" variant="outlined" />}
            />
             </Grid>
              <Grid item xs>
              <FormControl className={classes.margin}>
              <InputLabel htmlFor="demo-customized-select-native">Size</InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={size}
                onChange={(event) => handleChange(event, "size")}
                input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option value={5}>US 5</option>
                <option value={5.5}>US 5.5</option>
                <option value={6}>US 6</option>
                <option value={6.5}>US 6.5</option>
                <option value={7}>US 7</option>
                <option value={7.5}>US 7.5</option>
                <option value={8}>US 8</option>
                <option value={8.5}>US 8.5</option>
                <option value={9}>US 9</option>
                <option value={9.5}>US 9.5</option>
                <option value={10}>US 10</option>
                <option value={10.5}>US 10.5</option>
                <option value={11}>US 11</option>
                <option value={11.5}>US 11.5</option>
                <option value={12}>US 12</option>
                <option value={12.5}>US 12.5</option>
                <option value={13}>US 13</option>
                <option value={13.5}>US 13.5</option>
                <option value={14}>US 14</option>
                <option value={14.5}>US 14.5</option>
                <option value={15}>US 15</option>
                <option value={15.5}>US 15.5</option>
                <option value={16}>US 16</option>  
              </NativeSelect>
            </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="Condition">Condition</InputLabel>
                <NativeSelect
                  id="Condition"
                  value={condition}
                  onChange={(event) => handleChange(event, "condition")}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>1</option>
                  <option value={1.5}>1.5</option>
                  <option value={2}>2</option>
                  <option value={2.5}>2.5</option>
                  <option value={3}>3</option>
                  <option value={3.5}>3.5</option>
                  <option value={4}>4</option>
                  <option value={4.5}>4.5</option>
                  <option value={5}>5</option>
                  <option value={5.5}>5.5</option>
                  <option value={6}>6</option>
                  <option value={6.5}>6.5</option>
                  <option value={7}>7</option>
                  <option value={7.5}>7.5</option>
                  <option value={8}>8</option>
                  <option value={8.5}>8.5</option>
                  <option value={9}>9</option>
                  <option value={9.5}>9.5</option>
                  <option value={10}>10</option>
                </NativeSelect>
              </FormControl>
              </Grid>
              </Grid>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  rowsMax={4}
                  value={description}
                  onChange={(event) => handleChange(event, "description")}
                  variant="outlined"
                />
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