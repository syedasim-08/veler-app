import logo from './logo.svg';
import './App.css';
import Widget from './components/Widget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Widget />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           React Progressive Web Application
        </a>
      </header>
     

    </div>
  );
}

export default App;






