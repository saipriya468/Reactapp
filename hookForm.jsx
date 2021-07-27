import React, { useState } from"react";
let NameForm=()=>{
    const[name,setName]=useState({firstname:'',lastname:''});
  const  subHandler=(e)=>{
          e.preventDefault();
          console.log(name);
          alert(JSON.stringify(name));
    }
    return(
        <div>
            <form onSubmit={subHandler}>
            <label >FirstName:{name.firstname}</label>
         <input type="text" name="firstname"  onChange={(event)=>setName({...name,firstname:event.target.value})}/>
         <label >LastName:{name.lastname}</label>
         <input type="text" name="lastname" onChange={(e)=>setName({...name,lastname:e.target.value})} />
<button className="btn btn-primary" type="submit" >submit</button>
</form>
        </div>
    )
}
export default NameForm;