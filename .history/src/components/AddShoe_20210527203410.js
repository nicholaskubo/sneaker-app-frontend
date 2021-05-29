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
  
  
  input: {
    borderRadius: 4,
   
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '14px 26px 10px 36px',
  
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
    const sizeOptions = ["US 5", "US 5.5", "US 6", "US 6.5", "US 7", 
    "US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", 
    "US 11.5", "US 12", "US 12.5", "US 13", "US 13.5", "US 14", "US 14.5", "US 15",
     "US 15.5", "US 16"]
    const conditionOptions = ["1/10", "1.5/10", "2/10", "2.5/10", "3/10", "3.5/10", "4/10", "4.5/10", "5/10", 
    "5.5/10", "6/10", "6.5/10", "7/10", "7.5/10", "8/10", "8.5/10", "9/10", "9.5/10", "10/10"]
    const [shoeValue, setShoeValue] = useState(options[0]);
    const [shoeInputValue, setShoeInputValue] = useState('');
    const [sizeValue, setSizeValue] = useState(sizeOptions[0]);
    const [sizeInputValue, setSizeInputValue] = useState('');
    const [conditionValue, setConditionValue] = useState(conditionOptions[0]);
    const [conditionInputValue, setConditionInputValue] = useState('');
    const [description, setDescription] = useState('');
    let history = useHistory();
    const classes = useStyles();


    const handleChange = (event, type) => {
        let stateMap = {
      
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
            size: sizeValue.split(" ")[1],
            condition: conditionValue.split("/")[0],
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
              value={shoeValue}
              onChange={(event, newShoeValue) => {
                setShoeValue(newShoeValue);
              }}
              inputValue={shoeInputValue}
              onInputChange={(event, newShoeInputValue) => {
                setShoeInputValue(newShoeInputValue);
              }}
              id="shoe_select"
              options={options}
           
              renderInput={(params) => <TextField {...params} label="Shoe" variant="outlined" />}
            />
             </Grid>
             <Grid item xs>
             <Autocomplete
              value={sizeValue}
              onChange={(event, newSizeValue) => {
                setSizeValue(newSizeValue);
              }}
              inputValue={sizeInputValue}
              onInputChange={(event, newSizeInputValue) => {
                setSizeInputValue(newSizeInputValue);
              }}
              id="size_select"
              options={sizeOptions}
           
              renderInput={(params) => <TextField {...params} label="Size" variant="outlined" />}
            />
            </Grid>
            <Grid item xs>
            <Autocomplete
              value={conditionValue}
              onChange={(event, newConditionValue) => {
                setConditionValue(newConditionValue);
              }}
              inputValue={conditionInputValue}
              onInputChange={(event, newConditionInputValue) => {
                setConditionInputValue(newConditionInputValue);
              }}
              id="condition_select"
              options={conditionOptions}
           
              renderInput={(params) => <TextField {...params} label="Condition" variant="outlined" />}
            />
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
                 <div>{`value: ${conditionValue !== null ? `'${conditionValue}'` : 'null'}`}</div>
              <div>{`inputValue: '${conditionInputValue}'`}</div>
                <Button
                  variant="contained"
                  color="secondary"
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