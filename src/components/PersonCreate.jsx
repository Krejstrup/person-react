import React, { Component } from "react";

class PersonCreate extends Component {
  // if using form and event remove the default event handeling
  createPerson = (event) => {
    event.preventDefault();

    // Create data for the ViewModel to send via API
    const person = {
      FirstName: event.target["firstName"].value,
      LastName: event.target["lastName"].value,
      Phone: event.target["phone"].value,
      City: event.target["cityId"].value,
      Language: event.target["language"].value,
      //Country: event.target["country"].value,
    };
    console.log("Created Person: ", person);

    this.props.addPerson(person);
  };

  //--------- person creating done - build view --------------

  render() {
    //
    // to select language with a selector/drop we have to get and fill
    //
    const langOptions = this.props.langArray.map((lang) => {
      return (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      );
    });
    //
    // to select city with a selector/drop we have to get and fill from property
    //
    const cityOptions = this.props.cityArray.map((city) => {
      return (
        <option key={city.id} value={city.id}>
          {city.name}
        </option>
      );
    });

    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add a new person</h3>
        </div>

        <form onSubmit={this.createPerson}>
          {/*FirstName Here */}
          <div className="row mb-2">
            <label htmlFor="firstName" className="col-2 mt-2">
              First Name:
            </label>
            <input
              id="firstName"
              type="text"
              required
              className="form-control col-10"
              placeholder="First Name"
            />
          </div>

          {/*LastName Here */}
          <div className="row mb-2">
            <label htmlFor="lastName" className="col-2 mt-2">
              Last Name:
            </label>
            <input
              id="lastName"
              type="text"
              required
              className="form-control col-10"
              placeholder="Last Name"
            />
          </div>

          {/*Phone Here */}
          <div className="row mb-2">
            <label htmlFor="phone" className="col-2 mt-2">
              Phone Number:
            </label>
            <input
              id="phone"
              type="text"
              required
              className="form-control col-10"
              placeholder="Phone Number"
            />
          </div>

          {/*Language select Here */}
          <div className="row mb-2">
            <label htmlFor="language" className="col-2 mt-2">
              Language:
            </label>
            <select id="language" required className="form-control col-10">
              {langOptions}
            </select>
          </div>

          {/*City select Here */}
          <div className="row mb-2">
            <label htmlFor="cityId" className="col-2 mt-2">
              City:
            </label>
            <select id="cityId" required className="form-control col-10">
              {cityOptions}
            </select>
          </div>

          {/*Country drops Here */}
          <div className="row mb-2">{/* figure out how to do this */}</div>

          {/* figure out how to do this */}
          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input
              type="submit"
              className=" btn btn-success"
              value="CreatePerson"
            />
          </div>

          <button className="btn btn-close" onClick={this.props.closeCreate}>
            Close
          </button>
        </form>
      </div>
    );
  }
}

export default PersonCreate;
