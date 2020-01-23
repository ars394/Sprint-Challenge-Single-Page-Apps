import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const ContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [gotData, changeData] = useState([])

   const search = characterArray => {
     changeData(characterArray)

 };

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characterInfo = response.data.results;
        console.log("Character information returned", characterInfo);
        setCharacters(characterInfo);
        changeData(characterInfo);
      })
      .catch(error => {
        console.log("Sorry, there was an error!", error);
      });
  }, []);

  return (
    <section className="character-list">
      <ContentCenter>
        <h2>Character List</h2>
        <Link to={"/"}>
        <button>Home</button>
        </Link>
        <SearchForm search={search} characters={characters} />
      </ContentCenter>
        {gotData.map(char => {
          return (
            <CharacterCard
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            //origin={char.origin}
            image={char.image}
            />
          )
        })}
        <ContentCenter>
        <Link to={"/"}>
        <button>Home</button>
        </Link>
      </ContentCenter>
        

    </section>
  );

}