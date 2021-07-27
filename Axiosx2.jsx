import React from  "react";
import Axios from "axios";
class PostApi extends React.Component{
    constructor(){
        super();
        this.state={
            contact:null
        }
    }

    getData=()=>{
        let API_URL ="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        Axios.get(API_URL).then((res)=>this.setState({contact:res.data})).catch(()=>{})
    }
    render(){

    return(
        <p>
           <button onClick={this.getData}>click</button>
           <pre>{JSON.stringify(this.state.contact)}</pre>
        </p>
    )
}
}
export default PostApi;