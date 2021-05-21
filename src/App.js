import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import {connect} from "react-redux"
import shoes from "./redux/reducers/shoes";

const SHOEURL = "http://localhost:3000/shoes"

function App(props) {

const fetchShoes = () => {
  fetch(SHOEURL)
  .then((data) => data.json())
  .then((shoeData) => {
    props.getShoes(shoeData)
    console.log(props)
  })

}


  return (
    <div className="App">
      <button onClick={() => fetchShoes()}>Shoes</button>
      {/* {console.log(props.shoes)} */}
    </div>
  );
}




const mapStateToProps = (state) => {
  return {
    shoes: state.shoes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShoes: (shoes) => {
      dispatch({type:"GETSHOES", payload:shoes})
    }
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)