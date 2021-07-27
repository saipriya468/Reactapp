import React  from "react";
function ContactCard(props){
return(
    <div>
        <div className="container">
<div className="row">
<div className='card'>
    <div className="card-header">
<img src={props.selectedContact.picture.medium} alt="some" />
    </div>
    <div className="card-body">
<ul>
    <li>{props.selectedContact.name.first}</li>
    <li>{props.selectedContact.dob.age}</li>
    <li>{props.selectedContact.phone}</li>

</ul>
    </div>
</div>
</div>
        </div>
    </div>
)
}
export default ContactCard;