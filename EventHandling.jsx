import React from "react";
class EventEx extends React.Component{
    state={
        message:"hello"
    };
    GmHandler=()=>{
        console.log("tets")
        this.setState({message:"Good Morning"})
    }
    GnHandler=()=>{
        this.setState({message:"gd night"})
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
                 <button className="btn btn-primary" onClick={this.GmHandler}>GoodMorning</button>
                 <button className="btn btn-warning" onClick={this.GnHandler}>gd night</button>
            </>
        )
    }
}
export default EventEx;