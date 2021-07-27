import React from "react";
class InForm extends React.Component{
    state={
        userName: '',
        password: ''
    }
    nameHandler=(e)=>{
        console.log(this.state.userName);
        this.setState({userName:e.target.value})
        ;
    };
    pswHandler=(e)=>{
        console.log(this.state.password);
        this.setState({
            password:e.target.value
        })
    }
    subHandler=(e)=>{
        console.log("name : ", this.state.userName, "pse:",this.state.password)
        e.preventDefault()
        alert(JSON.stringify(this.state))
    }
    
    render(){
        return(
            <div>
                JSON.stringify({this.state.userName}{" "}{this.state.password})
               <form action="" >
                   <label>UserName</label>
                   <input type="text" name="userName" id="" onChange={this.nameHandler} value={this.state.userName}/>
                   <label>password</label>
                   <input type="text" name="password"  onChange={this.pswHandler}/>
                   <input type="submit" onClick={this.subHandler}  
                    />
               </form>
            </div>
        )
    }
}
export default InForm;