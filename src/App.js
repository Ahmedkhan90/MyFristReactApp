import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Hi() {
  return (
    <div className="Div">
      <h1 className="Ahmed">
        <strong>Mohammad Ahmed Khan</strong>
      </h1>
      <h2 className="Khan">
        <strong>0311-2030422</strong>
      </h2>
     
    </div>
  );

}
// function MediaCard (title,body,imageUrl){
//   return(
//     <h1>Media Card</h1>
//     <div>
//       <p> This is an image</p>
//       <img src={https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg}/>
//     </div>
//   );
// }

ReactDOM.render(<Hi />, document.querySelector("#root"));
// ReactDOM.render(<MediaCard />, document.querySelector("#root"));

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
//           Mohammad Ahmed Khan
//         </a>
//       </header>
//     </div>
  );
}

export default App;
