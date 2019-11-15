import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
//import styled from 'styled-components';
import {Card, Image, Icon} from 'semantic-ui-react';
import { resolveComponents } from "uri-js";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);

  const id = useEffect (() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log (res);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.err("There's an error!", err);
      })
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterDetails key={characters.id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({character}) {
  return (
    <Card className='char-card'>
      <Image src={character.image} alt='character-pic' />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Description>Status: {character.status}</Card.Description>
        <Card.Description>Species: {character.species} {character.gender}</Card.Description>
        <Card.Description>Origin: {character.origin.name}</Card.Description>
        <Card.Description>Current Location: {character.location.name}</Card.Description>
        <NavLink to='/episode'>
          <Icon name='video' />
          {character.episode.length} Episode{character.episode.length > 1 && 's'}
        </NavLink>
      </Card.Content>
    </Card>
  );
}

/*
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
*/

/* Styled Component cards from React Wars Sprint
const StyledH2 = styled.h2`
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
`;

const StyleP = styled.p`
    color: black;
`;

const Characters = (props) => {
    return (
        <div className="Cards">

          <StyledH2><h2>{props.name}</h2></StyledH2>
          <StyleP><p>Gender: {props.gender}</p></StyleP>
          <StyleP><p>Birth Year: {props.birthday}</p></StyleP>
        </div>
    )
}

export default Characters;
*/

