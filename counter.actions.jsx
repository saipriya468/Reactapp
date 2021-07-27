let INCR_COUNTER="INCR_COUNTER";
let DECR_COUNTER="DECR_COUNTER";
let incr_Action=()=>{
     return {
         type:INCR_COUNTER,
     }
};
let decr_Action=()=>{
    return{
        type:DECR_COUNTER,
    }
};
export {INCR_COUNTER,DECR_COUNTER,incr_Action,decr_Action}
