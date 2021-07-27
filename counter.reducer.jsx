import { INCR_COUNTER,DECR_COUNTER } from "./counter.actions";
let initialstate={
    counter:2,
};
//const counting="counterWord";
let counterReducer=(state=initialstate,action)=>{
    switch(action.type){
        case INCR_COUNTER:
            return{
                counter:state.counter+1,
        }
        case DECR_COUNTER:
            return{
                counter:state.counter-1,
            }
            default:
                return state;
    };
};

export  {counterReducer};

