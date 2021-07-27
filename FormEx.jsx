import React, { useState } from "react";
let FormEx =()=>{
    let initialstate=0;
    let [count,setCount]=useState(initialstate);
    return(
        <div>
    <button className="btn btn-danger" onClick={()=>setCount(count+1)}>INCR::::{count}</button>
    <button className="btn btn-primary" onClick={()=>setCount(initialstate)}>reset</button>
        </div>
    )
}
export default FormEx;