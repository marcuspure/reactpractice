import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

let element = <h1 style={{color:"red"}}>{"第一個react"}</h1>
console.log("show element detail:",element)
  return (
    <div className="App">
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  
         {/* {<h1 style={{color:"gold"}}>{"You did a good job!!"}</h1>} */}
        
        {/*  === 新增的程式碼 === */}
        {/* 底下用大括弧把上面宣告的element包起來 */}
        {element}      
        {/* ================== */}
       


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
