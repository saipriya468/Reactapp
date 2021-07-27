import React from 'react';
let ConCard=(props)=>{
    return(
    <React.Fragment>
        <div className="container">
         <div className="row">
          <div className="col">
             <div className="card">
              <div className="card-header">
             <img src={props.selectedCont.picture.medium} alt="" />
              </div>
              <div className="card-body">
               <ul>
                <li>{props.selectedCont.name.first}</li>
                <li>{props.selectedCont.dob.age}</li>
                <li>{props.selectedCont.phone}</li>
               </ul>
              </div>
             </div>
          </div>
         </div>
        </div>
    </React.Fragment>
    )
}
export default ConCard;