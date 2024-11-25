import React, { useEffect, useState } from "react";
function Counter (){
    // create state for the counter 
    const [count,setCount] = useState(0);

    const handleIncrease = ()=>{setCount(count+1)}
    const handleDecrease = ()=>{setCount(count-1)}

    const handleReset = ()=>{setCount(0)}

    // handlers for increment and decrement

return(
    <div>
    {count}
    
        <button onClick={handleIncrease}>
       Increment
        </button>

        <button onClick={handleDecrease}>
            Decrement
        </button>

        <button onClick={handleReset}>
            Reset
        </button>
    </div>
)


}
export default Counter;