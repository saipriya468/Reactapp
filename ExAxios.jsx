import React from "react";
import Axios from "axios";
class FetchApi extends React.Component{
    state={
        contact:""
    }
    getData=()=>{
        let API_URL ="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    Axios.get(API_URL).then((res)=>this.setState({contact:res.data})).catch();
    }
    render(){
        return(
            <div>
                <button className="btn btn-warning" onClick={this.getData} >axiosData</button>
                <p>{JSON.stringify(this.state.contact)}</p>
            </div>
        )
    }
}
export default FetchApi;