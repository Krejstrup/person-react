import axios from "axios";

let apiUrl = "https://localhost:44320/api/React";

export default async function getPeople() {
  const data = await fetch(apiUrl);
  return await data.json();
}

export async function getLanguages() {
  const data = await fetch(apiUrl + "/Languages");
  return await data.json();
}

export async function getCities() {
  const data = await fetch(apiUrl + "/Cities");
  return await data.json();
}

export async function getCountries() {
  const data = await fetch(apiUrl + "/Countries");
  return await data.json();
}

export async function getPersonById(id) {
  try {
    //let response = await fetch(apiUrl + "/" + id).then((data) => data.json());
    let response = await axios.get(apiUrl + "/" + id);
    console.log("The Response: ", response);

    let personData = await response.data; // Parse the data to Json response

    return personData;
  } catch (exception) {
    console.log("Exception Error: ", exception);
  }
}

export async function createPerson(person) {
  try {
    let response = await axios.post(apiUrl, {
      person,
    });
    let json = await response.data();
    return json;
  } catch (exception) {
    console.log("Errror!", exception);
  }
}

export async function deletePerson(id) {
  try {
    let response = await axios.delete(apiUrl + id);
    console.log(response); // Check the response if it is allright in the console
    return true; // Everything was allright
  } catch (exception) {
    console.log("Error!!", exception);
    return false; // tell the caller that this didnät work!
  }
}

// ToDo:
// User Login?
//
