import React from "react";
function ConList(props)  {
    let pushData = (contact) => {
        props.getData(contact);
      };
    
    return (
        <div>
            <pre>{JSON.stringify(props.contacts)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>image</th>
                                    <th>Loc</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.contacts.length > 0 ? (
                                    <React.Fragment>
                                        {props.contacts.map((contactData) => {
                                            return (
                                                <tr onClick={pushData.bind(this,contactData)}>
                                                    <th>{contactData.name.first}</th>
                                                    <th>{contactData.email}</th>
                                                    <th><img src={contactData.picture.medium} alt="alternate" /></th>
                                                    <th>{contactData.location.city}</th>
                                                </tr>
                                            )
                                        })}
                                    </React.Fragment>) : null}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ConList;