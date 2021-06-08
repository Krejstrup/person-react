import React from "react";

const PersonDetails = (props) => {
  return (
    // personal info---------------------
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>First Name</b>
          <p>{props.person.firstName}</p>
        </li>
        <li className="list-group-item">
          <b>Last Name:</b>
          <p>{props.person.lastName}</p>
        </li>
        <li className="list-group-item">
          <b>Phone:</b>
          <p>{props.person.phone}</p>
        </li>

        {/* props.personLanguages => obj.languageId */}
        {props.person.personLanguages.map((language) => {
          return (
            <li key={language.languageId} className="list-group-item">
              <b>Language:</b>
              <p>
                {
                  // this.props.languageArray.find(
                  //   (x) => x.id === language.languageId
                  // ).name
                  language.languageId
                }
              </p>
            </li>
          );
        })}

        <li className="list-group-item">
          <b>City:</b>
          <p>{props.person.inCity.name}</p>
        </li>
        <li className="list-group-item">
          <b>Country:</b>
          <p>{props.person.inCity.countryId}</p>
        </li>

        {/* Action stuff -------------------- */}
        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deletePerson(props.person.id)}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};
export default PersonDetails;
