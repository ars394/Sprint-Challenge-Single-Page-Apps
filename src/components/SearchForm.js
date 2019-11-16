import React, { useState } from "react";

function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = x => {
    setResults(x.target.value);
  };

  const submitHandler = x => {
    x.preventDefault();

    const organized = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(organized);
    console.log(organized);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search Characters"
        ></input>
      </form>
    </section>
  );
}

export default SearchForm;