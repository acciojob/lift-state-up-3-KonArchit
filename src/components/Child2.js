import React from "react";

const Child2 = ({selectedOption, setSelectedOption})=>{

    return(
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={()=>{setSelectedOption(false)}}>Option 2</button>
        </div>
    )
}

export default Child2