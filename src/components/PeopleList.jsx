import React from "react";

const PeopleList = (props) => {
  const person = props.people.map((person) => {
    //
    // Prepare to write all persons in the list
    //
    return (
      <tr key={person.Id}>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.phone}</td>
        {/* <td>{person.personLanguages.languageId}</td> */}
        <td>{person.inCity.name}</td>
        <td>
          <button
            onClick={() => {
              props.showPerson(person.id);
            }}
            className="btn btn-info"
          >
            Details
          </button>
        </td>
      </tr>
    );
  });

  //
  // Preps done and now display the list structure
  //
  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            {/* <th>1st Language</th> */}
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{person}</tbody>
      </table>
    </div>
  );
};

export default PeopleList;
