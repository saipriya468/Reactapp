import React from "react";
class CounterForm extends React.Component{
    constructor(){
        super()
    
        this.state={
             count:0,
        }
}
btnHandler=()=>{
    this.setState({
  count:this.state.count+1,
    })
}
    render(){
        return(
            <div>
                <h3>{this.state.count}</h3>
          <button className="btn btn-warning" onClick={this.btnHandler}>ClickME!</button>
            </div>
        )
    }
}
export default CounterForm;