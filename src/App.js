// import logo from './logo.svg';
// import './App.css';
// import MobileWidget from './components/MobileWidget';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <MobileWidget />
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//            React Progressive Web App
//         </a>
//       </header>
     

//     </div>
//   );
// }

// export default App;


import React from 'react';
import Widget from './components/MobileWidget';
import './App.css';



const App = () => {
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      <div className="widget-container">
        <Widget size="3x2" title="Widget 1" content="Lorem ipsum dolor sit amet." />
        <Widget size="4x2" title="Widget 2" content="Consectetur adipiscing elit." />
      </div>
    </div>
  );
};

export default App;
