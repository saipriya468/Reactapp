import React, { useState } from "react";
let InputForm=()=>{
    const[name,setName]=useState({firstName:" ",lastName:''});
    const handleSubmit = (evt) => {
        console.log(name);
        evt.preventDefault();

        alert(JSON.stringify(name))

    }  
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">FirstName</label>
                <input type="text" name="firstName" onChange={(e)=>setName({...name,firstName:e.target.value}) } value={name.firstName}/>
                <label htmlFor="">SecondName</label>
               
                <input type="text" name="lastName" onChange={(e)=>setName({...name,lastName:e.target.value})} value={name.SecondName}/>
                <h5>firstname is:{name.firstName}</h5>
    <h5>lastname {name.lastName}</h5>
    <p>{JSON.stringify(name)})</p>
    <input type="submit" value="submit" />
               </form>
        </div>
    )
}
export default InputForm;