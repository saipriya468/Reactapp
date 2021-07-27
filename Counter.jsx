import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incr_Action, decr_Action } from "../redux/counter.actions";
let Counter=()=>{
    let countData=useSelector((state)=>{
        return state.counter;
    });
    let dispatch=useDispatch();
    let INCR_handler=()=>{
        dispatch(incr_Action());
    }
    let DECR_handler=()=>{
        dispatch(decr_Action());
    }
    return(
        <div>
          <div className="container mt-4">
              <div className="card">
                 <div className="card-header">
                 </div>
                 <div className='card-body'>
                     <h6>countervalue:{countData.counter}</h6>
                  <button className="btn btn-primary" onClick={INCR_handler}>+</button>
                  <button className="btn btn-warning" onClick={DECR_handler}>-</button>
                 </div>
              </div>
          </div>
        </div>
    )
}
export default Counter;