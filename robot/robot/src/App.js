import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Index from "./components/index"
import {ListStateProvider} from "./AppState"

function App() {
  return (
    <ListStateProvider>
      <div className="App">
        <Index />
      </div>
     
    </ListStateProvider>
    
  );
}

export default App;
