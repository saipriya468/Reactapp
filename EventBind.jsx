import React from "react";
class BindEx extends React.Component{
    constructor(){
        super();
        this.state={
            message:"hello",
        }
    }
    wishHandler=(x)=>{
        this.setState({message:x});
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
          <button className="btn btn-success" onClick={this.wishHandler.bind(this,"goodmorning")}>GdM</button>
          <button className="btn btn-primary" onClick={this.wishHandler.bind(this,"GoodEvening")}>GDE</button>
            </div>
        )
    }
}
export default BindEx;