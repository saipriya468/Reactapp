import React from 'react';
let ConList = (props) => {
    let pushData=(contact)=>{
        props.getData(contact);
       
    }
    return (
        <>
        <pre>{JSON.stringify(props.contacts)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table hover striped">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>image</th>
                                    <th>loc</th>
                                </tr>
                            </thead>
                            <tbody>
                             {props.contacts.length > 0 ? (
                                 <>
                                    { props.contacts.map((conData)=>{return(
                                        <tr onClick={pushData.bind(this,conData)}>
                                            <th>{conData.name.first}</th>
                                            <th>{conData.email}</th>
                                            <th><img src={conData.picture.medium} alt="" /></th>
                                            <th>{conData.location.city}</th>
                                        </tr>
                                    )})
                                    
                             }</>
                             ) :null}

                             </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )


}
export default ConList;