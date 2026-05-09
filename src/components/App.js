import React from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

const App = () => {

  let [selectedOption, setSelectedOption] = useState(false)

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      
      <Child1 
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      />

      <Child2 
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      />

      <p>Selected Option: {selectedOption ? "Option 1" : "Option 2"}</p>
    </div>
  )
}

export default App
