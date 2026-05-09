import React from "react";

const Child1 = ({selectedOption, setSelectedOption})=>{

    return(
        <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={()=>{setSelectedOption(true)}}>Option 1</button>
        </div>
    )
}

export default Child1