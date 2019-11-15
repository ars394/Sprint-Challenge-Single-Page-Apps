//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

/*
export default function SearchForm() {
 
  return (
    <section className="search-form">
     // Add a search form here
    </section>
  );
}
*/

const characters = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith",
  "Abadano Cluster",
  "Abradolf Lincler",
  "Adjudicator Rick",
  "Agency Director",
  "Alan Rails",
  "Albert Einstein",
  "Alexander",
  "Alien Googah",
  "Alien Rick",
  "Amish Cyborg",
  "Annie",
  "Antenna Morty",
  "Antenna Rick",
  "'Ants in my Eyes' Johnson"
];
export default function SearchForm() {
  // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="SearchForm">
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SearchForm />, rootElement);

