// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { Button } from "@mui/material"; // Import Material-UI Button

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to Material UI in React</h1>
//       <Button variant="contained" color="primary">
//         Click Me
//       </Button>
//     </div>
//   );
// }

// export default App;
import React from "react";
import CreateNote from "./components/CreateNote";
import GetNote from "./components/GetNote";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Note Taking App</h1> */}

        <Routes>
          <Route exact path="/" element={<CreateNote />} />
          <Route path="/note/:uniqueId" element={<GetNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
