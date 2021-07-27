import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import ConList from "./ConList";
import ConCard from "./ConCard"
function ConApp(){
    let [cont,setCont]=useState({
        contacts:[],
        errmsg:null,selectedCont:{}

    });
    useEffect(()=>{
        let API_URL ="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";

Axios.get(API_URL).then((res)=>{
    setCont({...cont,contacts:res.data})}).catch((err)=>
{setCont({errmsg:err})})
    },[])
    let pullData=(conData)=>{
setCont({...cont,selectedCont:conData})
    }
    return(
        <div>
          <pre>{JSON.stringify(cont.contacts)}</pre>
          <div className="container">
          <div className="row">
           <div className="col-md-8">
            <ConList contacts={cont.contacts } getData={pullData}/>
           </div>
           <div className="col-md-4">
               {Object.keys(cont.selectedCont).length > 0 ? 
               <>
                <ConCard selectedCont={cont.selectedCont}/>
               </>:null}
           </div>
          </div>
          </div>
        </div>
    )
}
export default ConApp;