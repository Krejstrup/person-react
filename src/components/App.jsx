import React, { Component } from "react";
import getPeople, {
  getPersonById,
  getLanguages,
  getCities,
  getCountries,
  createPerson,
} from "../api/peopleApi";
import PeopleList from "./PeopleList";
import PersonCreate from "./PersonCreate";
import PersonDetails from "./PersonDetails";

export default class App extends Component {
  //
  // Create a State to store machine state and people data
  //
  state = {
    personDetails: null,
    createPerson: false,
    peopleList: [], // "id", "firstName", "lastName", "phone"
    cityList: [], // "id","name", "countryId"
    languageList: [], // "id", "name"
    countryList: [], // "id", "name"
  };

  //
  // Get the data from server
  //
  componentDidMount() {
    const _this = this; // keep track of self object
    //
    // and load the state data:
    //
    getPeople().then((people) => {
      _this.setState({ peopleList: people });
    });

    getCities().then((cities) => {
      _this.setState({ cityList: cities });
    });

    getLanguages().then((languages) => {
      _this.setState({ languageList: languages });
    });

    getCountries().then((countries) => {
      _this.setState({ countryList: countries });
    });
  }

  //------ Some help methods to set state or get data to render ----------------

  // Fetch a person by its ID --------------------------------------------------
  //
  fetchPerson = async (id) => {
    let returnDude = await getPersonById(id);
    return returnDude;
  };

  // Show details of a Person --------------------------------------------------
  // Method is triggered by 'Details' button
  // Fetch the person by its ID, check if not null and set the state:
  //
  showPerson = async (id) => {
    const person = await this.fetchPerson(id);
    // console.log("Got this dude: ", person);
    if (person !== null) {
      //
      // Starting with React, this is a strage way to set a "variable":
      this.setState({
        personDetails: person,
      });
    }
  };

  // And Hide the details of Person again --------------------------------------
  // Method is triggered by 'Close' button:
  //
  hidePerson = () => {
    this.setState({
      personDetails: null,
    });
  };

  // Set mashine state to show the form for creating a new person---------------
  // Method is triggered by 'Create New' button
  // The render logic will 'Magically' open the form when createPerson
  // State is true:
  //
  showCreatePerson = () => {
    this.setState({
      createPerson: true,
    });
  };

  hideCreatePerson = () => {
    this.setState({
      createPerson: false,
    });
  };

  //
  // This will trigger the display of the createPerson
  //
  showCreatePerson = () => {
    this.setState({
      createPerson: true,
    });
  };

  //
  // Create a new person from the Form. The Form data comes from
  // the Prop person. Start by sending it to the API.
  // Then if successful input new person to the state list.
  //
  addPerson = async (person) => {
    const personList = this.state.peopleList;

    person = await createPerson(person);
    console.log("Creating person: ", person);

    if (person !== undefined) {
      personList.push(person); // add this person to the list
    }

    this.setState({
      peopleList: personList, // update the state
      createPerson: false, // close the view
    });
  };

  // Just close the view with the machine state
  closeCreate = () => {
    this.setState({
      createPerson: false,
    });
  };

  //
  // Define the render of the sideElement
  // By using the components made, the functionality is defined here.
  // Enableling the components is used with the Machine states
  //
  render() {
    const sideElement =
      this.state.personDetails !== null ? (
        <PersonDetails
          person={this.state.personDetails}
          closeDetails={this.hidePerson}
          deletePerson={this.deletePerson}
          countruArray={this.state.countryList}
          languageArray={this.state.languageList}
        />
      ) : this.state.createPerson ? (
        <PersonCreate
          addPerson={this.addPerson}
          closeCreate={this.closeCreate}
          langArray={this.state.languageList}
          cityArray={this.state.cityList}
        />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreatePerson} className="btn btn-success">
            Add New Person
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    //------- Now render the restr of the page ----------------------------
    return (
      <React.Fragment>
        <div className="container stay-clear">
          <h3>People API</h3>
          <hr />
          <div className="row">
            <PeopleList
              people={this.state.peopleList}
              showPerson={this.showPerson}
            />
            {sideElement}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
