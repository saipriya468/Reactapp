import React from"react";
import Axios from "axios";
class PostList extends React.Component{
    constructor(){
        super();
        this.state={
            contacts:[]
        }
    }
    //in 12th line after arrow mark we can place c.log(res.data)
    getData=()=>{
        let API_URL ="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        Axios.get(API_URL).then((res)=>{this.setState({contacts:res.data})}).catch(()=>{});
    }
    render(){
        return(
            <div>
                 <h1>List of posts</h1>
                     
                
                  <button onClick={this.getData}>Click</button>
                 <pre>{JSON.stringify(this.state.contacts)}</pre>
                
                
             </div>
        )
    }
}
/*              posts.length ? posts.map(post => <div key={post.gender}>{post.name}</div>):null
 */
        
export default PostList;