import logo from './logo.svg';
import './App.css';
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();
sneaks.getProducts("Yeezy Cinder", function(err, products){
  console.log(products)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
