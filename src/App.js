import './App.css';
import BasicExample from './components/Header/Header';
import React, { Component } from 'react';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BasicExample></BasicExample>

        <Link to="/">go to home page</Link>
        <Link to="/exercise">go to admin page</Link>
        
      
      {/* <button><Link to="/admin">Go to admin page</Link></button> */}
    </div>
  );
}
export default App;
